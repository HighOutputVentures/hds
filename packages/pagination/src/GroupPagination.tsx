import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  SystemStyleObject,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@highoutput/hds-icons';
import * as pagination from '@zag-js/pagination';
import { normalizeProps, useMachine } from '@zag-js/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { Select } from './Select';
import { useStyles } from './hooks';

export type GroupPaginationProps = {
  id?: string;
  page: number;
  pageSize: number;
  count: number;
  sizes?: number[];
  onChange?: (value: { page: number; pageSize: number }) => void;
};

export default function GroupPagination({
  page,
  pageSize,
  count,
  onChange,
  sizes,
  ...props
}: GroupPaginationProps & SystemStyleObject) {
  const id = React.useId();
  const styles = useStyles('group');

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

  return (
    <Box sx={props}>
      <Flex gap={4} alignItems="center">
        {!!sizes && (
          <Box width="130px" flexShrink={0} flexGrow={0}>
            <Select
              value={pageSize}
              options={sizes.map((n) => ({
                label: `${n} entries`,
                value: n,
              }))}
              onChange={(newValue) => {
                api.setPageSize(newValue ?? sizes[0]);
              }}
              __fieldTestId="hds.group-pagination.select"
              __optionTestId={(o) => `hds.group-pagination.select.${o.value}`}
              __optionsTestId="hds.group-pagination.options"
            />
          </Box>
        )}

        <ButtonGroup
          variant="unstyled"
          spacing={0}
          sx={styles.group}
          data-testid="hds.group-button.pagination"
        >
          <Button
            variant="unstyled"
            aria-label="Go to previous page"
            isDisabled={api.isFirstPage}
            data-testid="hds.group-pagination.previous.button"
            _disabled={{}}
            data-freeflow="true"
            {...api.prevPageTriggerProps}
          >
            <Icon as={ArrowLeftIcon} />
            Previous
          </Button>

          {api.pages.map((page, index) => {
            if (page.type === 'page') {
              return (
                <Button
                  key={uuid()}
                  variant="unstyled"
                  data-testid={'hds.group-pagination.page.control'}
                  _disabled={{}}
                  {...api.getPageTriggerProps(page)}
                >
                  {page.value}
                </Button>
              );
            }

            return (
              <Button
                key={uuid()}
                isDisabled
                variant="unstyled"
                data-testid={'hds.group-pagination.ellipsis'}
                {...api.getEllipsisProps({ index })}
              >
                ...
              </Button>
            );
          })}

          <Button
            variant="unstyled"
            aria-label="Go to next page"
            isDisabled={api.isLastPage}
            _disabled={{}}
            data-testid="hds.group-pagination.next.button"
            data-freeflow="true"
            {...api.nextPageTriggerProps}
          >
            Next
            <Icon as={ArrowRightIcon} />
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
