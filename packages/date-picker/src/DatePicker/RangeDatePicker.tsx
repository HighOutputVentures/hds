import { chakra } from "@chakra-ui/react";
import { Button } from "@highoutput/hds-forms";
import { addMonths, format, subMonths } from "date-fns";
import * as React from "react";
import { v4 as uuid } from "uuid";
import { DAYS } from "../constants";
import { useStyles } from "../hooks";
import { DateRange, Nullable, TimeAdverbial } from "../types";
import { getDateRangeByTimeAdverbial, getRangeCalendar, invariant, noop } from "../utils";
import { DatePickerControl } from "./DatePickerControl";
import {
  useRangeDatePickerContext,
  withRangeDatePickerContext,
} from "./RangeDatePickerProvider";

export type RangeDatePickerProps = {
  /**
   *
   * Not implemented yet
   *
   */
  events?: Date[];
  onApply?(value: { [P in keyof DateRange]: NonNullable<DateRange[P]> }): void;
  onCancel?(currentValue: DateRange): void;
  defaultValue?: DateRange;
  hasTimeAdverbial?: boolean;
  includePreviousMonth?: boolean;
};

export const RangeDatePicker = withRangeDatePickerContext(function RangeDatePicker({
  onApply,
  onCancel,
  defaultValue,
  hasTimeAdverbial,
  includePreviousMonth,
}: RangeDatePickerProps) {
  const context = useRangeDatePickerContext();

  React.useEffect(() => {
    if (defaultValue) context.updateSelectedRangeHard(defaultValue);
  }, [defaultValue]);

  return (
    <chakra.div width="fit-content" rounded="8px" border="1px" borderColor="gray.100">
      <chakra.div display="flex">
        {hasTimeAdverbial && (
          <React.Fragment>
            <TimeAdverbialMenu />
            <Divider />
          </React.Fragment>
        )}

        <chakra.div>
          <chakra.div display="flex">
            {includePreviousMonth && (
              <React.Fragment>
                <PreviousCalendar />
                <Divider />
              </React.Fragment>
            )}

            <CurrentCalendar />
          </chakra.div>

          <Divider isHorizontal />

          <chakra.div display="flex" padding="16px" alignItems="center">
            {includePreviousMonth && <SelectedDates />}

            <chakra.div flexGrow={1} />

            <chakra.div display="flex" gap="12px">
              <Button
                variant="outline"
                accent="gray"
                onClick={() => {
                  onCancel?.(context.dateRange);
                  context.reset();
                }}
              >
                Cancel
              </Button>
              <Button
                isDisabled={!context.dateRange.start || !context.dateRange.until}
                onClick={() => {
                  const { start, until } = context.dateRange;

                  invariant(start && until);

                  context.reset();
                  onApply?.({
                    start,
                    until,
                  });
                }}
              >
                Apply
              </Button>
            </chakra.div>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
});

function TimeAdverbialMenu() {
  const context = useRangeDatePickerContext();

  const [selected, setSelected] = React.useState<Nullable<TimeAdverbial>>(null);

  React.useEffect(() => {
    return () => {
      setSelected(null);
    };
  }, []);

  return (
    <chakra.div display="flex" flexDir="column" paddingY="12px" paddingX="16px">
      {Object.values(TimeAdverbial).map((value) => (
        <chakra.button
          key={uuid()}
          sx={{
            width: "150px",
            paddingX: "16px",
            paddingY: "10px",
            textAlign: "left",
            rounded: "6px",
            color: "neutrals.700",
            fontSize: "14px",
            lineHeight: "20px",
            transition: "all 300ms ease-in-out",
            _hover: {
              color: "neutrals.900",
              fontWeight: "medium",
            },

            ...(selected === value && {
              color: "neutrals.900",
              bgColor: "neutrals.100",
              fontWeight: "medium",
              _hover: {},
            }),
          }}
          tabIndex={-1}
          onClick={() => {
            setSelected(value);

            const dateRange = getDateRangeByTimeAdverbial(value);
            context.updateSelectedRangeHard(dateRange);

            if (dateRange.start) {
              context.setCurrentDate(dateRange.start);
            } else {
              context.setCurrentDate(new Date());
            }

            if (value === TimeAdverbial.AllTime) context.reset();
          }}
        >
          {value}
        </chakra.button>
      ))}
    </chakra.div>
  );
}

function SelectedDates() {
  const context = useRangeDatePickerContext();

  return (
    <chakra.div display="flex" gap="12px" alignItems="center">
      <SelectedDateItem>
        {context.dateRange.start && format(context.dateRange.start, "MMM dd, yyyy")}
      </SelectedDateItem>

      <chakra.div w="8px" borderTop="2px" borderColor="Gray.500" />

      <SelectedDateItem>
        {context.dateRange.until && format(context.dateRange.until, "MMM dd, yyyy")}
      </SelectedDateItem>
    </chakra.div>
  );
}

const SelectedDateItem = chakra("div", {
  baseStyle: {
    h: "44px",
    py: "10px",
    px: "14px",
    minW: "125px",
    rounded: "4px",
    border: "1px",
    borderColor: "neutrals.200",
  },
});

function Divider({ isHorizontal }: { isHorizontal?: boolean }) {
  return (
    <chakra.div
      sx={{
        borderStyle: "solid",
        borderColor: "gray.100",

        ...(isHorizontal && {
          width: "full",
          borderTopWidth: "1px",
        }),

        ...(!isHorizontal && {
          alignSelf: "stretch",
          borderLeftWidth: "1px",
        }),
      }}
    />
  );
}

function CurrentCalendar() {
  const { currentDate, updateSelectedRange, setCurrentDate } =
    useRangeDatePickerContext();

  return (
    <Calendar
      baseDate={currentDate}
      onSelect={updateSelectedRange}
      onNext={() => setCurrentDate(addMonths(currentDate, 1))}
      onPrev={() => setCurrentDate(subMonths(currentDate, 1))}
    />
  );
}

function PreviousCalendar() {
  const { currentDate, updateSelectedRange, setCurrentDate } =
    useRangeDatePickerContext();

  return (
    <Calendar
      baseDate={subMonths(currentDate, 1)}
      onSelect={updateSelectedRange}
      onNext={() => setCurrentDate(addMonths(currentDate, 1))}
      onPrev={() => setCurrentDate(subMonths(currentDate, 1))}
    />
  );
}

type CalendarProps = {
  baseDate: Date;
  onSelect?(date: Date): void;
  onNext?(): void;
  onPrev?(): void;
};

function Calendar({ baseDate, onSelect = noop, onNext, onPrev }: CalendarProps) {
  const styles = useStyles();
  const context = useRangeDatePickerContext();
  const calendar = getRangeCalendar(baseDate, {
    start: context.dateRange.start,
    until: context.dateRange.until,
  });

  return (
    <chakra.div sx={styles.calendar()}>
      <DatePickerControl value={baseDate} onNext={onNext} onPrev={onPrev} />

      <chakra.table sx={styles.calendarMain()} data-testid="hds.datepicker.calendar">
        <chakra.thead>
          <chakra.tr>
            {DAYS.map((d) => (
              <chakra.th
                key={uuid()}
                sx={styles.calendarWeek()}
                data-testid="hds.datepicker.calendar.weekday"
              >
                {d}
              </chakra.th>
            ))}
          </chakra.tr>
        </chakra.thead>

        <chakra.tbody>
          {calendar.map((arr) => (
            <chakra.tr key={uuid()}>
              {arr.map(
                ({
                  value,
                  isToday,
                  isPlaceholder,
                  isWithinRange,
                  isRangeStartDate,
                  isRangeUntilDate,
                }) => {
                  const isSelected = isRangeStartDate || isRangeUntilDate;

                  return (
                    <chakra.td key={uuid()}>
                      <chakra.button
                        tabIndex={-1}
                        onClick={() => {
                          onSelect(value);
                        }}
                        sx={styles.calendarDate({
                          isToday,
                          isSelected,
                          isPlaceholder,
                          isWithinRange,
                        })}
                        data-testid="hds.datepicker.calendar.date"
                      >
                        {value.getDate()}
                      </chakra.button>
                    </chakra.td>
                  );
                },
              )}
            </chakra.tr>
          ))}
        </chakra.tbody>
      </chakra.table>
    </chakra.div>
  );
}
