import { PinInputFieldProps as PinProps, PinInputProps } from '@chakra-ui/react';
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
declare const PinInputField: any;
export default PinInputField;
