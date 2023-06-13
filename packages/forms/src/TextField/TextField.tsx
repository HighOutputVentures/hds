import {
  IconProps,
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
  type: React.HTMLInputTypeAttribute | undefined;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  hidePasswordIcon: JSX.Element;
  showPasswordIcon: JSX.Element;
  __fieldTestId?: string;
};

export type TextFieldProps = Prettify<FormGroupProps & Picked & Base>;

export default React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  props,
  ref,
) {
  const {
    size,
    type,
    name,
    hidePasswordIcon,
    showPasswordIcon,
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
  const [showPassword, setShowPassword] = React.useState(false);
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
          type={!showPassword ? type : 'text'}
        />

        {!!rightIcon && type !== 'password' && (
          <InputRightElement sx={styles.rightIcon({ isDisabled: others.isDisabled })}>
            {React.cloneElement<any>(rightIcon, { sx: styles.icon() })}
          </InputRightElement>
        )}
        {type === 'password' && (
          <InputRightElement sx={styles.rightIcon({ isClickable: true })}>
            {hidePasswordIcon &&
              showPassword &&
              React.cloneElement<IconProps>(hidePasswordIcon, {
                sx: styles.icon(),
                onClick: () => setShowPassword((prev) => !prev),
                key: 'hide',
                'aria-label': 'hide-password',
              })}
            {showPasswordIcon &&
              !showPassword &&
              React.cloneElement<IconProps>(showPasswordIcon, {
                sx: styles.icon(),
                onClick: () => setShowPassword((prev) => !prev),
                key: 'show',
                'aria-label': 'show-password',
              })}
          </InputRightElement>
        )}
      </InputGroup>
    </FormGroup>
  );
});
