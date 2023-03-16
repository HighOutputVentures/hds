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
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@highoutput/hds-icons";
import * as React from "react";
import { useStyles } from "./hooks";
import { decrement, increment } from "./utils";

export type RelayPaginationProps = {
  page: number;
  pageSize: number;
  sizes?: number[];
  count: number;
  onChange(value: { page: number; pageSize: number }): void;
};

export default function RelayPagination({
  page,
  pageSize,
  sizes,
  count,
  onChange,
  ...others
}: RelayPaginationProps & SystemStyleObject) {
  const styles = useStyles("relay");

  const remainder = count % pageSize;
  const indexFrom = count <= 0 ? 0 : (page - 1) * pageSize + 1;
  const indexTo = count <= 0 ? 0 : page * pageSize;

  const hasPrev = page > 1;
  const hasNext = page * pageSize < count;

  const prev = React.useCallback(() => {
    if (!hasPrev) return;

    onChange({
      page: decrement(page),
      pageSize,
    });
  }, [
    //
    page,
    pageSize,
    hasPrev,
  ]);

  const next = React.useCallback(() => {
    if (!hasNext) return;

    onChange({
      page: increment(page),
      pageSize,
    });
  }, [
    //
    page,
    pageSize,
    hasNext,
  ]);

  return (
    <Box sx={others}>
      <Flex alignItems="center">
        <Text data-testid="hds.relay-pagination.legend" sx={styles.legend}>
          Page {indexFrom} - {indexTo > count ? indexFrom - 1 + remainder : indexTo} of {count}
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
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size} Entries
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
              isDisabled={!hasPrev}
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
              isDisabled={!hasNext}
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
