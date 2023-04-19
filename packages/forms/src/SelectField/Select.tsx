import { chakra, Icon } from "@chakra-ui/react";
import {
  autoPlacement,
  autoUpdate,
  size as floatingSize,
  useFloating,
  useTransitionStyles,
} from "@floating-ui/react";
import { useSelect } from "downshift";
import * as React from "react";
import { v4 as uuid } from "uuid";
import { useStyles } from "../hooks";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import CloseIcon from "../icons/CloseIcon";
import { Nullable, Size } from "../types";

export type Option = {
  label: string;
  value: string | number;
};

type RenderOption<T extends Option> = (item: T) => JSX.Element;

export type SelectProps<T extends Option> = {
  size?: Size;
  value?: Nullable<T["value"]>;
  onChange?(newValue: Nullable<T["value"]>): void;
  options?: T[];
  placeholder?: string;
  leftIcon?: JSX.Element;
  /**
   * Not implemented yet
   */
  renderOption?: RenderOption<T>;
  isInvalid?: boolean;
  isDisabled?: boolean;
  /**
   * Not implemented yet
   */
  isReadOnly?: boolean;
  isClearable?: boolean;
  __fieldTestId?: string;
  __optionTestId?: string;
};

export default function Select<T extends Option>(props: SelectProps<T>) {
  const id = React.useId();

  const {
    /**
     *
     * Select props
     *
     */
    value,
    onChange,
    options = [],
    placeholder,
    renderOption = (item) => <chakra.div>{String(item.label)}</chakra.div>,
    isClearable,
    isInvalid,
    isDisabled,

    /**
     *
     * Custom props
     *
     */
    size,
    leftIcon,
    __fieldTestId = "hds.select-field.input",
    __optionTestId = "hds.select-field.option",
  } = props;

  const styles = useStyles({
    size,
    hasRightIcon: true,
    hasLeftIcon: !!leftIcon,
    hasClearIcon: isClearable,
  });

  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    reset,
  } = useSelect({
    id,
    items: options,
    defaultSelectedItem: options.find((o) => o.value === value),
    onSelectedItemChange(changes) {
      onChange?.(changes.selectedItem?.value ?? null);
    },
  });

  const { refs, strategy, x, y, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingSize({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
      autoPlacement({
        allowedPlacements: ["bottom", "top"],
      }),
    ],
    open: isOpen,
  });

  const transition = useTransitionStyles(context);

  return (
    <chakra.div
      sx={{
        _hover: {
          "& .HdsSelectClearButton": {
            display: "flex",
          },
        },
      }}
    >
      <chakra.button
        sx={{
          ...styles.field,
          width: "full",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          textAlign: "left",
          position: "relative",
          _placeholder: {},
        }}
        {...(isInvalid && {
          "aria-invalid": true,
        })}
        {...(isDisabled && {
          disabled: true,
        })}
        {...getToggleButtonProps({ ref: refs.setReference })}
        data-testid={__fieldTestId}
      >
        {leftIcon && (
          <chakra.div sx={styles.leftIcon({ isDisabled })}>
            {React.cloneElement(leftIcon, { sx: styles.icon() })}
          </chakra.div>
        )}

        <chakra.div
          sx={{
            flexGrow: 1,
            color: "neutrals.500",
            ...(isDisabled && {
              color: "neutrals.300",
            }),
            ...(selectedItem && {
              color: "neutrals.900",
              ...(isDisabled && {
                color: "neutrals.300",
              }),
            }),
          }}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </chakra.div>

        {!!isClearable && !!selectedItem && (
          <chakra.button
            type="button"
            tabIndex={-1}
            className="HdsSelectClearButton"
            sx={{
              ...styles.clearIcon,
              display: "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              reset();
            }}
            data-testid="hds.select.controls.clear"
          >
            <Icon as={CloseIcon} width={4} height={4} />
          </chakra.button>
        )}

        <chakra.div
          sx={styles.rightIcon({
            isActive: isOpen,
            isClickable: true,
            isDisabled,
          })}
        >
          <Icon
            as={ChevronDownIcon}
            sx={styles.icon({
              isRotated: isOpen,
            })}
          />
        </chakra.div>
      </chakra.button>

      <chakra.nav
        ref={refs.setFloating}
        sx={{
          position: strategy,
          top: `${y ?? 0}px`,
          left: `${x ?? 0}px`,
          ...transition.styles,
        }}
      >
        <chakra.ul
          sx={{
            ...styles.menu,
            listStyleType: "none",
            ...(!isOpen && {
              display: "none",
            }),
          }}
          {...getMenuProps()}
        >
          {options.map((item, index) => (
            <chakra.li
              key={uuid()}
              sx={styles.menuitem({
                isSelected: selectedItem?.value === item.value,
                isHighlighted: highlightedIndex === index,
              })}
              data-testid={__optionTestId}
              {...getItemProps({
                item,
                index,
              })}
            >
              {renderOption(item)}
            </chakra.li>
          ))}
        </chakra.ul>
      </chakra.nav>
    </chakra.div>
  );
}
