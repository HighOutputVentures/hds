import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Input,
  SystemProps,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@highoutput/hds-icons';
import * as pagination from '@zag-js/pagination';
import { normalizeProps, useMachine } from '@zag-js/react';
import ChevronRightIcon from 'packages/carousel/src/ChevronRightIcon';
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
  hasJumpTo?: boolean;
  onChangeJumpValue?: (value: number) => void;
  direction?: SystemProps['flexDirection'] | undefined;
  onChange?: (value: { page: number; pageSize: number }) => void;
};

export default function GroupPagination({
  page,
  pageSize,
  count,
  onChange,
  hasJumpTo,
  onChangeJumpValue,
  direction = 'row-reverse',
  sizes,
  ...props
}: GroupPaginationProps & SystemStyleObject) {
  const id = React.useId();
  const styles = useStyles('group');
  const [jumpValue, setJumpValue] = React.useState(1);
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
      <Flex gap={4} alignItems="center" direction={direction}>
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
        {hasJumpTo && (
          <Flex gap="4px">
            <HStack spacing={'12px'}>
              <Text color="black" fontSize={'14px'} fontWeight={500}>
                Jump to page
              </Text>
              <Input
                width="62px"
                height="40px"
                boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.05)'}
                border="1px solid #F0F0F0"
                borderRadius={'4px'}
                bg="white"
                color="neutrals.300"
                textAlign={'center'}
                type="number"
                onChange={(e) => setJumpValue(+e.target.value)}
              />
            </HStack>
            <Button
              color="neutrals.700"
              boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.05)'}
              border="1px solid #D6D6D6"
              borderRadius={'4px'}
              w="62px"
              bg="white"
              pr="12px"
              onClick={() => onChangeJumpValue?.(jumpValue)}
            >
              <Text fontSize={'14px'} pr="2px">
                Go
              </Text>
              <Icon as={ChevronRightIcon} height={'16px'} width="16px" />
            </Button>
          </Flex>
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
