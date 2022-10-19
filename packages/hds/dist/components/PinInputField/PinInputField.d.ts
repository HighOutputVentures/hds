import { PinInputFieldProps as PinProps, PinInputProps } from '@chakra-ui/react';
import React from 'react';
import { ChangeHandler } from 'react-hook-form';
import { FormContainerProps } from '../FormContainer/FormContainer';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface PinInputFieldProps extends Omit<FormContainerProps, 'onChange' | 'partProps' | 'size' | 'variant'>, Omit<PinInputProps, 'onChange' | 'children' | 'id'> {
    numberOfFields?: number;
    onChange: ChangeHandler;
    errorMsg?: string | undefined;
    partProps?: Partial<{
        pin: WithoutChildren<PinProps>;
    }>;
}
declare const PinInputField: React.ForwardRefExoticComponent<Pick<PinInputFieldProps, "children" | "onChange" | "partProps" | "size" | "variant" | "onBlur" | "name" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "required" | "disabled" | "id" | "label" | "labelColor" | "errorMsg" | "helperMsg" | "colorScheme" | "orientation" | "styleConfig" | "autoFocus" | "value" | "defaultValue" | "onComplete" | "placeholder" | "manageFocus" | "otp" | "isDisabled" | "isInvalid" | "type" | "mask" | "focusBorderColor" | "errorBorderColor" | "numberOfFields"> & React.RefAttributes<HTMLInputElement>>;
export default PinInputField;
