import * as React from 'react';
import { DateRange, Nullable } from '../types';
import { noop, sortDates } from '../utils';

enum LastUpdated {
  START,
  UNTIL,
}

type RangeDatePickerState = {
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
  reset(): void;
};

const RangeDatePickerContext = React.createContext<RangeDatePickerState>({
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
  reset: noop,
});

function RangeDatePickerProvider({ children }: React.PropsWithChildren) {
  const [selectedRangeStart, setSelectedRangeStart] =
    React.useState<Nullable<Date>>(null);
  const [selectedRangeUntil, setSelectedRangeUntil] =
    React.useState<Nullable<Date>>(null);

  const [lastUpdated, setLastUpdated] = React.useState<Nullable<LastUpdated>>(null);
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const updateSelectedRange = (date: Date) => {
    if (lastUpdated === LastUpdated.START) {
      setSelectedRangeUntil(date);
      setLastUpdated(LastUpdated.UNTIL);
    } else {
      setSelectedRangeStart(date);
      setLastUpdated(LastUpdated.START);
    }
  };

  const updateSelectedRangeHard = (dateRange: DateRange) => {
    setSelectedRangeStart(dateRange.start);
    setSelectedRangeUntil(dateRange.until);
  };

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
  }, [
    //
    selectedRangeStart,
    selectedRangeUntil,
  ]);

  const reset = () => {
    setSelectedRangeStart(null);
    setSelectedRangeUntil(null);
    setLastUpdated(null);
    setCurrentDate(new Date());
  };

  React.useEffect(() => {
    return () => {
      setSelectedRangeStart(null);
      setSelectedRangeUntil(null);
      setLastUpdated(null);
      setCurrentDate(new Date());
    };
  }, []);

  return (
    <RangeDatePickerContext.Provider
      value={{
        reset,
        dateRange,
        selectedRangeStart,
        selectedRangeUntil,
        updateSelectedRange,
        updateSelectedRangeHard,
        lastUpdated,
        currentDate,
        setCurrentDate,
      }}
    >
      {children}
    </RangeDatePickerContext.Provider>
  );
}

export function useRangeDatePickerContext() {
  return React.useContext(RangeDatePickerContext);
}

export function withRangeDatePickerContext<T extends Record<string, any>>(
  Component: (props: T) => JSX.Element,
) {
  return function Wrapped(props: T) {
    return (
      <RangeDatePickerProvider>
        <Component {...props} />
      </RangeDatePickerProvider>
    );
  };
}
