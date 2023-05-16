import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Spacer,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@highoutput/hds-icons';
import { Select } from './Select';
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
                value={pageSize}
                options={sizes.map((n) => ({
                  label: `${n} entries`,
                  value: n,
                }))}
                onChange={(newSize = sizes[0]) => {
                  onChange({
                    page: 1,
                    pageSize: newSize,
                  });
                }}
                __fieldTestId="hds.relay-pagination.select"
                __optionTestId={(o) => `hds.relay-pagination.select.${o.value}`}
                __optionsTestId="hds.relay-pagination.options"
              />
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
