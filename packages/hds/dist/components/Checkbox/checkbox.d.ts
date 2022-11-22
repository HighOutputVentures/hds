import React from 'react';
import { CheckboxProps, IconProps } from '@chakra-ui/react';
export declare type CheckTypeProps = {
    type: 'checkboxType';
    checkbox_icon: 'minusIcon' | 'checkIcon';
};
export declare type RadioTypeProps = {
    type: 'radioType';
    radio_icon: 'circleIcon' | 'checkIcon';
};
export declare type CheckProps = (CheckTypeProps | RadioTypeProps) & Pick<CheckboxProps, 'defaultValue' | 'defaultChecked' | 'isChecked' | 'onChange' | 'onFocus' | 'isFocusable' | 'value' | 'isInvalid' | 'aria-label' | 'size'> & {
    helperMsg?: string;
    label: string | JSX.Element;
    onCheck?: (value: boolean) => void;
    variant?: 'primary.outlined' | 'primary.solid';
    disabled?: boolean;
    __testId?: string;
};
declare const Checkbox: React.ForwardRefExoticComponent<(CheckTypeProps & Pick<CheckboxProps, "size" | "defaultValue" | "defaultChecked" | "isChecked" | "onChange" | "onFocus" | "isFocusable" | "value" | "isInvalid" | "aria-label"> & {
    helperMsg?: string;
    label: string | JSX.Element;
    onCheck?: (value: boolean) => void;
    variant?: 'primary.outlined' | 'primary.solid';
    disabled?: boolean;
    __testId?: string;
} & React.RefAttributes<HTMLInputElement>) | (RadioTypeProps & Pick<CheckboxProps, "size" | "defaultValue" | "defaultChecked" | "isChecked" | "onChange" | "onFocus" | "isFocusable" | "value" | "isInvalid" | "aria-label"> & {
    helperMsg?: string;
    label: string | JSX.Element;
    onCheck?: (value: boolean) => void;
    variant?: 'primary.outlined' | 'primary.solid';
    disabled?: boolean;
    __testId?: string;
} & React.RefAttributes<HTMLInputElement>)>;
export default Checkbox;
export declare const CircleIcon: (props: Omit<IconProps, 'children' | 'css'>) => JSX.Element;
