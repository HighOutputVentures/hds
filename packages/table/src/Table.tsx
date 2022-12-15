import { chakra } from "@chakra-ui/react";
import * as React from "react";

type UnknownArray = unknown[];

type ArrayItem<T extends UnknownArray> = T[number];

type CheckboxPlugin =
  | { enabled?: false }
  | {
      enabled: true;
      onToggle(context: { isChecked: boolean }): void;
    };

type TooltipPlugin =
  | { enabled?: false }
  | {
      enabled: true;
      label: string;
    };

type ClickPlugin =
  | { enabled?: false }
  | {
      enabled: true;
      onClick(): void;
    };

type SortPlugin =
  | { enabled?: false }
  | {
      enabled: true;
      onSort(context: { direction: "Ascending" | "Descending" }): void;
    };

type Functionable<ReturnValue, Args> = ReturnValue | ((args: Args) => ReturnValue);

type Column<T extends UnknownArray, D> = {
  label: string;
  getData: (item: ArrayItem<T>) => D;
  renderRow?: (data: D) => any;
  checkbox?: Functionable<CheckboxPlugin, T[number]>;
  tooltip?: Functionable<TooltipPlugin, T[number]>;
  click?: Functionable<ClickPlugin, T[number]>;
  sort?: Functionable<SortPlugin, T[number]>;
};

export type TableProps<T extends UnknownArray, D> = {
  data: T;
  columns: Column<T, D>[];
  onToggleAll?: (context: { isChecked?: boolean; items: T }) => void;
};

export default function Table<T extends UnknownArray, D extends any = unknown>(
  props: TableProps<T, D>,
) {
  const { data, columns, onToggleAll } = props;

  const hasCheckedAll = React.useState(false);
  const hasMasterCheckbox = React.useMemo(
    () =>
      columns.some(({ checkbox }) =>
        !checkbox
          ? false
          : typeof checkbox === "function"
          ? checkbox({}).enabled
          : checkbox.enabled,
      ),
    [columns],
  );

  return (
    <chakra.table>
      <chakra.thead>
        <tr>
          {hasMasterCheckbox && (
            <Checkbox
              onChange={(e) => {
                onToggleAll?.({
                  items: data,
                  isChecked: e.target.checked,
                });
              }}
            />
          )}

          {columns.map(({ label }) => {
            return <chakra.th>{label}</chakra.th>;
          })}
        </tr>
      </chakra.thead>

      <chakra.tbody>
        {data.map((item, idx_0) => {
          return (
            <chakra.tr key={idx_0}>
              {columns.map(
                ({ getData, tooltip, checkbox, click, sort, renderRow = (o) => o }, idx_1) => {
                  return (
                    <chakra.td key={`${idx_0}${idx_1}`}>
                      <React.Fragment>{renderRow(getData(item))}</React.Fragment>
                    </chakra.td>
                  );
                },
              )}
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
