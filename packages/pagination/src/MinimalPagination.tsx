import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Spacer,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@highoutput/hds-icons';
import * as pagination from '@zag-js/pagination';
import { normalizeProps, useMachine } from '@zag-js/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useStyles } from './hooks';

type MinimalPaginationBaseProps = {
  /** toggle legend. eg `Page 1 of 10` */
  hasLegend?: boolean;
  /** whether to place legend between left and right button or separate on the left */
  isLegendCentered?: boolean;
  /** toggle page controls. should still be hidden if `hasLegend` is set to `true` 🥸 */
  hasPageControls?: boolean;
  /** toggle left and right arrow icon */
  hasButtonIcon?: boolean;
  /** toggle arrow label */
  hasButtonLabel?: boolean;
  /** changes unstyled button to outline 🤠 */
  hasButtonOutline?: boolean;
};

export type MinimalPaginationProps = {
  id?: string;
  page: number;
  pageSize: number;
  count: number;
  onChange: (value: { page: number; pageSize: number }) => void;
} & MinimalPaginationBaseProps;

const defaultProps: Required<MinimalPaginationBaseProps> = {
  hasLegend: false,
  isLegendCentered: true,
  hasPageControls: true,
  hasButtonIcon: true,
  hasButtonLabel: true,
  hasButtonOutline: true,
};

export default function MinimalPagination(
  props: MinimalPaginationProps & SystemStyleObject,
) {
  const {
    page,
    pageSize,
    count,
    onChange,
    hasLegend,
    isLegendCentered,
    hasPageControls,
    hasButtonIcon,
    hasButtonLabel,
    hasButtonOutline,
    ...others
  } = {
    ...defaultProps,
    ...props,
  };

  const styles = useStyles('minimal');

  const id = others.id ?? React.useId();

  const [state, send] = useMachine(
    pagination.machine({
      id,
      count,
      page,
      pageSize,
      onChange,
    }),
  );

  const api = pagination.connect(state, send, normalizeProps);

  const Legend = () => (
    <Text sx={styles.legend}>
      Page {page} of {api.totalPages}
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
            (!!hasLegend && !!isLegendCentered) || (!hasLegend && hasPageControls)
              ? 1
              : undefined
          }
        >
          {/* <!-- BUTTON (previous) --> */}
          <Button
            variant="unstyled"
            aria-label="Go to previous page"
            data-testid="hds.minimal-pagination.previous.button"
            disabled={api.isFirstPage}
            sx={styles.button?.({ isOutlined: hasButtonOutline })}
            {...api.prevPageTriggerProps}
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
              {api.pages.map((page_, index) => {
                if (page_.type === 'page') {
                  return (
                    <Button
                      key={uuid()}
                      variant="unstyled"
                      sx={styles.pageControl?.({ isActive: page === page_.value })}
                      aria-label={`Go to page ${page_.value}`}
                      data-testid="hds.minimal-pagination.page.control"
                      {...api.getPageTriggerProps(page_)}
                    >
                      {page_.value}
                    </Button>
                  );
                }

                return (
                  <Button
                    key={uuid()}
                    variant="unsstyled"
                    sx={styles.pageControl?.({})}
                    {...api.getEllipsisProps({ index })}
                  >
                    ...
                  </Button>
                );
              })}
            </HStack>
          )}

          {/* <!-- BUTTON (next) --> */}
          <Button
            variant="unstyled"
            aria-label="Go to next page"
            data-testid="hds.minimal-pagination.next.button"
            disabled={!api.isLastPage}
            sx={styles.button?.({ isOutlined: hasButtonOutline })}
            {...api.nextPageTriggerProps}
          >
            {hasButtonLabel && <React.Fragment>Next</React.Fragment>}
            {hasButtonIcon && <Icon as={ArrowRightIcon} sx={styles.icon} />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
