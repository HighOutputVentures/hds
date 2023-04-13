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
import { useStyles } from "./hooks";

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
}

interface SingleProps {
  items: Item[];
  isGrouped?: false;
}

export type DropdownProps = (GroupProps | SingleProps) & BaseProps;

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    placement,
    renderHeader,
    closeOnSelect,
    children,
    __menuTestId = "hds.dropdown",
    __menuItemTestId = "hds.dropdown.item",
    ...others
  } = props;

  const styles = useStyles();
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
        <MenuList sx={styles.menulist} data-testid={__menuTestId}>
          {!!renderHeader && (
            <MenuGroup sx={styles.menugroup}>
              <chakra.div sx={styles.header}>{renderHeader}</chakra.div>
              <Divider sx={styles.divider} />
            </MenuGroup>
          )}

          {!others.isGrouped && (
            <MenuGroup sx={styles.menugroup}>
              {others.items.map(({ command, label, icon, onClick }) => {
                return (
                  <MenuItem
                    key={uuid()}
                    icon={icon}
                    command={command}
                    onClick={onClick}
                    sx={styles.menuitem}
                    data-testid={__menuItemTestId}
                  >
                    {label}
                  </MenuItem>
                );
              })}
            </MenuGroup>
          )}

          {props.isGrouped &&
            props.items.map((items, idx_0, arr_0) => {
              return (
                <MenuGroup key={uuid()} sx={styles.menugroup}>
                  {items.map(({ label, command, icon, onClick }, idx_1, arr_1) => {
                    const hasDivider =
                      idx_0 < arr_0.length - 1 && idx_1 === arr_1.length - 1;

                    return (
                      <React.Fragment key={uuid()}>
                        <MenuItem
                          command={command}
                          icon={icon}
                          onClick={onClick}
                          sx={styles.menuitem}
                          data-testid={__menuItemTestId}
                        >
                          {label}
                        </MenuItem>

                        {hasDivider && <Divider sx={styles.divider} />}
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

export default Dropdown;
