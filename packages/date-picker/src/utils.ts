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
  const firstDayOfMonth = startOfMonth(date);
  const totalDaysInMonth = getDaysInMonth(date);

  const days: CalendarObject[] = nullArray(totalDaysInMonth).map((_, index) => {
    const d = addDays(firstDayOfMonth, index);

    return {
      value: d,
      isCurrentDay: isToday(d),
      isPlaceholder: false,
    };
  });

  const monthFirstDay = days[0];
  const monthLastDay = days[days.length - 1];

  const startWeekdayIndex = monthFirstDay.value.getDay();
  const lastWeekdayIndex = monthLastDay.value.getDay();
  const totalBlankSlotsLeft = getFillableSlotsLeft(startWeekdayIndex);
  const totalBlankSlotsRight = getFillableSlotsRight(lastWeekdayIndex);

  // fill blank slots with days from previous month
  if (totalBlankSlotsLeft >= 1) {
    nullArray(totalBlankSlotsLeft).forEach((_, index) => {
      days.unshift({
        value: subDays(monthFirstDay.value, index + 1),
        isPrevMonth: true,
        isPlaceholder: true,
      });
    });
  }

  // fill blank slots with days of next month
  if (totalBlankSlotsRight >= 1) {
    nullArray(totalBlankSlotsRight).forEach((_, index) => {
      days.push({
        value: addDays(monthLastDay.value, index + 1),
        isNextMonth: true,
        isPlaceholder: true,
      });
    });
  }

  return days;
}

function getFillableSlotsRight(lastWeekdayIndex: number) {
  switch (lastWeekdayIndex) {
    case 6:
      return 0;
    case 5:
      return 1;
    case 4:
      return 2;
    case 3:
      return 3;
    case 2:
      return 4;
    case 1:
      return 5;
    default:
      return 6;
  }
}

function getFillableSlotsLeft(firstWeekdayIndex: number) {
  return firstWeekdayIndex;
}

function nullArray(length = 0) {
  return new Array<null>(length).fill(null);
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

export function getDateRangeByTimeAdverbial(
  adverbial: TimeAdverbial,
  origin?: Date,
): DateRange {
  origin = origin ?? new Date();

  if (adverbial === TimeAdverbial.Today) {
    return {
      start: origin,
      until: origin,
    };
  }

  if (adverbial === TimeAdverbial.Yesterday) {
    return {
      start: subDays(origin, 1),
      until: origin,
    };
  }

  if (adverbial === TimeAdverbial.ThisWeek) {
    return {
      start: startOfWeek(origin, { weekStartsOn: START_OF_WEEK }),
      until: endOfWeek(origin, { weekStartsOn: START_OF_WEEK }),
    };
  }

  if (adverbial === TimeAdverbial.LastWeek) {
    const lastWeekFromOrigin = subWeeks(origin, 1);

    return {
      start: startOfWeek(lastWeekFromOrigin, { weekStartsOn: START_OF_WEEK }),
      until: endOfWeek(lastWeekFromOrigin, { weekStartsOn: START_OF_WEEK }),
    };
  }

  if (adverbial === TimeAdverbial.ThisMonth) {
    return {
      start: startOfMonth(origin),
      until: endOfMonth(origin),
    };
  }

  if (adverbial === TimeAdverbial.LastMonth) {
    const lastMonthFromOrigin = subMonths(origin, 1);

    return {
      start: startOfMonth(lastMonthFromOrigin),
      until: endOfMonth(lastMonthFromOrigin),
    };
  }

  if (adverbial === TimeAdverbial.ThisYear) {
    return {
      start: startOfYear(origin),
      until: endOfMonth(origin),
    };
  }

  if (adverbial === TimeAdverbial.LastYear) {
    const lastYearFromOrigin = subYears(origin, 1);

    return {
      start: startOfYear(lastYearFromOrigin),
      until: endOfYear(lastYearFromOrigin),
    };
  }

  return {
    start: origin,
    until: origin,
  };
}

type GetRangeCalendarReturn = {
  /** Calendar on the right */
  current: CalendarObject[];
  /** Calendar on the left */
  previous: CalendarObject[];
};

export function getRangeCalendar(base: Date): GetRangeCalendarReturn {
  return {
    current: getCalendar(base),
    previous: getCalendar(subMonths(base, 1)),
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
