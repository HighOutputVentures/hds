import React from 'react';
import { FormContainerProps } from '../FormContainer/FormContainer';
export interface SelectFieldProps extends FormContainerProps {
    options: Array<{
        label: string;
        value: string;
    }>;
    placeholder?: string;
    defaultValue?: string | number;
    variant?: string;
}
declare const SelectField: React.ForwardRefExoticComponent<Pick<SelectFieldProps, "onChange" | "onBlur" | "name" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "required" | "disabled" | "options" | "placeholder" | "defaultValue" | "variant" | "id" | "label" | "errorMsg" | "helperMsg" | "children" | "size" | "colorScheme" | "orientation" | "styleConfig"> & React.RefAttributes<HTMLSelectElement>>;
export default SelectField;
