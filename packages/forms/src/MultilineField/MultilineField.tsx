import { Textarea, TextareaProps } from "@chakra-ui/react";
import * as React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import FormGroup, { FormGroupProps } from "../FormGroup/FormGroup";
import { useStyles } from "../hooks";
import { Prettify, Size } from "../types";

type Picked = Pick<
  TextareaProps,
  | "name"
  | "value"
  | "defaultValue"
  | "placeholder"
  | "onChange"
  | "onFocus"
  | "onBlur"
  | "onKeyUp"
  | "onKeyDown"
  | "onInput"
  | "onKeyPress"
  | "autoFocus"
  | "autoComplete"
>;

type Base = {
  size?: Size;
  minRows?: number;
  maxRows?: number;
  __fieldTestId?: string;
};

export type MultilineFieldProps = Prettify<Base & Picked & FormGroupProps>;

export default React.forwardRef<HTMLTextAreaElement, MultilineFieldProps>(
  function TextField(props, ref) {
    const {
      size,
      name,
      value,
      minRows,
      maxRows,
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
      __fieldTestId = "hds.multiline-field.input",
      ...others
    } = props;

    const styles = useStyles({ size });

    return (
      <FormGroup {...others}>
        <Textarea
          ref={ref}
          as={ReactTextareaAutosize}
          name={name}
          value={value}
          minRows={minRows}
          maxRows={maxRows}
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
            height: "auto",
            resize: "none",
          }}
          data-testid={__fieldTestId}
        />
      </FormGroup>
    );
  },
);
