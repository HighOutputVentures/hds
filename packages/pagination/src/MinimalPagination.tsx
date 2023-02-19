import { Box, Button, Flex, HStack, Icon, Spacer, SystemStyleObject, Text } from "@chakra-ui/react";
import * as React from "react";
import { useOtherPaginationInfo, useStyles } from "./hooks";
import { ArrowRightIcon, ArrowLeftIcon } from "@highoutput/hds-icons";

type MinimalPaginationBaseProps = {
  /** toggle legend. eg `Page 1 of 10` */
  hasLegend?: boolean;
  /** whether to place legend between left and right button or separate on the left */
  isLegendCentered?: boolean;
  /** toggle page controls. should still be hidden if `hasLegend` is set to `true` 🥸 */
  hasPageControls?: boolean;
  /** control how many page controls appear */
  maxPageControls?: 4 | 6;
  /** toggle left and right arrow icon */
  hasButtonIcon?: boolean;
  /** toggle arrow label */
  hasButtonLabel?: boolean;
  /** changes unstyled button to outline 🤠 */
  hasButtonOutline?: boolean;
};

export type MinimalPaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
} & MinimalPaginationBaseProps;

const defaultProps: Required<MinimalPaginationBaseProps> = {
  hasLegend: false,
  isLegendCentered: true,
  hasPageControls: true,
  maxPageControls: 6,
  hasButtonIcon: true,
  hasButtonLabel: true,
  hasButtonOutline: true,
};

export default function MinimalPagination(props: MinimalPaginationProps & SystemStyleObject) {
  const {
    page,
    pageSize,
    total,
    onPageChange,
    hasLegend,
    isLegendCentered,
    hasPageControls,
    maxPageControls,
    hasButtonIcon,
    hasButtonLabel,
    hasButtonOutline,
    ...others
  } = {
    ...defaultProps,
    ...props,
  };

  const styles = useStyles("minimal");

  const { hasNext, hasPrevious, pageControls, totalPages } = useOtherPaginationInfo({
    page,
    pageSize,
    total,
    maxPageControls,
  });

  const handlePageChange = (type: "increment" | "decrement") => {
    const newPage = type === "increment" ? page + 1 : page - 1;

    return function callback(..._args: unknown[]) {
      onPageChange?.(newPage);
    };
  };

  const Legend = () => (
    <Text sx={styles.legend}>
      Page {page} of {totalPages}
    </Text>
  );

  return (
    <Box sx={others}>
      <Flex width="full" alignItems="center" gap={4}>
        {/* <!-- LEGEND --> */}
        {!!hasLegend && !isLegendCentered && <Legend />}
        {!!hasLegend && !isLegendCentered && <Spacer />}

        <Flex
          gap="12px"
          justifyContent="space-between"
          alignItems="center"
          flexGrow={
            (!!hasLegend && !!isLegendCentered) || (!hasLegend && hasPageControls) ? 1 : undefined
          }
        >
          {/* <!-- BUTTON (previous) --> */}
          <Button
            variant="unstyled"
            aria-label="Go to previous page"
            data-testid="hds.minimal-pagination.previous.button"
            onClick={handlePageChange("decrement")}
            disabled={!hasPrevious}
            sx={styles.button?.({ isOutlined: hasButtonOutline })}
          >
            {hasButtonIcon && <Icon as={ArrowLeftIcon} sx={styles.icon} />}
            {hasButtonLabel && <React.Fragment>Previous</React.Fragment>}
          </Button>

          {/* <!-- LEGEND (centered) --> */}
          {!!hasLegend && !!isLegendCentered && <Spacer />}
          {!!hasLegend && !!isLegendCentered && <Legend />}
          {!!hasLegend && !!isLegendCentered && <Spacer />}

          {/* <!-- PAGE CONTROLS --> */}
          {!!hasPageControls && !hasLegend && (
            <HStack spacing="2px">
              {pageControls.map((n) => {
                return (
                  <Button
                    key={n}
                    variant="unstyled"
                    disabled={!n}
                    data-testid="hds.minimal-pagination.page.control"
                    onClick={() => {
                      n && onPageChange?.(n);
                    }}
                    sx={styles.pageControl?.({ isActive: n === page })}
                    role="button"
                    aria-label={`Go to page ${n}`}
                  >
                    {n ?? "..."}
                  </Button>
                );
              })}
            </HStack>
          )}

          {/* <!-- BUTTON (next) --> */}
          <Button
            variant="unstyled"
            aria-label="Go to next page"
            onClick={handlePageChange("increment")}
            data-testid="hds.minimal-pagination.next.button"
            disabled={!hasNext}
            sx={styles.button?.({ isOutlined: hasButtonOutline })}
          >
            {hasButtonLabel && <React.Fragment>Next</React.Fragment>}
            {hasButtonIcon && <Icon as={ArrowRightIcon} sx={styles.icon} />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
