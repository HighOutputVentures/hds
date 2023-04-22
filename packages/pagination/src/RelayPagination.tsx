import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Select,
  Spacer,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from '@highoutput/hds-icons';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useStyles } from './hooks';
import { decrement, increment } from './utils';

type Value = {
  page: number;
  pageSize: number;
  isNextPage?: boolean;
  isPreviousPage?: boolean;
};

type RelayBasePaginationProps = {
  page: number;
  pageSize: number;
  sizes?: number[];
  count: number;
  onChange: (value: Value) => void;
  isNextLoading?: boolean;
  isNextDisabled?: boolean;
  isPreviousLoading?: boolean;
  isPreviousDisabled?: boolean;
};

export type RelayPaginationProps = RelayBasePaginationProps &
  Omit<SystemStyleObject, Required<keyof RelayBasePaginationProps>>;

export default function RelayPagination({
  page,
  pageSize,
  sizes,
  count,
  onChange,
  isNextDisabled,
  isPreviousDisabled,
  isNextLoading,
  isPreviousLoading,
  ...others
}: RelayPaginationProps) {
  const styles = useStyles('relay');

  const remainder = count % pageSize;
  const indexFrom = count <= 0 ? 0 : (page - 1) * pageSize + 1;
  const indexTo = count <= 0 ? 0 : page * pageSize;

  const hasPrev = page > 1;
  const hasNext = page * pageSize < count;

  const prev = () => {
    if (!hasPrev) return;

    onChange({
      page: decrement(page),
      pageSize,
      isPreviousPage: true,
    });
  };

  const next = () => {
    if (!hasNext) return;

    onChange({
      page: increment(page),
      pageSize,
      isNextPage: true,
    });
  };

  return (
    <Box
      as="nav"
      aria-label="Pagination"
      aria-busy={isNextLoading || isPreviousLoading}
      sx={others}
    >
      <Flex alignItems="center">
        <Text
          data-testid="hds.relay-pagination.legend"
          sx={styles.legend}
          role="status"
          aria-live="polite"
        >
          Page {indexFrom} - {indexTo > count ? indexFrom - 1 + remainder : indexTo} of{' '}
          {count}
        </Text>

        <Spacer />

        <Flex gap={4}>
          {sizes && (
            <Box width="130px" flexShrink={0} flexGrow={0}>
              <Select
                variant="unstyled"
                sx={styles.select}
                value={pageSize}
                onChange={(e) => {
                  const newSize = parseInt(e.target.value);

                  if (!newSize || Number.isNaN(newSize)) return;

                  onChange({
                    page: 1,
                    pageSize: newSize,
                  });
                }}
                icon={<ChevronDownIcon sx={styles.selectIcon} />}
                data-testid="hds.relay-pagination.select"
              >
                {sizes.map((size) => (
                  <option
                    key={uuid()}
                    value={size}
                    data-testid={`hds.relay-pagination.select.${size}`}
                  >
                    {size} entries
                  </option>
                ))}
              </Select>
            </Box>
          )}

          <ButtonGroup
            variant="unstyled"
            spacing={0}
            sx={styles.group}
            data-testid="hds.relay-pagination.button.group"
          >
            <Button
              variant="unstyled"
              aria-label="Go to previous page"
              onClick={prev}
              isDisabled={!hasPrev || isPreviousDisabled}
              isLoading={isPreviousLoading}
              data-testid="hds.relay-pagination.button.previous"
              data-freeflow="true"
            >
              <Icon as={ArrowLeftIcon} sx={styles.icon} />
              Previous
            </Button>

            <Button
              variant="unstyled"
              aria-label="Go to next page"
              onClick={next}
              isDisabled={!hasNext || isNextDisabled}
              isLoading={isNextLoading}
              data-testid="hds.relay-pagination.button.next"
              data-freeflow="true"
            >
              Next
              <Icon as={ArrowRightIcon} sx={styles.icon} />
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
}
