import { chakra } from '@chakra-ui/react';
import { addMonths, format, isEqual, subMonths } from 'date-fns';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { DAYS } from '../constants';
import { useStyles } from '../hooks';
import { getCalendar, noop } from '../utils';
import { DatePickerControl } from './DatePickerControl';

export type DatePickerProps = {
  value?: Date;
  onChange?(selected: Date): void;
};

export function DatePicker({ value, onChange = noop }: DatePickerProps) {
  const [baseDate, setBaseDate] = React.useState(value ?? new Date());

  const calendar = React.useMemo(() => getCalendar(baseDate), [baseDate]);
  const styles = useStyles();

  return (
    <chakra.div sx={styles.calendar({ hasBorder: true })}>
      <DatePickerControl
        value={baseDate}
        onNext={() => setBaseDate((d) => addMonths(d, 1))}
        onPrev={() => setBaseDate((d) => subMonths(d, 1))}
        __nextButtonTestId="hds.datepicker.controls.next-month"
        __prevButtonTestId="hds.datepicker.controls.prev-month"
        __selectedMonthTestId="hds.datepicker.selected-month"
      />

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
              {arr.map(({ isToday, isPlaceholder, ...obj }) => {
                const formatted = format(obj.value, 'yyyy-MM-dd');
                const isSelected = !!value && isEqual(obj.value, value);

                return (
                  <chakra.td key={uuid()}>
                    <chakra.button
                      tabIndex={-1}
                      onClick={() => {
                        onChange(obj.value);
                        setBaseDate(obj.value);
                      }}
                      sx={styles.calendarDate({
                        isToday,
                        isSelected,
                        isPlaceholder,
                      })}
                      data-testid={`hds.datepicker.calendar.date.${formatted}`}
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
