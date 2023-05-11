import * as React from 'react';
import { DateRange } from '../types';
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
  dateRange: Partial<DateRange>;
  /**
   * base current date
   */
  currentDate: Date;
  setCurrentDate(newValue: Date): void;
  setCurrentDate(date: Date): void;
  selectedRangeStart?: Date;
  selectedRangeUntil?: Date;
  updateSelectedRange(startOrUntil: Date): void;
  updateSelectedRangeHard(newValue: DateRange): void;
  lastUpdated?: LastUpdated;
  reset(): void;
};

const RangeDatePickerContext = React.createContext<RangeDatePickerState>({
  dateRange: {},
  currentDate: new Date(),
  setCurrentDate: noop,
  updateSelectedRange: noop,
  updateSelectedRangeHard: noop,
  reset: noop,
});

type RangeDatePickerProps = React.PropsWithChildren<{
  value?: DateRange;
}>;

export function RangeDatePickerProvider({
  value,
  children,
}: React.PropsWithChildren<RangeDatePickerProps>) {
  const [selectedRangeStart, setSelectedRangeStart] = React.useState(value?.start);
  const [selectedRangeUntil, setSelectedRangeUntil] = React.useState(value?.until);

  const [lastUpdated, setLastUpdated] = React.useState<LastUpdated | undefined>();
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
    setSelectedRangeStart(undefined);
    setSelectedRangeUntil(undefined);
    setLastUpdated(undefined);
    setCurrentDate(new Date());
  };

  React.useEffect(() => {
    return () => {
      setSelectedRangeStart(undefined);
      setSelectedRangeUntil(undefined);
      setLastUpdated(undefined);
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
