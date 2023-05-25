import {
  Box,
  Center,
  chakra,
  Flex,
  HStack,
  Icon,
  Spinner,
  SystemStyleObject,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Checkbox } from '@highoutput/hds-forms';
import { Tooltip } from '@highoutput/hds-tooltip';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useStyles } from './hooks';
import ArrowDownIcon from './icons/ArrowDownIcon';
import HelpCircleIcon from './icons/HelpCircleIcon';

export type UnknownArray = unknown[];
export type ArrayItem<T extends UnknownArray> = T[number];

export type SortDirection = 'asc' | 'desc';

export type SortContext = {
  direction: SortDirection;
};

export type CheckContext<T> = {
  item: T;
  isChecked: boolean;
};

export type ClickContext<T> = {
  item: T;
};

export type Column<T extends UnknownArray> = {
  label: string;
  width?: string;
  tooltip?: React.ReactNode;
  renderRow?: (item: T[number]) => any;
  onSort?(context: SortContext): void;
  onClick?(context: ClickContext<ArrayItem<T>>): void;
  onCheck?(context: CheckContext<ArrayItem<T>>): void;
  onCheckAll?(context: CheckAllContext<T>): void;
  defaultSort?: SortDirection;
  defaultChecked?: ((item: ArrayItem<T>) => boolean) | boolean;
  isHidden?: boolean;
  /**
   *
   * NOT IMPLEMENTED
   *
   */
  isSticky?: boolean;
};

export type CheckAllContext<T extends UnknownArray> = {
  selected: ArrayItem<T>[];
  isChecked: boolean;
};

export type TableBaseProps<T extends UnknownArray> = {
  items: T;
  columns: Column<T>[];
  isLoading?: boolean;
  renderLoader?: JSX.Element;
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
  isBordered?: boolean;
};

export type TableProps<T extends UnknownArray> = TableBaseProps<T> &
  Omit<SystemStyleObject, Required<keyof TableBaseProps<T>>>;

export default function HdsTable<T extends UnknownArray>(props: TableProps<T>) {
  const {
    items,
    columns,
    isLoading,
    renderLoader,
    renderHeader,
    renderFooter,
    isBordered,
    borderColor = 'Gray.200',
    ...others
  } = props;

  const styles = useStyles({
    isBordered,
    borderColor,
    hasBottomRowBorder: !!renderFooter,
  });

  const [checkedItems, setCheckedItems] = React.useState(() => {
    return columns.map(({ defaultChecked = false }) => {
      return items.map((item) => {
        const fn =
          typeof defaultChecked === 'boolean' ? () => defaultChecked : defaultChecked;
        return fn(item);
      });
    });
  });

  const totalColumns = columns.length;
  const shouldShowTable = items.length >= 1;
  const shouldShowEmpty = items.length <= 0 && !isLoading;
  const shouldHardLoad = items.length <= 0 && !!isLoading;
  const shouldSoftLoad = items.length >= 1 && !!isLoading;

  const SoftLoader = () => (!renderLoader ? <SoftLoaderDefault /> : renderLoader);
  const HardLoader = () =>
    !renderLoader ? <HardLoaderDefault numOfCols={totalColumns} /> : renderLoader;

  return (
    <Box
      sx={{
        ...others,
        border: '1px solid',
        borderColor,
        rounded: 'md',
        position: 'relative',
      }}
    >
      {!!renderHeader && (
        <Box
          sx={{
            borderBottom: '1px solid',
            borderColor,
            paddingX: '24px',
            paddingY: '20px',
          }}
        >
          {renderHeader}
        </Box>
      )}

      {shouldSoftLoad && <SoftLoader />}

      <TableContainer
        data-testid="hds.table.container"
        aria-busy={isLoading}
        sx={styles.container}
      >
        <Table
          data-testid="hds.table"
          suppressHydrationWarning
          sx={styles.table}
          position={'sticky'}
          left={0}
          right={0}
        >
          <Thead data-testid="hds.table.header">
            <Tr data-testid="hds.table.header.tr">
              {columns
                .filter((col) => !col.isHidden)
                .map(
                  (
                    {
                      //
                      label,
                      tooltip,
                      width,
                      onSort,
                      onCheck,
                      isSticky,
                      onCheckAll,
                      defaultSort = 'desc',
                    },
                    index,
                  ) => {
                    const isCheckedAll = !!checkedItems.at(index)?.every((o) => !!o);
                    const isIndeterminate =
                      !isCheckedAll && !!checkedItems.at(index)?.some((o) => !!o);

                    return (
                      <Th
                        key={uuid()}
                        width={width}
                        position={'sticky'}
                        {...(index !== 0 &&
                          isSticky && {
                            right: 0,
                          })}
                        {...(index === 0 &&
                          isSticky && {
                            left: 0,
                          })}
                        zIndex={isSticky ? columns.length - index : 0}
                        data-testid="hds.table.header.th"
                        bgColor={isSticky ? '#F9FAFB' : 'unset'}
                        filter={'drop-shadow(-4px 0px 8px rgba(0, 0, 0, 0.04))'}
                      >
                        <Flex alignItems="center">
                          {!!onCheck && (
                            <Checkbox
                              aria-label="Select all"
                              marginRight="12px"
                              size="sm"
                              isChecked={isCheckedAll}
                              isIndeterminate={isIndeterminate}
                              onChange={(e) => {
                                const isChecked = e.target.checked;

                                const selected = checkedItems[index].reduce<
                                  ArrayItem<T>[]
                                >((arr, bool, index_1) => {
                                  /*
                                   * false will still be set to true,
                                   * so we need to reverse the logic
                                   */
                                  return !bool ? [...arr, items[index_1]] : arr;
                                }, []);

                                onCheckAll?.({ isChecked, selected });
                                setCheckedItems((i) => {
                                  return i.map((j, i) => {
                                    return i !== index
                                      ? j
                                      : j.map(() => {
                                          return isChecked;
                                        });
                                  });
                                });
                              }}
                            />
                          )}
                          {label}
                          {onSort && <SortButton value={defaultSort} onSort={onSort} />}
                          {tooltip && (
                            <Tooltip label={tooltip} hasArrow>
                              <chakra.div display="flex" ml="4px">
                                <Icon
                                  as={HelpCircleIcon}
                                  color="neutrals.500"
                                  width="16px"
                                  height="16px"
                                />
                              </chakra.div>
                            </Tooltip>
                          )}
                        </Flex>
                      </Th>
                    );
                  },
                )}
            </Tr>
          </Thead>

          <Tbody position="relative" data-testid="hds.table.body">
            {shouldShowTable &&
              items.map((item, index_0) => {
                return (
                  <Tr key={uuid()} data-testid="hds.table.body.tr">
                    {columns
                      .filter((col) => !col.isHidden)
                      .map(
                        (
                          {
                            onSort,
                            onCheck,
                            onClick,
                            isSticky,
                            defaultChecked,
                            ...others
                          },
                          index_1,
                        ) => {
                          const renderRow = others.renderRow ?? ((obj) => String(obj));

                          return (
                            <Td
                              key={uuid()}
                              onClick={() => {
                                onClick?.({ item });
                              }}
                              position={'sticky'}
                              {...(index_1 !== 0 &&
                                isSticky && {
                                  right: 0,
                                })}
                              {...(index_1 === 0 &&
                                isSticky && {
                                  left: 0,
                                })}
                              zIndex={isSticky ? columns.length - index_1 : 0}
                              bgColor={isSticky ? 'white' : 'unset'}
                              data-testid="hds.table.body.td"
                              filter={'drop-shadow(-4px 0px 8px rgba(0, 0, 0, 0.04))'}
                            >
                              <Flex alignItems="center" gap="12px">
                                {onCheck && (
                                  <Checkbox
                                    aria-label="Select item"
                                    size="sm"
                                    isChecked={checkedItems[index_1][index_0]}
                                    onChange={(e) => {
                                      const isChecked = e.target.checked;
                                      onCheck({ isChecked, item });
                                      setCheckedItems((i) => {
                                        return i.map((j, idx_0) => {
                                          return idx_0 === index_1
                                            ? j.map((k, idx_1) =>
                                                idx_1 === index_0 ? isChecked : k,
                                              )
                                            : j;
                                        });
                                      });
                                    }}
                                  />
                                )}

                                <Box>{renderRow(item)}</Box>
                              </Flex>
                            </Td>
                          );
                        },
                      )}
                  </Tr>
                );
              })}

            {shouldHardLoad && <HardLoader />}
            {shouldSoftLoad && <SoftLoaderOverlay />}
            {shouldShowEmpty && <Empty numOfCols={totalColumns} />}
          </Tbody>
        </Table>
      </TableContainer>

      {!!renderFooter && (
        <Box paddingX="24px" paddingY="12px">
          {renderFooter}
        </Box>
      )}
    </Box>
  );
}

function Empty({ numOfCols }: { numOfCols: number }) {
  return (
    <Tr data-testid="hds.table.empty-indicator">
      <Td colSpan={numOfCols}>
        <Center width="full">
          <Text size="sm">No records found</Text>
        </Center>
      </Td>
    </Tr>
  );
}

function SoftLoaderDefault() {
  return (
    <Spinner
      pos="absolute"
      size="lg"
      zIndex="3"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      color="brand.primary.700"
      emptyColor="neutrals.200"
      thickness="3px"
      speed="0.75s"
      data-testid="hds.table.loading-indicator"
    />
  );
}

function SoftLoaderOverlay() {
  return (
    <Tr
      position="absolute"
      zIndex="2"
      bgColor="whiteAlpha.700"
      top={0}
      left={0}
      width="full"
      height="full"
    />
  );
}

function HardLoaderDefault({ numOfCols }: { numOfCols: number }) {
  return (
    <Tr data-testid="hds.table.loading-indicator">
      <Td colSpan={numOfCols}>
        <Center width="full">
          <HStack spacing={2}>
            <Spinner
              size="sm"
              color="brand.primary.700"
              emptyColor="neutrals.200"
              thickness="3px"
              speed="0.75s"
            />
            <Text size="sm" color="neutrals.500">
              Loading...
            </Text>
          </HStack>
        </Center>
      </Td>
    </Tr>
  );
}

function SortButton({
  value,
  onSort,
}: {
  /** default value */
  value: SortDirection;
  onSort(ctx: SortContext): void;
}) {
  const [currentSort, setCurrentSort] = React.useState(value);
  // next sort value
  const direction = currentSort === 'asc' ? 'desc' : 'asc';

  return (
    <chakra.button
      role="button"
      aria-label={`Sort ${direction}`}
      display="flex"
      marginLeft="4px"
      transition="transform 300ms ease-in-out"
      transform={currentSort === 'asc' ? 'rotate(180deg)' : undefined}
      onClick={() => {
        setCurrentSort(direction);
        onSort({ direction });
      }}
    >
      <Icon as={ArrowDownIcon} color="Gray.500" width="16px" height="16px" />
    </chakra.button>
  );
}
