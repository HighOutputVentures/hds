import {
  addDays,
  compareAsc,
  compareDesc,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  getDaysInMonth,
  isSameDay,
  isToday,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from 'date-fns';
import { START_OF_WEEK } from './constants';
import { CalendarObject, DateRange, RangeCalendarObject, TimeAdverbial } from './types';

export function getCalendar(date: Date) {
  const lastDayOfMonth = endOfMonth(date);
  const firstDayOfMonth = startOfMonth(date);
  const totalDaysInMonth = getDaysInMonth(date);

  const calendar: CalendarObject[] = [];

  for (let i = 0; i < totalDaysInMonth; i++) {
    const d = addDays(firstDayOfMonth, i);

    calendar.push({
      value: d,
      isToday: isToday(d),
    });
  }

  const daysToPreviousSundayFromFirstDay = firstDayOfMonth.getDay() - 0;
  const daysToNextSaturdayFromLastDay = 6 - lastDayOfMonth.getDay();

  if (daysToPreviousSundayFromFirstDay > 0) {
    for (let i = 0; i < daysToPreviousSundayFromFirstDay; i++) {
      calendar.unshift({
        value: subDays(firstDayOfMonth, i + 1),
        isPlaceholder: true,
        isPreviousMonthDate: true,
      });
    }
  }

  if (daysToNextSaturdayFromLastDay > 0) {
    for (let i = 0; i < daysToNextSaturdayFromLastDay; i++) {
      calendar.push({
        value: addDays(lastDayOfMonth, i + 1),
        isPlaceholder: true,
        isNextMonthDate: true,
      });
    }
  }

  /*
   * must have 6 weeks in a calendar based on HDS Figma
   */
  if (calendar.length / 7 < 6) {
    const lastCalendarDate = calendar[calendar.length - 1].value;

    for (let i = 0; i < 7; i++) {
      calendar.push({
        value: addDays(lastCalendarDate, i + 1),
        isPlaceholder: true,
        isNextMonthDate: true,
      });
    }
  }

  return arrayChunk(calendar, 7);
}

export function getDateRangeByTimeAdverbial(adverbial: TimeAdverbial) {
  const today = new Date();

  switch (adverbial) {
    case TimeAdverbial.Today:
      return {
        start: startOfDay(today),
        until: endOfDay(today),
      };

    case TimeAdverbial.Yesterday: {
      const yesterday = subDays(today, 1);

      return {
        start: startOfDay(yesterday),
        until: endOfDay(yesterday),
      };
    }

    case TimeAdverbial.ThisWeek:
      return {
        start: startOfWeek(today, { weekStartsOn: START_OF_WEEK }),
        until: endOfWeek(today, { weekStartsOn: START_OF_WEEK }),
      };

    case TimeAdverbial.LastWeek: {
      const lastWeekFromToday = subWeeks(today, 1);

      return {
        start: startOfWeek(lastWeekFromToday, { weekStartsOn: START_OF_WEEK }),
        until: endOfWeek(lastWeekFromToday, { weekStartsOn: START_OF_WEEK }),
      };
    }

    case TimeAdverbial.ThisMonth:
      return {
        start: startOfMonth(today),
        until: endOfMonth(today),
      };

    case TimeAdverbial.LastMonth: {
      const lastMonthFromToday = subMonths(today, 1);

      return {
        start: startOfMonth(lastMonthFromToday),
        until: endOfMonth(lastMonthFromToday),
      };
    }

    case TimeAdverbial.ThisYear:
      return {
        start: startOfYear(today),
        until: endOfYear(today),
      };

    case TimeAdverbial.LastYear: {
      const lastYearFromToday = subYears(today, 1);

      return {
        start: startOfYear(lastYearFromToday),
        until: endOfYear(lastYearFromToday),
      };
    }

    default:
      return {
        start: new Date(0),
        until: today,
      };
  }
}

export function getRangeCalendar(date: Date, config: Partial<DateRange> = {}) {
  const calendar: RangeCalendarObject[][] = getCalendar(date);

  const dateRangeTuple =
    config.start && config.until ? sortDates([config.start, config.until]) : [];

  return calendar.map((chunk) =>
    chunk.map<RangeCalendarObject>((subject) => {
      const isRangeStartDate = !!config.start && isSameDay(config.start, subject.value);
      const isRangeUntilDate = !!config.until && isSameDay(config.until, subject.value);

      const isWithinRange =
        !isRangeStartDate &&
        !isRangeUntilDate &&
        dateRangeTuple.length === 2 &&
        isWithinInterval(subject.value, {
          start: dateRangeTuple[0],
          end: dateRangeTuple[1],
        });

      return {
        ...subject,
        isWithinRange,
        isRangeStartDate,
        isRangeUntilDate,
      };
    }),
  );
}

type SortDirection = 'asc' | 'desc';

export function sortDates(array: Date[], direction?: SortDirection) {
  const copy = [...array];

  if (direction === 'desc') {
    copy.sort(compareDesc);
  } else {
    copy.sort(compareAsc);
  }

  return copy;
}

export function arrayChunk<T extends unknown[]>(array: T, size: number) {
  const chunks: T[number][][] = [];
  const copy = [...array];

  const len = copy.length;
  const max = Math.ceil(len / size);
  let idx = 0;

  for (; idx < max; idx++) {
    chunks.push(copy.splice(0, size));
  }

  return chunks;
}

export const noop = (..._: any): any => undefined;
