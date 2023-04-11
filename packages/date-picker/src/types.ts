export type Nullable<T> = T | null;

export type CalendarObject = {
  value: Date;
  isNextMonth?: boolean;
  isPrevMonth?: boolean;
  isCurrentDay?: boolean;
  isPlaceholder?: boolean;
};

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
