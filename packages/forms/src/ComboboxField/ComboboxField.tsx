import * as React from "react";
import FormGroup, { FormGroupProps } from "../FormGroup/FormGroup";
import { Prettify } from "../types";
import Combobox, { ComboboxProps, Option } from "./Combobox";

type Picked<T extends Option[]> = Pick<
  ComboboxProps<T>,
  | "size"
  | "name"
  | "value"
  | "onChange"
  | "placeholder"
  | "autoFocus"
  | "options"
  | "leftIcon"
  | "isClearable"
  | "zIndex"
>;

export type ComboboxFieldProps<T extends Option[]> = Prettify<
  Picked<T> & FormGroupProps
>;

export default function ComboboxField<T extends Option[]>(
  props: ComboboxFieldProps<T>,
) {
  const {
    size,
    name,
    value,
    onChange,
    placeholder,
    autoFocus,
    options,
    leftIcon,
    isClearable,
    zIndex,
    ...others
  } = props;

  return (
    <FormGroup {...others}>
      <Combobox
        size={size}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        options={options}
        leftIcon={leftIcon}
        zIndex={zIndex}
        isClearable={isClearable}
        isInvalid={!!others.error}
        isDisabled={!!others.isDisabled}
        isReadOnly={!!others.isDisabled}
      />
    </FormGroup>
  );
}
