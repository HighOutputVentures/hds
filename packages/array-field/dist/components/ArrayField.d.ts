import { ReactNode } from 'react';
import { ArrayFieldTypeValues } from './validation';
export interface ArrayFieldProps {
    buttonRemoveChildren?: ReactNode;
    buttonAddChildren?: ReactNode;
    defaultValues: {
        input: ArrayFieldTypeValues[];
    };
    onChange: (data: Record<string, any>) => void;
    onRemove: (data: Record<string, any>) => void;
    onAppend: (data: Record<string, any>) => void;
    onBlur: (data: Record<string, any>) => void;
    maxValue?: number;
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
}
declare const ArrayField: (props: ArrayFieldProps) => JSX.Element;
export default ArrayField;
