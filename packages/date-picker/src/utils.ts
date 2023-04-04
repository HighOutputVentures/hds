import { isToday } from 'date-fns';

function getMonthTotalDays(year: number, month: number) {
  return 32 - new Date(year, month, 32).getDate();
}

function cloneDate(date: Date) {
  return new Date(date.getTime());
}

export type CalendarObject = {
  value: Date;
  isNextMonth?: boolean;
  isPrevMonth?: boolean;
  isCurrentDay?: boolean;
  isPlaceholder?: boolean;
}[];

type GetCalendarConfig = {
  shouldAddPrevMonthId?: boolean;
  shouldAddNextMonthId?: boolean;
};

export function getCalendar(date: Date, config: GetCalendarConfig = {}) {
  const { shouldAddNextMonthId, shouldAddPrevMonthId } = config;

  const year = date.getFullYear();
  const month = date.getMonth();

  const totalDaysInMonth = getMonthTotalDays(year, month);

  const days: CalendarObject = arrOfNulls(totalDaysInMonth).map((_, index) => {
    const d = new Date(year, month, index + 1);

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
  const monthFirstDayCopy = cloneDate(monthFirstDay.value);
  const monthLastDayCopy = cloneDate(monthLastDay.value);

  // fill blank slots with days from previous month
  if (totalBlankSlotsLeft >= 1) {
    arrOfNulls(totalBlankSlotsLeft).forEach(() => {
      const n = monthFirstDayCopy.setDate(monthFirstDayCopy.getDate() - 1);
      const d = new Date(n);

      days.unshift({
        value: d,
        isPrevMonth: !!shouldAddPrevMonthId,
        isPlaceholder: true,
      });
    });
  }

  // fill blank slots with days of next month
  if (totalBlankSlotsRight >= 1) {
    arrOfNulls(totalBlankSlotsRight).forEach(() => {
      const n = monthLastDayCopy.setDate(monthLastDayCopy.getDate() + 1);
      const d = new Date(n);

      days.push({
        value: d,
        isNextMonth: !!shouldAddNextMonthId,
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

function arrOfNulls(length: number) {
  return new Array(length).fill(null);
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
