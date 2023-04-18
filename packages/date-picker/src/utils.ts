import {
  addDays,
  compareAsc,
  compareDesc,
  endOfMonth,
  endOfWeek,
  endOfYear,
  getDaysInMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from "date-fns";
import { START_OF_WEEK } from "./constants";
import { CalendarObject, DateRange, TimeAdverbial } from "./types";

export function getCalendar(date: Date) {
  const lastDayOfMonth = endOfMonth(date);
  const firstDayOfMonth = startOfMonth(date);
  const totalDaysInMonth = getDaysInMonth(date);

  let calendar: CalendarObject[] = [];

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

  return arrayChunk(calendar, 7);
}

export function getDateRangeByTimeAdverbial(
  adverbial: TimeAdverbial,
  origin?: Date,
): DateRange {
  origin = origin ?? new Date();

  switch (adverbial) {
    case TimeAdverbial.Today:
      return {
        start: origin,
        until: origin,
      };

    case TimeAdverbial.Yesterday:
      return {
        start: subDays(origin, 1),
        until: origin,
      };

    case TimeAdverbial.ThisWeek:
      return {
        start: startOfWeek(origin, { weekStartsOn: START_OF_WEEK }),
        until: endOfWeek(origin, { weekStartsOn: START_OF_WEEK }),
      };

    case TimeAdverbial.LastWeek: {
      const lastWeekFromOrigin = subWeeks(origin, 1);

      return {
        start: startOfWeek(lastWeekFromOrigin, { weekStartsOn: START_OF_WEEK }),
        until: endOfWeek(lastWeekFromOrigin, { weekStartsOn: START_OF_WEEK }),
      };
    }

    case TimeAdverbial.ThisMonth:
      return {
        start: startOfMonth(origin),
        until: endOfMonth(origin),
      };

    case TimeAdverbial.LastMonth: {
      const lastMonthFromOrigin = subMonths(origin, 1);

      return {
        start: startOfMonth(lastMonthFromOrigin),
        until: endOfMonth(lastMonthFromOrigin),
      };
    }

    case TimeAdverbial.ThisYear:
      return {
        start: startOfYear(origin),
        until: endOfMonth(origin),
      };

    case TimeAdverbial.LastYear: {
      const lastYearFromOrigin = subYears(origin, 1);

      return {
        start: startOfYear(lastYearFromOrigin),
        until: endOfYear(lastYearFromOrigin),
      };
    }

    default:
      return {
        start: origin,
        until: origin,
      };
  }
}

export function getRangeCalendar(date: Date) {
  return {
    current: getCalendar(date),
    previous: getCalendar(subMonths(date, 1)),
  };
}

type SortDirection = "asc" | "desc";

export function sortDates(array: Date[], direction?: SortDirection) {
  const copy = [...array];

  if (direction === "desc") {
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
