import { Box, chakra, Icon, useDisclosure } from '@chakra-ui/react';
import {
  autoUpdate,
  flip,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react';
import { FormGroup, FormGroupProps } from '@highoutput/hds-forms';
import { format } from 'date-fns';
import * as React from 'react';
import { RangeDatePicker } from '../DatePicker/RangeDatePicker';
import CalendarIcon from '../icons/CalendarIcon';
import { DateRange } from '../types';
import { noop } from '../utils';
import { Field } from './components';

type Size = 'sm' | 'md';

type Value = {
  start: Date;
  until: Date;
};

export type RangeDatePickerInputProps = FormGroupProps & {
  size?: Size;
  value?: DateRange;
  onChange?(newValue?: Value): void;
  dateFormat?: ((value?: Value) => string) | string;
  placeholder?: string;
};

export const RangeDatePickerInput$ = function RangeDatePickerInput(
  {
    size = 'md',
    value,
    onChange = noop,
    dateFormat,
    placeholder,
    zIndex = 1,
    ...formGroupProps
  }: RangeDatePickerInputProps,
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
    middleware: [flip()],
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
    <>
      <FormGroup {...formGroupProps}>
        {({ errorId, errorMsg, isInvalid, isDisabled, hintId, id }) => (
          <Field
            id={id}
            ref={fieldRef}
            size={size}
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
              'data-testid': 'hds.datepicker-input',
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
        <Box
          ref={refs.setFloating}
          sx={{
            pos: strategy,
            top: `${y ?? 0}px`,
            left: `${x ?? 0}px`,
            zIndex,
            ...styles,
          }}
          {...getFloatingProps()}
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
    </>
  );
};

export const RangeDatePickerInput = React.forwardRef(RangeDatePickerInput$) as (
  props: RangeDatePickerInputProps & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => JSX.Element;
