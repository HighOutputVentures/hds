import * as React from "react";
import FormGroup, { FormGroupProps } from "../FormGroup/FormGroup";
import { Prettify } from "../types";
import Select, { Option, SelectProps } from "./Select";

type SelectFieldBaseProps<T extends Option> = Pick<
  SelectProps<T>,
  | "size"
  | "value"
  | "options"
  | "onChange"
  | "leftIcon"
  | "placeholder"
  | "renderOption"
  | "isClearable"
  | "__fieldTestId"
  | "__optionTestId"
>;

export type SelectFieldProps<T extends Option> = Prettify<
  FormGroupProps & SelectFieldBaseProps<T>
>;

export default function SelectField<T extends Option>(
  props: SelectFieldProps<T>,
) {
  const {
    size,
    options,
    value,
    onChange,
    leftIcon,
    placeholder,
    renderOption,
    isClearable,
    __fieldTestId = "hds.select-field.input",
    __optionTestId = "hds.select-field.option",
    ...formGroupProps
  } = props;

  return (
    <FormGroup {...formGroupProps}>
      <Select
        size={size}
        options={options}
        value={value}
        onChange={onChange}
        leftIcon={leftIcon}
        placeholder={placeholder}
        renderOption={renderOption}
        isClearable={isClearable}
        isInvalid={!!formGroupProps.error}
        isDisabled={!!formGroupProps.isDisabled}
        isReadOnly={!!formGroupProps.isDisabled}
        __fieldTestId={__fieldTestId}
        __optionTestId={__optionTestId}
      />
    </FormGroup>
  );
}
