import { chakra, Icon } from "@chakra-ui/react";
import { addMonths, format, isEqual, subMonths } from "date-fns";
import * as React from "react";
import { v4 as uuid } from "uuid";
import { DAYS } from "./constants";
import { useStyles } from "./hooks";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import { Nullable } from "./types";
import { getCalendar, noop } from "./utils";

type CalendarProps = {
  selected?: Nullable<Date>;
  onSelect?(selected: Nullable<Date>): void;
};

export default function Calendar({ selected, onSelect = noop }: CalendarProps) {
  const [baseDate, setBaseDate] = React.useState(selected ?? new Date());

  const calendar = React.useMemo(() => {
    return getCalendar(baseDate);
  }, [baseDate]);

  const styles = useStyles();

  return (
    <chakra.div>
      <chakra.div display="flex" alignItems="center">
        <chakra.button
          onClick={() => {
            setBaseDate((d) => subMonths(d, 1));
          }}
          tabIndex={-1}
          sx={styles.calendarControlButton()}
        >
          <Icon as={ChevronLeftIcon} sx={styles.calendarControlIcon()} />
        </chakra.button>

        <chakra.p sx={styles.calendarControlLabel()}>{format(baseDate, "MMMM")}</chakra.p>

        <chakra.button
          onClick={() => {
            setBaseDate((d) => addMonths(d, 1));
          }}
          tabIndex={-1}
          sx={styles.calendarControlButton()}
        >
          <Icon as={ChevronRightIcon} sx={styles.calendarControlIcon()} />
        </chakra.button>
      </chakra.div>

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
              {arr.map(({ value, isToday, isPlaceholder }) => {
                const formatted = format(value, "yyyy-MM-dd");
                const isSelected = !!selected && isEqual(selected, value);

                return (
                  <chakra.td key={uuid()}>
                    <chakra.button
                      tabIndex={-1}
                      onClick={() => {
                        onSelect(value);
                        setBaseDate(value);
                      }}
                      sx={styles.calendarDate({
                        isToday,
                        isSelected,
                        isPlaceholder,
                      })}
                      data-testid={`hds.datepicker.calendar.date.${formatted}`}
                    >
                      {value.getDate()}
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
