import {
  Box,
  Center,
  chakra,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
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
} from "@chakra-ui/react";
import * as React from "react";
import { v4 as uuid } from "uuid";
import { tableContainerStyles, tableStyles } from "./hooks";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import HelpCircleIcon from "./icons/HelpCircleIcon";

export type UnknownArray = unknown[];
export type ArrayItem<T extends UnknownArray> = T[number];

export type SortDirection = "asc" | "desc";

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
};

export type CheckAllContext<T extends UnknownArray> = {
  selected: ArrayItem<T>[];
  isChecked: boolean;
};

export type TableBaseProps<T extends UnknownArray> = {
  items: T;
  columns: Column<T>[];
  isLoading?: boolean;
  renderLoader?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
};

export type TableProps<T extends UnknownArray> = TableBaseProps<T> &
  Omit<SystemStyleObject, Required<keyof TableBaseProps<T>>>;

export default function HdsTable<T extends UnknownArray>(props: TableProps<T>) {
  const { items, columns, isLoading, renderLoader, renderHeader, renderFooter, ...styles } = props;

  /*

  [
    [true,false,false], // col 1
    [false,true,false], // col 2
    [false,false,true], // col 3
  ]
   
   */
  const getCheckStatus = React.useCallback(() => {
    return columns
      .filter(({ onCheck }) => !!onCheck)
      .map(({ defaultChecked = false }) => {
        return items.map((item) => {
          const fn = typeof defaultChecked === "boolean" ? () => defaultChecked : defaultChecked;
          return fn(item);
        });
      });
  }, [items, columns]);

  const [checkedItems, setCheckedItems] = React.useState(getCheckStatus);

  const Loader = () => {
    if (!!renderLoader) return <React.Fragment>{renderLoader}</React.Fragment>;
    return <DefaultLoader numOfCols={columns.length} />;
  };

  return (
    <Box
      sx={{
        ...styles,
        border: "1px solid #EAECF0",
        rounded: "md",
      }}
    >
      {renderHeader && (
        <Box borderBottom="1px solid #EAECF0" paddingX="24px" paddingY="20px">
          {renderHeader}
        </Box>
      )}

      <TableContainer data-testid="hds.table.container" sx={tableContainerStyles}>
        <Table data-testid="hds.table" sx={tableStyles}>
          <Thead data-testid="hds.table.header">
            <Tr data-testid="hds.table.header.tr">
              {columns.map(
                (
                  { label, tooltip, width, onSort, onCheck, onCheckAll, defaultSort = "desc" },
                  index,
                ) => {
                  return (
                    <Th key={uuid()} width={width} data-testid="hds.table.header.th">
                      <Flex alignItems="center">
                        {!!onCheck && (
                          <Checkbox
                            aria-label="Select all"
                            marginRight="12px"
                            isChecked={checkedItems[index].every((o) => !!o)}
                            onChange={(e) => {
                              const isChecked = e.target.checked;

                              const selected = checkedItems[index].reduce<ArrayItem<T>[]>(
                                (arr, bool, index_1) => {
                                  /*
                                   * false will still be set to true,
                                   * so we need to reverse the logic
                                   */
                                  return !bool ? [...arr, items[index_1]] : arr;
                                },
                                [],
                              );

                              onCheckAll?.({ isChecked, selected });
                              setCheckedItems((i) => {
                                return i.map((j) => {
                                  return j.map(() => {
                                    return isChecked;
                                  });
                                });
                              });
                            }}
                          />
                        )}
                        {label}
                        {onSort && <SortButton value={defaultSort} onSort={onSort} />}
                        {tooltip && <Tooltip>{tooltip}</Tooltip>}
                      </Flex>
                    </Th>
                  );
                },
              )}
            </Tr>
          </Thead>

          <Tbody data-testid="hds.table.body">
            {isLoading && <Loader />}
            {!isLoading && items.length <= 0 && <Empty numOfCols={columns.length} />}
            {!isLoading &&
              items.length >= 1 &&
              items.map((item, index_0) => {
                return (
                  <Tr key={uuid()} data-testid="hds.table.body.tr">
                    {columns.map(
                      ({ onSort, onCheck, onClick, defaultChecked, ...others }, index_1) => {
                        const renderRow = others.renderRow ?? ((obj) => String(obj));

                        return (
                          <Td
                            key={uuid()}
                            onClick={() => {
                              onClick?.({ item });
                            }}
                            data-testid="hds.table.body.td"
                          >
                            <Flex alignItems="center" gap="12px">
                              {onCheck && (
                                <Checkbox
                                  aria-label="Select item"
                                  isChecked={checkedItems[index_1][index_0]}
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    onCheck({ isChecked, item });
                                    setCheckedItems((i) => {
                                      return i.map((j, idx_0) => {
                                        return idx_0 === index_1
                                          ? j.map((k, idx_1) => (idx_1 === index_0 ? isChecked : k))
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
          </Tbody>
        </Table>
      </TableContainer>

      {renderFooter && (
        <Box paddingX="24px" paddingY="12px">
          {renderFooter}
        </Box>
      )}
    </Box>
  );
}

function Empty({ numOfCols }: { numOfCols: number }) {
  return (
    <Td data-testid="hds.table.empty" colSpan={numOfCols}>
      <Center width="full">
        <Text size="sm">No records found</Text>
      </Center>
    </Td>
  );
}

function DefaultLoader({ numOfCols }: { numOfCols: number }) {
  return (
    <Td data-testid="hds.table.loader" colSpan={numOfCols}>
      <Center width="full">
        <HStack spacing={3}>
          <Spinner size="sm" />
          <Text size="sm">Loading...</Text>
        </HStack>
      </Center>
    </Td>
  );
}

function Tooltip({ children }: React.PropsWithChildren<{}>) {
  return (
    <Popover>
      <PopoverTrigger>
        <chakra.button marginLeft="4px" display="flex" aria-label="Hint">
          <Icon as={HelpCircleIcon} color="#A3A3A3" width="16px" height="16px" />
        </chakra.button>
      </PopoverTrigger>

      <PopoverContent w="fit-content">
        <PopoverArrow />
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
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
  const direction = currentSort === "asc" ? "desc" : "asc";

  return (
    <chakra.button
      role="button"
      aria-label={`Sort ${direction}`}
      display="flex"
      marginLeft="4px"
      transition="transform 300ms ease-in-out"
      transform={currentSort === "asc" ? "rotate(180deg)" : undefined}
      onClick={() => {
        setCurrentSort(direction);
        onSort({ direction });
      }}
    >
      <Icon as={ArrowDownIcon} color="#667085" width="16px" height="16px" />
    </chakra.button>
  );
}
