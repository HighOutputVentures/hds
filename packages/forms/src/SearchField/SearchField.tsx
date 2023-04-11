import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import * as React from "react";
import FormGroup from "../FormGroup/FormGroup";
import { useStyles } from "../hooks";
import SearchIcon from "../icons/SearchIcon";
import { TextFieldProps } from "../TextField/TextField";

export type SearchFieldProps = Omit<TextFieldProps, "leftIcon">;

export default React.forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField(props, ref) {
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
      rightIcon,
      __fieldTestId = "hds.search-field.input",
      ...others
    } = props;

    const styles = useStyles({
      size,
      hasLeftIcon: true,
      hasRightIcon: !!rightIcon,
    });

    return (
      <FormGroup {...others}>
        <InputGroup>
          <InputLeftElement
            sx={styles.leftIcon({ isDisabled: others.isDisabled })}
          >
            <Icon
              as={SearchIcon}
              sx={styles.icon()}
              data-testid="hds.search-field.icon"
            />
          </InputLeftElement>

          {!!rightIcon && (
            <InputRightElement
              sx={styles.rightIcon({ isDisabled: others.isDisabled })}
            >
              {React.cloneElement<any>(rightIcon, { sx: styles.icon() })}
            </InputRightElement>
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
        </InputGroup>
      </FormGroup>
    );
  },
);
