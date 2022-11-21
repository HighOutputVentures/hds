import { SelectFieldProps as SelectFieldChakraProps } from '@chakra-ui/react';
import { FormContainerProps } from '../FormContainer/FormContainer';
export interface SelectFieldProps extends FormContainerProps, Omit<SelectFieldChakraProps, 'onBlur' | 'id' | 'onChange'> {
    options: Array<{
        label: string;
        value: string;
    }>;
    placeholder?: string;
    defaultValue?: string | number;
    variant?: string;
}
declare const SelectField: any;
export default SelectField;
