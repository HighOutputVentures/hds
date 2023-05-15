import { chakra } from '@chakra-ui/react';
import { Button } from '@highoutput/hds-forms';
import { addMonths, endOfDay, format, startOfDay, subMonths } from 'date-fns';
import * as React from 'react';
import { invariant, slugify } from 'shared/utils';
import { v4 as uuid } from 'uuid';
import { DAYS } from '../constants';
import { useStyles } from '../hooks';
import { DateRange, TimeAdverbial } from '../types';
import { getDateRangeByTimeAdverbial, getRangeCalendar, noop } from '../utils';
import { DatePickerControl } from './DatePickerControl';
import {
  RangeDatePickerProvider,
  useRangeDatePickerContext,
} from './RangeDatePickerProvider';

export type RangeDatePickerProps = {
  value?: DateRange;
  events?: Date[];
  onApply?(value: DateRange): void;
  onCancel?(currentValue: Partial<DateRange>): void;
  hasTimeAdverbial?: boolean;
  includePreviousMonth?: boolean;
};

function RangeDatePickerInternal({
  onApply,
  onCancel,
  hasTimeAdverbial = true,
  includePreviousMonth = true,
}: RangeDatePickerProps) {
  const context = useRangeDatePickerContext();

  return (
    <chakra.div
      width="fit-content"
      rounded="8px"
      border="1px"
      borderColor="gray.100"
      bgColor="white"
    >
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
                  onCancel?.({
                    start: context.dateRange.start
                      ? startOfDay(context.dateRange.start)
                      : undefined,
                    until: context.dateRange.until
                      ? endOfDay(context.dateRange.until)
                      : undefined,
                  });

                  context.reset();
                }}
                data-testid="hds.range-datepicker.controls.cancel"
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
                    start: startOfDay(start),
                    until: endOfDay(until),
                  });
                }}
                data-testid="hds.range-datepicker.controls.apply"
              >
                Apply
              </Button>
            </chakra.div>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
}

function TimeAdverbialMenu() {
  const context = useRangeDatePickerContext();

  const [selected, setSelected] = React.useState<TimeAdverbial | undefined>();

  React.useEffect(() => {
    return () => {
      setSelected(undefined);
    };
  }, []);

  return (
    <chakra.div display="flex" flexDir="column" paddingY="12px" paddingX="16px">
      {Object.values(TimeAdverbial).map((value) => (
        <chakra.button
          key={uuid()}
          sx={{
            width: '150px',
            paddingX: '16px',
            paddingY: '10px',
            textAlign: 'left',
            rounded: '6px',
            color: 'neutrals.700',
            fontSize: '14px',
            lineHeight: '20px',
            transition: 'all 300ms ease-in-out',
            _hover: {
              color: 'neutrals.900',
              fontWeight: 'medium',
            },

            ...(selected === value && {
              color: 'neutrals.900',
              bgColor: 'neutrals.100',
              fontWeight: 'medium',
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
          data-testid={`hds.range-datepicker.controls.time-adverb.${slugify(value)}`}
        >
          {value}
        </chakra.button>
      ))}
    </chakra.div>
  );
}

function SelectedDates() {
  const context = useRangeDatePickerContext();

  const start = context.dateRange.start
    ? format(context.dateRange.start, 'MMM dd, yyyy')
    : 'Select date';

  const until = context.dateRange.until
    ? format(context.dateRange.until, 'MMM dd, yyyy')
    : 'Select date';

  return (
    <chakra.div
      display="flex"
      gap="12px"
      alignItems="center"
      data-testid="hds.range-datepicker.selected-dates"
    >
      <SelectedDateItem
        data-placeholder={!context.dateRange.start}
        date-testid="hds.range-datepicker.selected-date.start"
      >
        {start}
      </SelectedDateItem>

      <chakra.div w="8px" borderTop="2px" borderColor="Gray.500" />

      <SelectedDateItem
        data-placeholder={!context.dateRange.until}
        date-testid="hds.range-datepicker.selected-date.until"
      >
        {until}
      </SelectedDateItem>
    </chakra.div>
  );
}

const SelectedDateItem = chakra('div', {
  baseStyle: {
    h: '44px',
    py: '10px',
    px: '14px',
    minW: '125px',
    border: '1px',
    borderColor: 'neutrals.200',
    rounded: '4px',
    '&[data-placeholder="true"]': {
      color: 'neutrals.500',
    },
  },
});

function Divider({ isHorizontal }: { isHorizontal?: boolean }) {
  return (
    <chakra.div
      sx={{
        borderStyle: 'solid',
        borderColor: 'gray.100',

        ...(isHorizontal && {
          width: 'full',
          borderTopWidth: '1px',
        }),

        ...(!isHorizontal && {
          alignSelf: 'stretch',
          borderLeftWidth: '1px',
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
      <DatePickerControl
        value={baseDate}
        onNext={onNext}
        onPrev={onPrev}
        __nextButtonTestId="hds.range-datepicker.controls.next-month"
        __prevButtonTestId="hds.range-datepicker.controls.prev-month"
        __selectedMonthTestId="hds.range-datepicker.selected-month"
      />

      <chakra.table
        sx={styles.calendarMain()}
        data-testid="hds.range-datepicker.calendar"
      >
        <chakra.thead>
          <chakra.tr>
            {DAYS.map((d) => (
              <chakra.th
                key={uuid()}
                sx={styles.calendarWeek()}
                data-testid="hds.range-datepicker.calendar.weekday"
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
                  const formatted = format(value, 'yyyy-MM-dd');
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
                        data-testid={`hds.datepicker.calendar.date.${formatted}`}
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

export const RangeDatePicker = (props: RangeDatePickerProps) => {
  return (
    <RangeDatePickerProvider value={props.value}>
      <RangeDatePickerInternal {...props} />
    </RangeDatePickerProvider>
  );
};
