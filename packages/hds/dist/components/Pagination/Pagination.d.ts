import { ButtonProps, FlexProps, IconProps, SelectProps, StackProps, TextProps, ThemingProps } from '@chakra-ui/react';
import { FC } from 'react';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface PaginationProps extends ThemingProps {
    page: number;
    size: number;
    total: number;
    onSizeChange?: (newSize: number) => void;
    onPageChange?: (newPage: number) => void;
    options: {
        sizes: number[];
    };
    /**
     *
     * _Not yet implemented_
     *
     */
    loading?: boolean;
    partProps?: Partial<{
        container: WithoutChildren<FlexProps>;
        dropdown: WithoutChildren<SelectProps>;
        dropdownLabel: WithoutChildren<TextProps>;
        dropdownContainer: WithoutChildren<StackProps>;
        caption: WithoutChildren<TextProps>;
        captionAndControlsContainer: WithoutChildren<StackProps>;
        controls: WithoutChildren<ButtonProps>;
        controlIcons: WithoutChildren<IconProps>;
        controlsContainer: WithoutChildren<StackProps>;
    }>;
}
declare const Pagination: FC<PaginationProps>;
export default Pagination;
