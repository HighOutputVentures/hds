/// <reference types="react" />
import { BoxProps } from '@chakra-ui/react';
import { FormContainerPartProps, FormContainerProps } from '@highoutput/hds-forms';
import { ChakraStylesConfig, GroupBase } from 'chakra-react-select';
export interface Item {
    value: string | number;
    label: string;
}
export interface OptionItem extends Item {
    avatar?: string;
}
export interface AutoCompleteInputFieldPartProps extends FormContainerPartProps {
    reactChakraStyle?: ChakraStylesConfig<Item, boolean, GroupBase<Item>> | undefined;
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
    partProps?: Partial<AutoCompleteInputFieldPartProps>;
    value?: string | string[] | number | number[];
    onChangeValue: (...event: any[]) => void;
}
declare const AutoCompleteInput: (props: AutoCompleteInputFieldProps) => JSX.Element;
export default AutoCompleteInput;
