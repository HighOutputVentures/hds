import { Box, Button, ButtonGroup, Icon, SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
import { useOtherPaginationInfo, useStyles } from "./hooks";
import ArrowLeftIcon from "./icons/ArrowLeft";
import ArrowRightIcon from "./icons/ArrowRight";

type GroupPaginationBaseProps = {
  maxPageControls?: 4 | 6;
};

export type GroupPaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
} & GroupPaginationBaseProps;

const defaultProps: Required<GroupPaginationBaseProps> = {
  maxPageControls: 6,
};

export default function GroupPagination(props: GroupPaginationProps & SystemStyleObject) {
  const styles = useStyles("group");

  const { page, pageSize, total, onPageChange, maxPageControls, ...others } = Object.assign(
    defaultProps,
    props,
  );

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
    <Box sx={others}>
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
              key={n}
              variant="unstyled"
              disabled={!n}
              onClick={() => {
                n && onPageChange?.(n);
              }}
              _disabled={{}}
              aria-selected={n === page}
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
