export type Nullable<T> = T | null;

export interface CalendarObject {
  value: Date;
  isToday?: boolean;
  isPlaceholder?: boolean;
  isNextMonthDate?: boolean;
  isPreviousMonthDate?: boolean;
}

export interface RangeCalendarObject extends CalendarObject {
  isWithinRange?: boolean;
}

export type DateRange = {
  start: Nullable<Date>;
  until: Nullable<Date>;
};

export enum TimeAdverbial {
  Today = "Today",
  Yesterday = "Yesterday",
  ThisWeek = "This week",
  LastWeek = "Last week",
  ThisMonth = "This month",
  LastMonth = "Last month",
  ThisYear = "This year",
  LastYear = "Last year",
  AllTime = "All time",
}
