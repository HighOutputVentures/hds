import {
  Box,
  chakra,
  Checkbox,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SystemStyleObject,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import HelpCircleIcon from "./icons/HelpCircleIcon";
import { v4 as uuid } from "uuid";

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

export type TableProps<T extends UnknownArray> = {
  items: T;
  columns: Column<T>[];
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
} & Omit<
  SystemStyleObject,
  /* ensure base types won't be overrident */
  "columns" | "items" | "renderHeader" | "renderFooter"
>;

export default function HdsTable<T extends UnknownArray>(props: TableProps<T>) {
  const { items, columns, renderHeader, renderFooter, ...styles } = props;

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

      <TableContainer
      data-testid="hds.table.container"
        sx={{
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-thumb": {
            rounded: "full",
            bgColor: "neutrals.300",
            border: "6px solid",
            borderColor: "transparent",
            backgroundClip: "padding-box",
          },
          "&::-webkit-scrollbar-track-piece": {
            rounded: "full",
            bgColor: "neutrals.100",
            border: "6px solid",
            borderColor: "transparent",
            backgroundClip: "padding-box",
          },
          "&::-webkit-scrollbar-track": {
            bgColor: "transparent",
          },
        }}
      >
        <Table
          data-testid="hds.table"
          sx={{
            thead: {
              bgColor: "#F9FAFB",
            },
            "th, td": {
              borderColor: "#EAECF0",
            },
            th: {
              paddingY: "12px",
              paddingX: "24px",
              textTransform: "unset",
              color: "#667085",
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "medium",
            },
            td: {
              paddingY: "16px",
              paddingX: "24px",
              color: "#7A7A7A",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
            },
            tr: {
              _last: {
                td: {
                  borderBottom: "none",
                },
              },
            },
          }}
        >
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
            {items.map((item, index_0) => {
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
