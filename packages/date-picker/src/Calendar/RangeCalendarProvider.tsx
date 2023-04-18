import * as React from "react";
import { DateRange, Nullable } from "../types";
import { noop, sortDates } from "../utils";

enum LastUpdated {
  START,
  UNTIL,
}

type RangeCalendarState = {
  /**
   *
   * Should be used for getting actual date range
   * which dates has already been sorted instead of
   * `selectedRange(Start|Until)` which is only used internally
   *
   */
  dateRange: DateRange;
  /**
   * base current date
   */
  currentDate: Date;
  setCurrentDate(newValue: Date): void;
  setCurrentDate(date: Date): void;
  selectedRangeStart: Nullable<Date>;
  selectedRangeUntil: Nullable<Date>;
  updateSelectedRange(startOrUntil: Date): void;
  updateSelectedRangeHard(newValue: DateRange): void;
  lastUpdated: Nullable<LastUpdated>;
};

const RangeCalendarContext = React.createContext<RangeCalendarState>({
  dateRange: {
    start: null,
    until: null,
  },
  currentDate: new Date(),
  setCurrentDate: noop,
  selectedRangeStart: null,
  selectedRangeUntil: null,
  updateSelectedRange: noop,
  updateSelectedRangeHard: noop,
  lastUpdated: null,
});

function RangeCalendarProvider({ children }: React.PropsWithChildren) {
  const [selectedRangeStart, setSelectedRangeStart] =
    React.useState<Nullable<Date>>(null);

  const [selectedRangeUntil, setSelectedRangeUntil] =
    React.useState<Nullable<Date>>(null);

  const [lastUpdated, setLastUpdated] = React.useState<Nullable<LastUpdated>>(null);
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const updateSelectedRange = React.useCallback(
    (date: Date) => {
      if (lastUpdated === LastUpdated.START) {
        setSelectedRangeUntil(date);
        setLastUpdated(LastUpdated.UNTIL);
      } else {
        setSelectedRangeStart(date);
        setLastUpdated(LastUpdated.START);
      }
    },
    [lastUpdated],
  );

  const updateSelectedRangeHard = React.useCallback((dateRange: DateRange) => {
    setSelectedRangeStart(dateRange.start);
    setSelectedRangeUntil(dateRange.until);
  }, []);

  React.useEffect(() => {
    return () => {
      setSelectedRangeStart(null);
      setSelectedRangeUntil(null);
      setLastUpdated(null);
      setCurrentDate(new Date());
    };
  }, []);

  const dateRange = React.useMemo(() => {
    if (selectedRangeStart && selectedRangeUntil) {
      const [start, until] = sortDates([selectedRangeStart, selectedRangeUntil]);
      return {
        start,
        until,
      };
    }

    return {
      start: selectedRangeStart,
      until: selectedRangeUntil,
    };
  }, [selectedRangeStart, selectedRangeUntil]);

  const value = React.useMemo(
    () => ({
      dateRange,
      selectedRangeStart,
      selectedRangeUntil,
      updateSelectedRange,
      updateSelectedRangeHard,
      lastUpdated,
      currentDate,
      setCurrentDate,
    }),
    [
      dateRange,
      selectedRangeStart,
      selectedRangeUntil,
      updateSelectedRange,
      updateSelectedRangeHard,
      lastUpdated,
      currentDate,
      setCurrentDate,
    ],
  );

  return (
    <RangeCalendarContext.Provider value={value}>
      {children}
    </RangeCalendarContext.Provider>
  );
}

export function useRangeCalendarContext() {
  return React.useContext(RangeCalendarContext);
}

export function withRangeCalendarContext<T extends Record<string, any>>(
  Component: (props: T) => JSX.Element,
) {
  return function Wrapped(props: T) {
    return (
      <RangeCalendarProvider>
        <Component {...props} />
      </RangeCalendarProvider>
    );
  };
}
