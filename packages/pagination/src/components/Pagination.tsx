import {
  Flex,
  HStack,
  IconButton,
  Select,
  Text,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { FC, useCallback } from 'react';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';

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

const Pagination: FC<PaginationProps> = ({
  page,
  size,
  total,
  onPageChange,
  onSizeChange,
  options,
  variant,
}) => {
  const styles = useMultiStyleConfig('Pagination', { size, variant });

  const hasPrev = page > 1;
  const hasNext = page * size < total;

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSizeChange) onSizeChange(parseInt(e.target.value));
  };

  const handlePageChange = (type: 'increment' | 'decrement') => {
    const newPage = type === 'increment' ? page + 1 : page - 1;

    return () => (onPageChange ? onPageChange(newPage) : newPage);
  };

  const indexStart = (page - 1) * size + 1;
  const indexStop = page * size;
  const remainder = total % size;

  const getPageInfo = useCallback(() => {
    let pageInfo = '';

    pageInfo += 'Page ';
    pageInfo += indexStart;
    pageInfo += '-';
    pageInfo += indexStop > total ? indexStart - 1 + remainder : indexStop;
    pageInfo += ' of ';
    pageInfo += total;

    return pageInfo;
  }, [indexStart, indexStop, total, remainder]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      sx={styles.container}
    >
      <HStack spacing={2}>
        <Text as="span" whiteSpace="nowrap" sx={styles.dropdownLabel}>
          Show rows per page
        </Text>

        <Select
          aria-label="Change page size"
          onChange={handleSizeChange}
          value={size}
          sx={styles.dropdown}
        >
          {options.sizes.map((size, index) => (
            <option key={`${size}${index}`} value={size}>
              {size}
            </option>
          ))}
        </Select>
      </HStack>

      <HStack spacing={4}>
        <Text as="span" sx={styles.caption}>
          {getPageInfo()}
        </Text>

        <HStack>
          <IconButton
            aria-label="Go to previous page"
            icon={<ChevronLeftIcon color="white" sx={styles.controlIcons} />}
            onClick={handlePageChange('decrement')}
            paddingTop="10px"
            paddingLeft="12px"
            disabled={!hasPrev}
            sx={styles.iconButton}
          />

          <IconButton
            aria-label="Go to next page"
            icon={<ChevronRightIcon color="white" sx={styles.controlIcons} />}
            onClick={handlePageChange('increment')}
            disabled={!hasNext}
            paddingTop="10px"
            paddingLeft="12px"
            sx={styles.iconButton}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Pagination;
