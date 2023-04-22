import {
  Box,
  Icon,
  SystemStyleObject,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import {
  autoPlacement,
  autoUpdate,
  useFloating,
  useTransitionStyles,
} from '@floating-ui/react';
import { TextField } from '@highoutput/hds-forms';
import { format } from 'date-fns';
import * as React from 'react';
import { RangeDatePicker } from '../DatePicker/RangeDatePicker';
import CalendarIcon from '../icons/CalendarIcon';
import { DateRange } from '../types';
import { noop } from '../utils';
import { ClearButton } from './ClearButton';
import { DatePickerInputProps } from './DatePickerInput';

type BaseProps = Omit<DatePickerInputProps, 'value' | 'onChange' | 'dateFormat'>;

export type RangeDatePickerInputProps = BaseProps & {
  value?: DateRange;
  onChange?(newValue: DateRange): void;
  dateFormat?: ((value: DateRange) => string) | string;
};

type StylingProps = Omit<SystemStyleObject, keyof Required<RangeDatePickerInputProps>>;

export function RangeDatePickerInput({
  id,
  size = 'md',
  name,
  value,
  onChange = noop,
  placeholder,
  isInvalid,
  isDisabled,
  isReadOnly,
  dateFormat,
  isClearable,
  zIndex = 1,
  ...others
}: RangeDatePickerInputProps & StylingProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { refs, strategy, x, y, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      autoPlacement({
        allowedPlacements: [
          /* ⚠️ order matters here */
          'bottom-start',
          'bottom-end',
          'top-start',
          'top-end',
        ],
        alignment: 'start',
      }),
    ],
    open: isOpen && !isReadOnly,
  });

  const { isMounted, styles } = useTransitionStyles(context);

  useOutsideClick({ ref: containerRef, handler: onClose });

  const dateToString = React.useCallback(
    (d: DateRange) => {
      if (!dateFormat) {
        const str: string[] = [];

        if (d.start) str.push(format(d.start, 'MMM dd, yyyy'));
        if (d.until) str.push(format(d.until, 'MMM dd, yyyy'));

        return str.join(' - ');
      } else if (typeof dateFormat === 'string') {
        const str: string[] = [];

        if (d.start) str.push(format(d.start, dateFormat));
        if (d.until) str.push(format(d.until, dateFormat));

        return str.join(' - ');
      } else {
        return dateFormat(d);
      }
    },
    [dateFormat],
  );

  return (
    <Box ref={containerRef} sx={others} data-testid="hds.datepicker-input">
      <Box
        ref={refs.setReference}
        sx={{
          _hover: {
            '& .HdsRangeDatePickerInputClearButton': {
              display: 'flex!important',
            },
          },
        }}
        data-testid="hds.datepicker-input.controls"
      >
        <TextField
          ref={inputRef}
          id={id}
          size={size}
          name={name}
          value={value ? dateToString(value) : ''}
          placeholder={placeholder}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          onFocus={onOpen}
          onChange={noop}
          leftIcon={<Icon as={CalendarIcon} width="20px" height="20px" />}
          {...(!!isClearable &&
            !isDisabled &&
            !isReadOnly &&
            !!value &&
            !!value.start &&
            !!value.until && {
              rightIcon: (
                <ClearButton
                  onClick={() => {
                    onChange({
                      start: null,
                      until: null,
                    });

                    inputRef.current?.focus();
                  }}
                  className="HdsRangeDatePickerInputClearButton"
                  data-testid="hds.datepicker-input.controls.clear"
                />
              ),
            })}
          __fieldTestId="hds.datepicker-input.controls.input"
        />
      </Box>

      {isMounted && (
        <Box
          ref={refs.setFloating}
          sx={{
            top: `${y ?? 0}px`,
            left: `${x ?? 0}px`,
            position: strategy,
            marginTop: '1px',
            /*
             * only calendar needs the zIndex
             */
            zIndex,
            ...styles,
          }}
          data-testid="hds.datepicker-input.calendar-container"
        >
          <RangeDatePicker
            onCancel={onClose}
            onApply={(newValue) => {
              onChange?.(newValue);
              onClose();
            }}
            hasTimeAdverbial={false}
            includePreviousMonth={false}
          />
        </Box>
      )}
    </Box>
  );
}
