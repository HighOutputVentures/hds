import { Box, BoxProps, Button, ButtonGroup, Icon } from "@chakra-ui/react";
import * as React from "react";
import { useOtherPaginationInfo, useStyles } from "./hooks";
import ArrowLeftIcon from "./icons/ArrowLeft";
import ArrowRightIcon from "./icons/ArrowRight";
import { PaginationBaseProps } from "./types";

type GroupPaginationBaseProps = {
  maxPageControls?: 4 | 6;
};

export type GroupPaginationProps = PaginationBaseProps & GroupPaginationBaseProps;

const defaultProps: Required<GroupPaginationBaseProps> = {
  maxPageControls: 6,
};

export default function GroupPagination(props: GroupPaginationProps & BoxProps) {
  const styles = useStyles("group");

  const { page, pageSize, total, onPageChange, maxPageControls, ...others } = {
    ...defaultProps,
    ...props,
  };

  const { hasNext, hasPrevious, pageControls } = useOtherPaginationInfo({
    page,
    pageSize,
    total,
    maxPageControls,
  });

  const handlePageChange = (type: "increment" | "decrement") => {
    return function fn(..._args: unknown[]) {
      const newPage = type === "increment" ? page + 1 : page - 1;

      onPageChange?.(newPage);
    };
  };

  return (
    <Box {...others}>
      <ButtonGroup variant="unstyled" spacing={0} sx={styles.group}>
        <Button
          variant="unstyled"
          aria-label="Go to previous page"
          onClick={handlePageChange("decrement")}
          disabled={!hasPrevious}
          _disabled={{}}
          data-freeflow="true"
        >
          <Icon as={ArrowLeftIcon} />
          Previous
        </Button>

        {pageControls.map((n) => {
          return (
            <Button
              aria-selected={n === page}
              variant="unstyled"
              disabled={!n}
              onClick={() => {
                n && onPageChange?.(n);
              }}
              _disabled={{}}
            >
              {n ?? "..."}
            </Button>
          );
        })}

        <Button
          variant="unstyled"
          aria-label="Go to next page"
          onClick={handlePageChange("increment")}
          disabled={!hasNext}
          _disabled={{}}
          data-freeflow="true"
        >
          Next
          <Icon as={ArrowRightIcon} />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
