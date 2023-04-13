import {
  chakra,
  Divider,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  PlacementWithLogical,
  Portal,
  useDisclosure,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import * as React from "react";
import { v4 as uuid } from "uuid";

interface Item {
  icon?: JSX.Element;
  label: string;
  command?: string;
  onClick?(): void;
}

interface BaseProps {
  renderHeader?: JSX.Element;
  placement?: PlacementWithLogical | undefined;
  closeOnSelect?: boolean;
  children(context: UseDisclosureReturn): JSX.Element;
  __menuTestId?: string;
  __menuItemTestId?: string;
}

interface GroupProps {
  items: Item[][];
  isGrouped: true;
  hasDivider?: never;
}

interface SingleProps {
  items: Item[];
  isGrouped?: false;
  hasDivider?: boolean;
}

export type DropdownProps = (GroupProps | SingleProps) & BaseProps;

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    placement,
    renderHeader,
    closeOnSelect,
    hasDivider,
    children,
    __menuTestId = "hds.dropdown",
    __menuItemTestId = "hds.dropdown.item",
    ...others
  } = props;

  const disclosure = useDisclosure();

  return (
    <Menu
      variant="unstyled"
      isOpen={disclosure.isOpen}
      onOpen={disclosure.onOpen}
      onClose={disclosure.onClose}
      placement={placement}
      closeOnBlur
      closeOnSelect={closeOnSelect}
      isLazy
      lazyBehavior="keepMounted"
    >
      <MenuButton as={createRefReciever(children(disclosure))} />

      <Portal appendToParentPortal={false}>
        <MenuList
          py="0px"
          color="neutrals.900"
          fontSize="14px"
          overflow="hidden"
          boxShadow={boxShadow}
          data-testid={__menuTestId}
        >
          {!!renderHeader && (
            <MenuGroup>
              <chakra.div py={2}>{renderHeader}</chakra.div>

              <Divider orientation="horizontal" />
            </MenuGroup>
          )}

          {!others.isGrouped && (
            <MenuGroup>
              {others.items.map(({ command, label, icon, onClick }, idx, arr) => {
                const shouldAddDivider = hasDivider && idx !== arr.length - 1;

                return (
                  <React.Fragment key={uuid()}>
                    <MenuItem
                      command={command}
                      icon={icon}
                      onClick={onClick}
                      data-testid={__menuItemTestId}
                    >
                      {label}
                    </MenuItem>

                    {shouldAddDivider && <Divider />}
                  </React.Fragment>
                );
              })}
            </MenuGroup>
          )}

          {props.isGrouped &&
            props.items.map((items) => {
              return (
                <MenuGroup key={uuid()}>
                  {items.map(({ label, command, icon, onClick }, idx) => {
                    const shouldAddDivider = idx === items.length - 1;

                    return (
                      <React.Fragment key={uuid()}>
                        <MenuItem
                          command={command}
                          icon={icon}
                          onClick={onClick}
                          data-testid={__menuItemTestId}
                        >
                          {label}
                        </MenuItem>

                        {shouldAddDivider && <Divider />}
                      </React.Fragment>
                    );
                  })}
                </MenuGroup>
              );
            })}
        </MenuList>
      </Portal>
    </Menu>
  );
};

function createRefReciever(children: JSX.Element) {
  return React.forwardRef<any>(function Tunnel(_, ref) {
    return React.cloneElement(children, { ref });
  });
}

const boxShadow =
  "0px 12px 16px -4px rgba(16, 24, 40, 0.08)," +
  "0px 4px 6px -2px rgba(16, 24, 40, 0.03)";

export default Dropdown;
