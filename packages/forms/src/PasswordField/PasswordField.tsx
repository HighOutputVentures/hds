import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBoolean,
  useMergeRefs,
} from '@chakra-ui/react';
import * as React from 'react';
import FormGroup from '../FormGroup/FormGroup';
import { useStyles } from '../hooks';
import EyeClosedIcon from '../icons/EyeClosedIcon';
import EyeLightIcon from '../icons/EyeLightIcon';
import { TextFieldProps } from '../TextField/TextField';

export type PasswordFieldProps = Omit<TextFieldProps, 'rightIcon'>;

export default React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField(props, ref) {
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
      __fieldTestId = 'hds.password-field.input',
      ...others
    } = props;

    const [isVisible, setIsVisible] = useBoolean(false);

    const styles = useStyles({
      size,
      hasLeftIcon: !!leftIcon,
      hasClearIcon: true,
      hasRightIcon: true,
    });

    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs(ref, inputRef);

    return (
      <FormGroup {...others}>
        <InputGroup>
          {!!leftIcon && (
            <InputLeftElement
              sx={styles.leftIcon({
                isDisabled: others.isDisabled,
              })}
            >
              {React.cloneElement<any>(leftIcon, { sx: styles.icon() })}
            </InputLeftElement>
          )}

          <InputRightElement
            as="button"
            type="button"
            tabIndex={-1}
            onClick={setIsVisible.toggle}
            sx={styles.rightIcon({
              isClickable: true,
              isDisabled: others.isDisabled,
            })}
            data-testid="hds.password-field.controls.toggle-visibility"
          >
            <Icon as={isVisible ? EyeLightIcon : EyeClosedIcon} sx={styles.icon()} />
          </InputRightElement>

          <Input
            ref={mergedRef}
            type={isVisible ? 'text' : 'password'}
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
            sx={{
              ...styles.field,
              '::-ms-reveal': {
                display: 'none',
              },
            }}
            data-testid={__fieldTestId}
          />
        </InputGroup>
      </FormGroup>
    );
  },
);
