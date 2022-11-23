/// <reference types="react" />
import { BoxProps } from '@chakra-ui/react';
import { FormContainerProps } from '@highoutput/hds-forms';
export interface Item {
    value: string | number;
    label: string;
}
export interface OptionItem extends Item {
    avatar?: string;
}
export interface AutoCompleteInputFieldProps extends Omit<FormContainerProps, 'partProps'> {
    options: OptionItem[];
    loading?: boolean;
    fieldLabelProps?: Omit<BoxProps, 'children'>;
    required?: boolean;
    placement?: 'auto' | 'top' | 'bottom';
    multiple?: boolean;
    darkMode?: boolean;
    autoFocus?: boolean;
    showDropdownIndicator?: boolean;
    placeholder?: string;
    value?: string | string[] | number | number[];
    onChangeValue: (...event: any[]) => void;
}
declare const AutoCompleteInput: (props: AutoCompleteInputFieldProps) => JSX.Element;
export default AutoCompleteInput;
