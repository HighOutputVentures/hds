import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  SystemStyleObject,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import FormGroup from '../FormGroup/FormGroup';
import { useStyles } from '../hooks';
import { TextFieldProps } from '../TextField/TextField';

// prettier-ignore
export type NumberFieldProps = Omit<
  TextFieldProps,
  | 'value'
  | 'onChange'
  | 'defaultValue'
  | 'leftIcon'
  | 'rightIcon'
> &
  Pick<
    NumberInputProps,
    | 'min'
    | 'max'
    | 'step'
    | 'precision'
    | 'value'
    | 'onChange'
    | 'defaultValue'
  > & {
    __controlsTestId?: string;
    __incrementTestId?: string;
    __decrementTestId?: string;
  };

export default forwardRef<HTMLInputElement, NumberFieldProps>(function NumberField(
  {
    min,
    max,
    step,
    precision,
    size,
    name,
    value,
    defaultValue = 0,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
    onInput,
    onKeyPress,
    autoFocus,
    autoComplete,
    __fieldTestId = 'hds.number-field.input',
    __controlsTestId = 'hds.number-field.controls',
    __incrementTestId = 'hds.number-field.controls.increment',
    __decrementTestId = 'hds.number-field.controls.decrement',
    ...others
  },
  ref,
) {
  const styles = useStyles({
    size,
    hasRightIcon: true,
  });

  return (
    <FormGroup {...others}>
      <NumberInput
        min={min}
        max={max}
        step={step}
        precision={precision}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <NumberInputField
          ref={ref}
          sx={styles.field}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
          onInput={onInput}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          data-testid={__fieldTestId}
        />

        <NumberInputStepper data-testid={__controlsTestId}>
          <NumberIncrementStepper
            sx={numberInputStyles}
            data-testid={__incrementTestId}
          />

          <NumberDecrementStepper
            sx={numberInputStyles}
            data-testid={__decrementTestId}
          />
        </NumberInputStepper>
      </NumberInput>
    </FormGroup>
  );
});

const numberInputStyles: SystemStyleObject = {
  color: 'neutrals.800',
  borderColor: 'neutrals.200',
  transition: 'colors 300ms ease-in-out',
  _active: {
    bgColor: 'neutrals.100',
  },
};
