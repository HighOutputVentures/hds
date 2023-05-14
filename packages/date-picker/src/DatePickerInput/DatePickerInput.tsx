import { Box, chakra, Icon, useDisclosure } from '@chakra-ui/react';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react';
import { FormGroup, FormGroupProps } from '@highoutput/hds-forms';
import { format } from 'date-fns';
import * as React from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import CalendarIcon from '../icons/CalendarIcon';
import { noop } from '../utils';
import { Field } from './components';

type Size = 'sm' | 'md';

export type DatePickerInputProps = FormGroupProps & {
  size?: Size;
  value?: Date;
  onChange?(newValue: Date): void;
  placeholder?: string;
  dateFormat?: ((value: Date) => string) | string;
  __fieldTestId?: string;
};

const DatePickerInput$ = function DatePickerInput(
  {
    size = 'md',
    value,
    onChange = noop,
    dateFormat,
    placeholder,
    zIndex = 'modal',
    __fieldTestId = 'hds.datepicker-input',
    ...formGroupProps
  }: DatePickerInputProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const { refs, strategy, x, y, context } = useFloating({
    open: isOpen,
    onOpenChange(v) {
      if (v) {
        onOpen();
      } else {
        onClose();
      }
    },
    strategy: 'fixed',
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift({
        padding: 6,
      }),
    ],
  });

  const fieldRef = useMergeRefs([ref, refs.setReference]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: {
      open: 150,
      close: 100,
    },
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([dismiss]);

  const dateToString = React.useCallback(
    (d: Date) => {
      if (!dateFormat) {
        return format(d, 'MMM dd, yyyy');
      } else if (typeof dateFormat === 'string') {
        return format(d, dateFormat);
      } else {
        return dateFormat(d);
      }
    },
    [dateFormat],
  );

  return (
    <>
      <FormGroup {...formGroupProps}>
        {({ errorId, errorMsg, isInvalid, isDisabled, hintId, id }) => (
          <Field
            id={id}
            ref={fieldRef}
            size={size}
            type="button"
            onClick={onToggle}
            sx={{
              ...(size === 'sm' && { h: '40px', py: '8px', px: '12px' }),
              ...(size === 'md' && { h: '44px', py: '10px', px: '14px' }),
            }}
            {...{
              'aria-describedby': hintId,
              ...(isInvalid && {
                'aria-invalid': true,
                'aria-describedby': errorId,
                'aria-errormessage': errorMsg,
              }),
              ...(isDisabled && {
                disabled: true,
              }),
              ...(isOpen && {
                'data-active': true,
              }),
              'data-testid': __fieldTestId,
            }}
            {...getReferenceProps()}
          >
            <Icon as={CalendarIcon} width="20px" height="20px" color="neutrals.500" />

            <chakra.span
              sx={{
                ...(!value /* placeholder */ && {
                  color: 'neutrals.500',
                  ...(isDisabled && {
                    color: 'neutrals.300',
                  }),
                }),
              }}
            >
              {value ? dateToString(value) : placeholder}
            </chakra.span>
          </Field>
        )}
      </FormGroup>

      {isMounted && (
        <FloatingPortal>
          <Box
            ref={refs.setFloating}
            sx={{
              top: `${y ?? 0}px`,
              left: `${x ?? 0}px`,
              position: strategy,
              zIndex,
              ...styles,
            }}
            data-testid="hds.range-datepicker-input.calendar-container"
            {...getFloatingProps()}
          >
            <DatePicker
              value={value}
              onChange={(newValue) => {
                onChange(newValue);
                onClose();
              }}
            />
          </Box>
        </FloatingPortal>
      )}
    </>
  );
};

export const DatePickerInput = React.forwardRef(DatePickerInput$) as (
  props: DatePickerInputProps & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => JSX.Element;
