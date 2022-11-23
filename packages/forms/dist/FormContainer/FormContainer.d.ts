import { ThemingProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export interface FormContainerProps extends Partial<UseFormRegisterReturn>, ThemingProps {
    id?: string;
    label?: string;
    labelColor?: string;
    errorMsg?: string;
    helperMsg?: string;
    disabled?: boolean;
    children?: ReactNode;
}
declare const FormContainer: FC<FormContainerProps>;
export default FormContainer;
