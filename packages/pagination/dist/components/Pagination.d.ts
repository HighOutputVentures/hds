import { ThemingProps } from '@chakra-ui/react';
import { FC } from 'react';
export interface PaginationProps extends ThemingProps {
    page: number;
    size: number;
    total: number;
    onSizeChange?: (newSize: number) => void;
    onPageChange?: (newPage: number) => void;
    options: {
        sizes: number[];
    };
    loading?: boolean;
}
declare const Pagination: FC<PaginationProps>;
export default Pagination;
