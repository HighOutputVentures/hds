import { PinInputFieldProps as PinProps, PinInputProps } from '@chakra-ui/react';
import React from 'react';
import { ChangeHandler } from 'react-hook-form';
import { FormContainerPartProps, FormContainerProps } from '../FormContainer/FormContainer';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface PinInputFieldPartProps extends FormContainerPartProps {
    pin?: WithoutChildren<PinProps>;
}
export interface PinInputFieldProps extends Omit<FormContainerProps, 'onChange' | 'partProps' | 'size' | 'variant'>, Omit<PinInputProps, 'onChange' | 'children' | 'id'> {
    numberOfFields?: number;
    onChange: ChangeHandler;
    errorMsg?: string | undefined;
    partProps?: Partial<PinInputFieldPartProps>;
}
declare const PinInputField: React.ForwardRefExoticComponent<Pick<PinInputFieldProps, "children" | "label" | "mask" | "pattern" | "autoFocus" | "disabled" | "max" | "maxLength" | "min" | "minLength" | "name" | "placeholder" | "required" | "size" | "type" | "value" | "onChange" | "defaultValue" | "id" | "onBlur" | "colorScheme" | "partProps" | "variant" | "labelColor" | "errorMsg" | "helperMsg" | "orientation" | "styleConfig" | "onComplete" | "manageFocus" | "otp" | "isDisabled" | "isInvalid" | "focusBorderColor" | "errorBorderColor" | "numberOfFields"> & React.RefAttributes<HTMLInputElement>>;
export default PinInputField;
