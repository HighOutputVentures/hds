import { chakra, Portal, useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import {
  autoPlacement,
  autoUpdate,
  Placement,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import * as React from "react";
import { v4 as uuid } from "uuid";

interface Item {
  icon?: JSX.Element;
  label: React.ReactNode;
  command?: string;
  onClick?(): void;
  isSelected?: boolean;
}

type RenderChildrenContext = UseDisclosureReturn & { hasSelectedItem: boolean };

type BaseProps = {
  items: Item[] | Item[][];
  placement?: Placement;
  renderHeader?: JSX.Element;
  renderOption?(item: Item): JSX.Element;
  closeOnSelect?: boolean;
  children(context: RenderChildrenContext): JSX.Element;
  __menuTestId?: string;
  __menuItemTestId?: string;
};

type SingleProps = {
  items: Item[];
  isGrouped?: false;
};

type GroupProps = {
  items: Item[][];
  isGrouped: true;
};

export type DropdownProps = (SingleProps | GroupProps) & BaseProps;

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    children,
    placement,
    renderHeader,
    renderOption,
    closeOnSelect,
    __menuTestId = "hds.dropdown",
    __menuItemTestId = "hds.dropdown.item",
    ...others
  } = props;

  const disclosure = useDisclosure();

  const hasSelectedItem = !others.isGrouped
    ? others.items.some((o) => !!o.isSelected)
    : others.items.flat().some((o) => !!o.isSelected);

  const items = !others.isGrouped
    ? others.items.map<ItemInternal>((data) => ({ data }))
    : others.items
        .map<ItemInternal[]>((arr) => [...arr.map((data) => ({ data })), { skip: true }])
        .flat();

  const { refs, x, y, strategy, context } = useFloating({
    open: disclosure.isOpen,
    strategy: "fixed",
    middleware: [
      autoPlacement({
        allowedPlacements: [
          ...(!!placement ? [placement] : []),
          "bottom-start",
          "bottom-end",
          "bottom",
          "top-start",
          "top-end",
          "top",
        ],
      }),
    ],
    whileElementsMounted: autoUpdate,
    onOpenChange(open) {
      if (open) {
        disclosure.onOpen();
      } else {
        disclosure.onClose();
      }
    },
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([dismiss]);
  const { isMounted, styles } = useTransitionStyles(context);

  return (
    <>
      {React.cloneElement(children({ ...disclosure, hasSelectedItem }), {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}

      {isMounted && (
        <Portal>
          <chakra.nav
            ref={refs.setFloating}
            role="menu"
            sx={{
              position: strategy,
              top: `${y ?? 0}px`,
              left: `${x ?? 0}px`,
              border: "1px",
              borderColor: "Gray.100",
              bgColor: "white",
              rounded: "8px",
              marginTop: "8px",
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08)," +
                "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              ...styles,
            }}
            {...getFloatingProps()}
            data-testid={__menuTestId}
          >
            <chakra.ul
              sx={{
                listStyle: "none",
                padding: "0px",
                margin: "0px",
                overflow: "hidden",
              }}
            >
              {!!renderHeader && (
                <chakra.li
                  role="menuitem"
                  sx={{
                    paddingY: "12px",
                    paddingX: "16px",
                    borderBottom: "1px",
                    borderColor: "neutrals.200",
                  }}
                  data-testid={__menuItemTestId}
                >
                  {renderHeader}
                </chakra.li>
              )}

              {items.map((item, index, arr) => {
                if (item.skip) {
                  return (
                    <chakra.li key={uuid()}>
                      {index + 1 < arr.length && <MenuDivider />}
                    </chakra.li>
                  );
                }

                const { icon, label, command, isSelected, onClick } = item.data;

                return (
                  <chakra.li
                    key={uuid()}
                    role="menuitem"
                    sx={{
                      cursor: "pointer",
                      transition: "colors 300ms ease-in-out",
                      _hover: {
                        bgColor: "neutrals.100",
                      },
                      ...(isSelected && {
                        bgColor: "brand.primary.100",
                        _hover: {},
                      }),
                    }}
                    onClick={() => {
                      onClick?.();

                      if (closeOnSelect) {
                        disclosure.onClose();
                      }
                    }}
                    data-testid={__menuItemTestId}
                  >
                    {renderOption?.(item.data)}
                    {!renderOption && (
                      <MenuItemInnerWrapper>
                        {icon && <MenuItemIcon>{icon}</MenuItemIcon>}
                        {label && <MenuItemLabel>{label}</MenuItemLabel>}
                        {command && <MenuItemCommand>{command}</MenuItemCommand>}
                      </MenuItemInnerWrapper>
                    )}
                  </chakra.li>
                );
              })}
            </chakra.ul>
          </chakra.nav>
        </Portal>
      )}
    </>
  );
};

const MenuItemInnerWrapper = chakra("div", {
  baseStyle: {
    gap: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingY: "12px",
    paddingX: "16px",
  },
});

const MenuItemIcon = chakra("div", {
  baseStyle: {
    color: "Gray.700",
    display: "flex",
    alignItems: "center",
  },
});

const MenuItemLabel = chakra("div", {
  baseStyle: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "0.02em",
  },
});

const MenuItemCommand = chakra("div", {
  baseStyle: {
    color: "neutrals.700",
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.02em",
  },
});

const MenuDivider = chakra("div", {
  baseStyle: {
    borderTop: "1px",
    borderColor: "neutrals.200",
  },
});

type ItemInternal =
  | {
      data: Item;
      skip?: false;
    }
  | {
      skip: true;
      data?: never;
    };
