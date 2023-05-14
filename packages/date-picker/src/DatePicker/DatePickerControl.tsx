import { Icon } from '@chakra-ui/icons';
import { chakra } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useStyles } from '../hooks';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

export type DatePickerControl = {
  value: Date;
  onNext?(): void;
  onPrev?(): void;
  __nextButtonTestId?: string;
  __prevButtonTestId?: string;
  __selectedMonthTestId?: String;
};

export function DatePickerControl({
  value,
  onNext,
  onPrev,
  __nextButtonTestId = 'hds.datepicker.shared.control.next-month',
  __prevButtonTestId = 'hds.datepicker.shared.control.prev-month',
  __selectedMonthTestId = 'hds.datepicker.shared.selected-month',
}: DatePickerControl) {
  const styles = useStyles();

  return (
    <chakra.div display="flex" alignItems="center">
      <chakra.button
        onClick={onPrev}
        tabIndex={-1}
        data-testid={__prevButtonTestId}
        sx={styles.calendarControlButton()}
      >
        <Icon as={ChevronLeftIcon} sx={styles.calendarControlIcon()} />
      </chakra.button>

      <chakra.p data-testid={__selectedMonthTestId} sx={styles.calendarControlLabel()}>
        {format(value, 'MMMM')}
      </chakra.p>

      <chakra.button
        onClick={onNext}
        tabIndex={-1}
        data-testid={__nextButtonTestId}
        sx={styles.calendarControlButton()}
      >
        <Icon as={ChevronRightIcon} sx={styles.calendarControlIcon()} />
      </chakra.button>
    </chakra.div>
  );
}
