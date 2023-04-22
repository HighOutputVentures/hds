import { Icon } from '@chakra-ui/icons';
import { chakra } from '@chakra-ui/react';
import { format } from 'date-fns';
import * as React from 'react';
import { useStyles } from '../hooks';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

export type DatePickerControl = {
  value: Date;
  onNext?(): void;
  onPrev?(): void;
};

export function DatePickerControl({ value, onNext, onPrev }: DatePickerControl) {
  const styles = useStyles();

  return (
    <chakra.div display="flex" alignItems="center">
      <chakra.button onClick={onPrev} tabIndex={-1} sx={styles.calendarControlButton()}>
        <Icon as={ChevronLeftIcon} sx={styles.calendarControlIcon()} />
      </chakra.button>

      <chakra.p sx={styles.calendarControlLabel()}>{format(value, 'MMMM')}</chakra.p>

      <chakra.button onClick={onNext} tabIndex={-1} sx={styles.calendarControlButton()}>
        <Icon as={ChevronRightIcon} sx={styles.calendarControlIcon()} />
      </chakra.button>
    </chakra.div>
  );
}
