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
  label: React.ReactNode;
  command?: string;
  onClick?(): void;
}

interface BaseProps {
  placement?: PlacementWithLogical | undefined;
  closeOnSelect?: boolean;
  renderHeader?: JSX.Element;
  renderOption?(item: Item): JSX.Element;
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
    children,
    placement,
    renderHeader,
    renderOption = (item) => item.label,
    closeOnSelect,
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
              {others.items.map((item) => {
                return (
                  <MenuItem
                    sx={styles.menuitem}
                    key={uuid()}
                    onClick={item.onClick}
                    /**
                     *
                     * Only render icon and command if
                     * user did not provide the "renderOption" prop
                     *
                     */
                    {...(!props.renderOption && {
                      icon: item.icon,
                      command: item.command,
                    })}
                    data-testid={__menuItemTestId}
                  >
                    {renderOption(item)}
                  </MenuItem>
                );
              })}
            </MenuGroup>
          )}

          {props.isGrouped &&
            props.items.map((items, idx_0, arr_0) => {
              return (
                <MenuGroup key={uuid()} sx={styles.menugroup}>
                  {items.map((item, idx_1, arr_1) => {
                    const hasDivider =
                      idx_0 < arr_0.length - 1 && idx_1 === arr_1.length - 1;

                    return (
                      <React.Fragment key={uuid()}>
                        <MenuItem
                          icon={item.icon}
                          sx={styles.menuitem}
                          data-testid={__menuItemTestId}
                          /**
                           *
                           * See comment above
                           *
                           */
                          {...(!props.renderOption && {
                            icon: item.icon,
                            command: item.command,
                          })}
                        >
                          {renderOption(item)}
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
