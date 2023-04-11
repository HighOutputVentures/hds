import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  SystemStyleObject,
} from "@chakra-ui/react";
import * as React from "react";

export type FormGroupProps = {
  id?: string;
  hint?: string;
  label?: string;
  /**
   *
   * When set to string,
   * will display the error message
   *
   */
  error?: string | boolean;
  children?: JSX.Element;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  /**
   *
   * Will be passed down to parent or FormControl
   *
   */
  styles?: SystemStyleObject;

  /*
   * Test IDs
   */

  __hintTestId?: string;
  __errorTestId?: string;
  __labelTestId?: string;
  __groupTestId?: string;
};

export default React.forwardRef<HTMLDivElement, FormGroupProps>(
  function FormGroup(props, ref) {
    const {
      id,
      hint,
      label,
      error,
      children,
      isDisabled,
      isReadOnly,
      isRequired,
      styles,

      __hintTestId = "hds.form-group.hint",
      __errorTestId = "hds.form-group.error",
      __labelTestId = "hds.form-group.label",
      __groupTestId = "hds.form-group.group",
    } = props;

    const shouldShowError = typeof error === "string";
    const shouldShowHint = !shouldShowError && !!hint;

    return (
      <FormControl
        id={id}
        ref={ref}
        isInvalid={!!error}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        sx={styles}
        data-testid={__groupTestId}
      >
        {!!label && (
          <FormLabel
            color="neutrals.900"
            fontSize="14px"
            fontWeight="600"
            lineHeight="14px"
            letterSpacing="0.02em"
            marginBottom="6px"
            data-testid={__labelTestId}
            _disabled={{}}
          >
            {label}
          </FormLabel>
        )}

        {children}

        {shouldShowHint && (
          <FormHelperText
            color="neutrals.700"
            fontSize="14px"
            lineHeight="14px"
            letterSpacing="0.02em"
            marginTop="6px"
            data-testid={__hintTestId}
          >
            {hint}
          </FormHelperText>
        )}

        {shouldShowError && (
          <FormErrorMessage
            color="interface.error.700"
            fontSize="14px"
            lineHeight="14px"
            letterSpacing="0.02em"
            marginTop="6px"
            data-testid={__errorTestId}
          >
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  },
);
