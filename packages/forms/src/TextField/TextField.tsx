import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import * as React from 'react';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';
import { useStyles } from '../hooks';
import { Prettify, Size } from '../types';

type Picked = Pick<
  InputProps,
  | 'name'
  | 'value'
  | 'defaultValue'
  | 'placeholder'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'onInput'
  | 'onKeyPress'
  | 'autoFocus'
  | 'autoComplete'
>;

type Base = {
  size?: Size;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  __fieldTestId?: string;
};

export type TextFieldProps = Prettify<FormGroupProps & Picked & Base>;

export default React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  props,
  ref,
) {
  const {
    size,
    name,
    value,
    defaultValue,
    placeholder,
    autoFocus,
    autoComplete,
    onChange,
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
    onInput,
    onKeyPress,
    leftIcon,
    rightIcon,
    __fieldTestId = 'hds.text-field.input',
    ...others
  } = props;

  const styles = useStyles({ size, hasLeftIcon: !!leftIcon });

  return (
    <FormGroup {...others}>
      <InputGroup>
        {!!leftIcon && (
          <InputLeftElement sx={styles.leftIcon({ isDisabled: others.isDisabled })}>
            {React.cloneElement<any>(leftIcon, { sx: styles.icon() })}
          </InputLeftElement>
        )}

        <Input
          ref={ref}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onInput={onInput}
          onKeyPress={onKeyPress}
          sx={styles.field}
          data-testid={__fieldTestId}
        />

        {!!rightIcon && (
          <InputRightElement sx={styles.rightIcon({ isDisabled: others.isDisabled })}>
            {React.cloneElement<any>(rightIcon, { sx: styles.icon() })}
          </InputRightElement>
        )}
      </InputGroup>
    </FormGroup>
  );
});
