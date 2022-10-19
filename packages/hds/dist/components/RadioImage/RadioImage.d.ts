import { HTMLChakraProps, StyleProps, ThemingProps } from '@chakra-ui/react';
import { StringOrNumber } from '@chakra-ui/utils';
import React from 'react';
export declare type EventOrValue = React.ChangeEvent<HTMLInputElement> | StringOrNumber;
export interface RadioImageProps extends ThemingProps, StyleProps, Omit<HTMLChakraProps<'div'>, 'onChange' | 'value'> {
    image: string;
    selectColor?: string;
    onChange?: (e: EventOrValue) => void;
    value?: string | number;
    checked?: boolean;
    isChecked?: boolean;
}
declare const RadioImage: React.ForwardRefExoticComponent<RadioImageProps & React.RefAttributes<HTMLDivElement>>;
export default RadioImage;
