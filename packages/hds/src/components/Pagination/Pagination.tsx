import {
  ButtonProps,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  IconProps,
  Select,
  SelectProps,
  StackProps,
  Text,
  TextProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { FC, useCallback, useId } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../icons/src/index';

type WithoutChildren<T> = Omit<T, 'children'>;

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
    container?: WithoutChildren<FlexProps>;
    dropdown?: WithoutChildren<SelectProps>;
    dropdownLabel?: WithoutChildren<TextProps>;
    dropdownContainer?: WithoutChildren<StackProps>;
    caption?: WithoutChildren<TextProps>;
    captionAndControlsContainer?: WithoutChildren<StackProps>;
    controls?: WithoutChildren<ButtonProps>;
    controlIcons?: WithoutChildren<IconProps>;
    controlsContainer?: WithoutChildren<StackProps>;
  }>;
}

const Pagination: FC<PaginationProps> = ({
  page,
  size,
  total,
  onPageChange,
  onSizeChange,
  options,
  partProps,
  variant,
}) => {
  const styles = useMultiStyleConfig('Pagination', { variant });
  const id = useId();

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
      id={id}
      alignItems="center"
      justifyContent="space-between"
      sx={styles.container}
      {...partProps?.container}
    >
      <HStack spacing={2} {...partProps?.dropdownContainer}>
        <Text
          as="span"
          whiteSpace="nowrap"
          sx={styles.dropdownLabel}
          {...partProps?.dropdownLabel}
        >
          Show rows per page
        </Text>

        <Select
          data-testid={`${id}-pagination.dropdown`}
          onChange={handleSizeChange}
          value={size}
          sx={styles.dropdown}
          {...partProps?.dropdown}
        >
          {options.sizes.map((size, index) => (
            <option
              value={size}
              key={id + size + index}
              data-testid={`${id}-${size}-${index}`}
            >
              {size}
            </option>
          ))}
        </Select>
      </HStack>

      <HStack spacing={4} {...partProps?.captionAndControlsContainer}>
        <Text as="span" sx={styles.caption} {...partProps?.caption}>
          {getPageInfo()}
        </Text>

        <HStack {...partProps?.controlsContainer}>
          <IconButton
            aria-label=""
            data-testid={`${id}-pagination.controls.prev`}
            icon={
              <ChevronLeftIcon
                color="white"
                sx={styles.controlIcons}
                {...partProps?.controlIcons}
              />
            }
            onClick={handlePageChange('decrement')}
            paddingTop="10px"
            paddingLeft="12px"
            disabled={!hasPrev}
            sx={styles.iconButton}
            {...partProps?.controls}
          />

          <IconButton
            aria-label=""
            data-testid={`${id}-pagination.controls.next`}
            icon={
              <ChevronRightIcon
                color="white"
                sx={styles.controlIcons}
                {...partProps?.controlIcons}
              />
            }
            onClick={handlePageChange('increment')}
            disabled={!hasNext}
            paddingTop="10px"
            paddingLeft="12px"
            sx={styles.iconButton}
            {...partProps?.controls}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Pagination;
