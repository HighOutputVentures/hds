import { chakra, Flex, Icon, Tooltip } from "@chakra-ui/react";
import * as React from "react";

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

type Column<T extends UnknownArray, D> = {
  label: string;
  tooltip?: string;
  getData: (item: ArrayItem<T>) => D;
  renderRow?: (context: D) => any;
  onSort?(context: SortContext<T>): void;
  onClick?(context: ClickContext<ArrayItem<T>>): void;
  onCheck?(context: CheckContext<ArrayItem<T>>): void;
  defaultChecked?: boolean;
};

type CheckAllContext<T extends UnknownArray> = {
  items: T;
  isChecked: boolean;
};

export type TableProps<T extends UnknownArray, D> = {
  items: T;
  columns: Column<T, D>[];
  onCheckAll?(context: CheckAllContext<T>): void;
  defaultSort?: SortDirection;
};

export default function Table<T extends UnknownArray, D extends any = unknown>(
  props: TableProps<T, D>,
) {
  const { items, columns, defaultSort = "asc", onCheckAll } = props;

  const [prevSort, setPrevSort] = React.useState(defaultSort);
  const nextSort = React.useMemo(() => {
    return prevSort === "asc" ? "desc" : "asc";
  }, [prevSort]);

  return (
    <chakra.table>
      <chakra.thead>
        <tr>
          {columns.map(({ label, tooltip, onSort }) => {
            return (
              <chakra.th>
                {onCheckAll && (
                  <Checkbox
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      onCheckAll?.({ isChecked, items });
                    }}
                  />
                )}

                {label}

                {onSort && (
                  <chakra.button
                    role="button"
                    aria-label={{ asc: "Sort ascending", desc: "Sort descending" }[nextSort]}
                    onClick={() => {
                      setPrevSort(nextSort);
                      onSort?.({
                        items,
                        direction: nextSort,
                      });
                    }}
                  >
                    <Icon />
                  </chakra.button>
                )}

                {tooltip && (
                  <Tooltip label={tooltip}>
                    <Icon />
                  </Tooltip>
                )}
              </chakra.th>
            );
          })}
        </tr>
      </chakra.thead>

      <chakra.tbody>
        {items.map((item) => {
          return (
            <chakra.tr key={React.useId()}>
              {columns.map(({ getData, onSort, onCheck, onClick, ...others }) => {
                const renderRow = others.renderRow ?? ((obj) => obj);

                return (
                  <chakra.td
                    key={React.useId()}
                    onClick={() => {
                      onClick?.({ item });
                    }}
                  >
                    <Flex>
                      {onCheck && (
                        <Checkbox
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            onCheck({ isChecked, item });
                          }}
                        />
                      )}

                      {renderRow(getData(item))}
                    </Flex>
                  </chakra.td>
                );
              })}
            </chakra.tr>
          );
        })}
      </chakra.tbody>
    </chakra.table>
  );
}

const Checkbox = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  function Checkbox(props, ref) {
    return <chakra.input ref={ref} type="checkbox" {...props} />;
  },
);
