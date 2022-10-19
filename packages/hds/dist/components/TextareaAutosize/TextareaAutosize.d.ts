import { TextareaProps } from '@chakra-ui/react';
import * as React from 'react';
export declare type TextareaAutosizeProps = TextareaProps & {
    minRows?: number;
    maxRows?: number;
};
declare const TextareaAutosize: React.ForwardRefExoticComponent<TextareaProps & {
    minRows?: number | undefined;
    maxRows?: number | undefined;
} & React.RefAttributes<HTMLTextAreaElement>>;
export default TextareaAutosize;
