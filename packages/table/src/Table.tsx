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

type UnknownArray = unknown[];
type ArrayItem<T extends UnknownArray> = T[number];

type SortDirection = "asc" | "desc";

type SortContext<T extends UnknownArray> = {
  items: T;
  direction: SortDirection;
};

type CheckContext<T> = {
  item: T;
  isChecked: boolean;
};

type ClickContext<T> = {
  item: T;
};

type Column<T extends UnknownArray> = {
  label: string;
  width?: string;
  tooltip?: React.ReactNode;
  renderRow?: (item: T[number]) => any;
  onSort?(context: SortContext<T>): void;
  onClick?(context: ClickContext<ArrayItem<T>>): void;
  onCheck?(context: CheckContext<ArrayItem<T>>): void;
  onCheckAll?(context: CheckAllContext<T>): void;
  defaultSort?: SortDirection;
  defaultChecked?: ((item: ArrayItem<T>) => boolean) | boolean;
};

type CheckAllContext<T extends UnknownArray> = {
  items: T;
  isChecked: boolean;
};

export type TableProps<T extends UnknownArray> = {
  items: T;
  columns: Column<T>[];
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
};

export default function HdsTable<T extends UnknownArray>(props: TableProps<T>) {
  const { items, columns, renderHeader, renderFooter } = props;

  /*

  [
    [true,false,false], // col 1
    [false,true,false], // col 2
    [false,false,true], // col 3
  ]
   
   */
  const getCheckStatus = React.useCallback(() => {
    return items.map((item) => {
      return columns
        .filter(({ onCheck }) => !!onCheck)
        .map(({ defaultChecked = false }) => {
          const fn = typeof defaultChecked === "boolean" ? () => defaultChecked : defaultChecked;
          return fn(item);
        });
    });
  }, [items, columns]);

  const [checkedItems, setCheckedItems] = React.useState(getCheckStatus);

  return (
    <Box
      sx={{
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
          <Thead>
            <Tr>
              {columns.map(({ label, tooltip, width, onSort, onCheck, onCheckAll }) => {
                return (
                  <Th width={width}>
                    <Flex alignItems="center">
                      {!!onCheck && (
                        <Checkbox
                          marginRight="12px"
                          isChecked={checkedItems.flat().every((o) => !!o)}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            onCheckAll?.({ isChecked, items });
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

                      {onSort && (
                        <chakra.button
                          role="button"
                          aria-label="Sort"
                          display="flex"
                          onClick={() => {}}
                        >
                          <Icon
                            as={ArrowDownIcon}
                            color="#667085"
                            width="16px"
                            height="16px"
                            marginLeft="4px"
                          />
                        </chakra.button>
                      )}

                      {tooltip && (
                        <Popover>
                          <PopoverTrigger>
                            <chakra.button marginLeft="4px" display="flex">
                              <Icon
                                as={HelpCircleIcon}
                                color="#A3A3A3"
                                width="16px"
                                height="16px"
                              />
                            </chakra.button>
                          </PopoverTrigger>

                          <PopoverContent w="fit-content">
                            <PopoverArrow />
                            <PopoverBody>{tooltip}</PopoverBody>
                          </PopoverContent>
                        </Popover>
                      )}
                    </Flex>
                  </Th>
                );
              })}
            </Tr>
          </Thead>

          <Tbody>
            {items.map((item, index_0) => {
              return (
                <Tr key={React.useId()}>
                  {columns.map(
                    ({ onSort, onCheck, onClick, defaultChecked, ...others }, index_1) => {
                      const renderRow = others.renderRow ?? ((obj) => obj);

                      return (
                        <Td
                          key={React.useId()}
                          onClick={() => {
                            onClick?.({ item });
                          }}
                        >
                          <Flex alignItems="center" gap="12px">
                            {onCheck && (
                              <Checkbox
                                isChecked={checkedItems[index_0][index_1]}
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  onCheck({ isChecked, item });
                                  setCheckedItems((i) => {
                                    return i.map((j, n_0) => {
                                      return n_0 === index_0
                                        ? j.map((k, n_1) => (n_1 === index_1 ? isChecked : k))
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
