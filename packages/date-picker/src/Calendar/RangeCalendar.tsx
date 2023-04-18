import { chakra } from "@chakra-ui/react";
import { Button } from "@highoutput/hds-forms";
import { addMonths, format, isEqual, startOfDay, subMonths } from "date-fns";
import * as React from "react";
import { v4 as uuid } from "uuid";
import { DAYS } from "../constants";
import { useStyles } from "../hooks";
import { DateRange, Nullable, TimeAdverbial } from "../types";
import { getDateRangeByTimeAdverbial, getRangeCalendar, noop } from "../utils";
import { CalendarControl } from "./CalendarControl";
import {
  useRangeCalendarContext,
  withRangeCalendarContext,
} from "./RangeCalendarProvider";

export type RangeCalendarProps = {
  defaultValue?: DateRange;
  /**
   *
   * Not implemented yet
   *
   */
  events?: Date[];
  onApply?(value: Required<DateRange>): void;
  onCancel?(currentValue: DateRange): void;
  hasTimeAdverbial?: boolean;
};

export const RangeCalendar = withRangeCalendarContext(function RangeCalendar(
  _: RangeCalendarProps,
) {
  return (
    <chakra.div width="fit-content" rounded="8px" border="1px" borderColor="gray.100">
      <chakra.div display="flex">
        <TimeAdverbialMenu />
        <Divider />

        <chakra.div>
          <chakra.div display="flex">
            <PreviousCalendar />

            <Divider />

            <CurrentCalendar />
          </chakra.div>

          <Divider isHorizontal />

          <chakra.div display="flex" padding="16px" alignItems="center">
            <SelectedDateRange />

            <chakra.div flexGrow={1} />

            <chakra.div display="flex" gap="12px">
              <Button variant="outline" accent="gray">
                Cancel
              </Button>
              <Button>Apply</Button>
            </chakra.div>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
});

function TimeAdverbialMenu() {
  const context = useRangeCalendarContext();

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
          key={value}
          width="150px"
          paddingX="16px"
          paddingY="10px"
          textAlign="left"
          rounded="6px"
          color="neutrals.700"
          fontSize="14px"
          lineHeight="20px"
          transition="all 300ms ease-in-out"
          _hover={{
            fontWeight: "medium",
            color: "neutrals.900",
          }}
          {...(selected === value && {
            fontWeight: "medium",
            color: "neutrals.900",
            bgColor: "neutrals.100",
            _hover: {},
          })}
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
          }}
        >
          {value}
        </chakra.button>
      ))}
    </chakra.div>
  );
}

function SelectedDateRange() {
  const context = useRangeCalendarContext();

  return (
    <chakra.div display="flex" gap="12px" alignItems="center">
      <chakra.div
        h="44px"
        py="10px"
        px="14px"
        minW="125px"
        rounded="4px"
        border="1px"
        borderColor="neutrals.200"
      >
        {context.dateRange.start && format(context.dateRange.start, "MMM dd, yyyy")}
      </chakra.div>
      <chakra.div w="8px" borderTop="2px" borderColor="Gray.500" />
      <chakra.div
        h="44px"
        py="10px"
        px="14px"
        minW="125px"
        rounded="4px"
        border="1px"
        borderColor="neutrals.200"
      >
        {context.dateRange.until && format(context.dateRange.until, "MMM dd, yyyy")}
      </chakra.div>
    </chakra.div>
  );
}

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
  const { currentDate, updateSelectedRange, setCurrentDate } = useRangeCalendarContext();

  return (
    <Calendar
      value={currentDate}
      onChange={updateSelectedRange}
      onNext={() => setCurrentDate(addMonths(currentDate, 1))}
      onPrev={() => setCurrentDate(subMonths(currentDate, 1))}
    />
  );
}

function PreviousCalendar() {
  const { currentDate, updateSelectedRange, setCurrentDate } = useRangeCalendarContext();

  return (
    <Calendar
      value={subMonths(currentDate, 1)}
      onChange={updateSelectedRange}
      onNext={() => setCurrentDate(addMonths(currentDate, 1))}
      onPrev={() => setCurrentDate(subMonths(currentDate, 1))}
    />
  );
}

type CalendarProps = {
  value: Date;
  onChange?(newValue: Date): void;
  onNext?(): void;
  onPrev?(): void;
};

function Calendar({ value, onChange = noop, onNext, onPrev }: CalendarProps) {
  const styles = useStyles();
  const context = useRangeCalendarContext();
  const calendar = getRangeCalendar(value, {
    start: context.dateRange.start,
    until: context.dateRange.until,
  });

  console.log(context.dateRange);

  return (
    <chakra.div sx={styles.calendar()}>
      <CalendarControl value={value} onNext={onNext} onPrev={onPrev} />

      <chakra.table sx={styles.calendarMain()} data-testid="hds.datepicker.calendar">
        <chakra.thead>
          <chakra.tr>
            {DAYS.map((d) => (
              <chakra.th
                key={uuid()}
                sx={styles.calendarWeek()}
                data-testid={`hds.datepicker.calendar.weekday.${d}`}
              >
                {d}
              </chakra.th>
            ))}
          </chakra.tr>
        </chakra.thead>

        <chakra.tbody>
          {calendar.map((arr) => (
            <chakra.tr key={uuid()}>
              {arr.map(({ isToday, isPlaceholder, isWithinRange, ...obj }) => {
                const isEqualToRangeStart =
                  !!context.dateRange.start &&
                  isEqual(startOfDay(obj.value), startOfDay(context.dateRange.start));

                const isEqualToRangeUntil =
                  !!context.dateRange.until &&
                  isEqual(startOfDay(obj.value), startOfDay(context.dateRange.until));

                const isSelected = isEqualToRangeStart || isEqualToRangeUntil;

                return (
                  <chakra.td key={uuid()}>
                    <chakra.button
                      tabIndex={-1}
                      onClick={() => {
                        onChange(obj.value);
                      }}
                      sx={styles.calendarDate({
                        isToday,
                        isSelected,
                        isPlaceholder,
                        isWithinRange,
                      })}
                      data-testid="hds.datepicker.calendar.date"
                    >
                      {obj.value.getDate()}
                    </chakra.button>
                  </chakra.td>
                );
              })}
            </chakra.tr>
          ))}
        </chakra.tbody>
      </chakra.table>
    </chakra.div>
  );
}
