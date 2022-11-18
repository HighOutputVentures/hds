import { BoxProps, FlexProps } from '@chakra-ui/react';
import { SVGMotionProps } from 'framer-motion';
import * as React from 'react';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export declare type LogoSpinnerProps = {
    logo?: JSX.Element;
    duration?: number;
    partProps?: Partial<{
        container?: WithoutChildren<FlexProps>;
        wrapper?: WithoutChildren<FlexProps>;
        square1?: WithoutChildren<BoxProps>;
        square2?: WithoutChildren<BoxProps>;
        logo?: WithoutChildren<SVGMotionProps<SVGSVGElement>>;
    }>;
};
/**
 *
 * @example
 * <LogoSpinner duration={1500}>
 *    <div>Hello, World!</div>
 * </LogoSpinner>
 */
export default function LogoSpinner({ logo, duration, partProps, children, }: React.PropsWithChildren<LogoSpinnerProps>): JSX.Element;
export {};
