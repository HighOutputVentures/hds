import {
  Input,
  InputProps,
  forwardRef,
  useControllableState,
  useMergeRefs,
} from '@chakra-ui/react';
import * as React from 'react';
import { Assign } from '../../types';

interface BaseProps {
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export interface TimeInputProps extends Assign<InputProps, BaseProps> {}

export const TimeInput = forwardRef<TimeInputProps, 'input'>(
  ({ value, onChange, defaultValue, onKeyDown, ...props }, ref) => {
    const [controlledValue, controlledOnChange] = useControllableState({
      value: ensureTimeString(value),
      defaultValue: ensureTimeString(defaultValue) ?? '00:00:00',
      onChange,
    });

    const [cursorPosition, setCursorPosition] = React.useState(0);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs(inputRef, ref);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = controlledValue;
        inputRef.current.selectionStart = cursorPosition;
        inputRef.current.selectionEnd = cursorPosition;
      }
    }, [controlledValue, cursorPosition]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = controlledValue;
      const incomingValue = e.target.value;

      let currCursorPos = e.target.selectionStart ?? 0;

      if (incomingValue.length < 8) {
        const newValue = currentValue
          .split('')
          .map((char, index) => (currCursorPos === index && char !== ':' ? 0 : char))
          .join('');

        controlledOnChange(newValue);
        setCursorPosition(
          currCursorPos === 3 || currCursorPos === 6 ? currCursorPos - 1 : currCursorPos,
        );

        return;
      }

      const incomingChar = incomingValue.charAt(currCursorPos - 1);

      let [h, m, s] = currentValue.split(':');

      if (currCursorPos === 1) {
        h = incomingChar + h[1];
      } else if (currCursorPos === 2) {
        h = h[0] + incomingChar;
      } else if (currCursorPos === 3 || currCursorPos === 4) {
        m = incomingChar + m[1];
      } else if (currCursorPos === 5) {
        m = m[0] + incomingChar;
      } else if (currCursorPos === 6 || currCursorPos === 7) {
        s = incomingChar + s[1];
      } else if (currCursorPos === 8) {
        s = s[0] + incomingChar;
      }

      if (currCursorPos === 3 || currCursorPos === 6) {
        currCursorPos = currCursorPos + 1;
      }

      h = formTimeUnit(clamp(Number(h), 0, 23));
      m = formTimeUnit(clamp(Number(m), 0, 59));
      s = formTimeUnit(clamp(Number(s), 0, 59));

      const newValue = [h, m, s].join(':');

      controlledOnChange(newValue);
      setCursorPosition(currCursorPos);
    };

    return (
      <Input
        ref={mergedRef}
        type="text"
        value={controlledValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (
            ![
              'Backspace',
              'ArrowLeft',
              'ArrowRight',
              'Enter',
              'Tab',
              ...'1234567890'.split(''),
            ].includes(e.key)
          ) {
            e.preventDefault();
            e.stopPropagation();
          }

          onKeyDown?.(e);
        }}
        {...props}
      />
    );
  },
);

function ensureTimeString(subject?: string) {
  return !subject ? subject : /^\d{2}:\d{2}:\d{2}$/.test(subject) ? subject : '00:00:00';
}

function formTimeUnit(n: string | number) {
  return n.toString().padStart(2, '0');
}

function clamp(n: number, min: number, max: number) {
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
