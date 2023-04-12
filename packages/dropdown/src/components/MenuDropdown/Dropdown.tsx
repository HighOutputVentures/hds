import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  PlacementWithLogical,
  UseDisclosureReturn,
  useDisclosure,
} from '@chakra-ui/react';
import { ButtonVariantsTypes } from '@highoutput/hds/src/theme/components/button/variants';
import React, { FC } from 'react';

export interface Items {
  label: string;
  command?: string;
  icon?: JSX.Element;
}
export interface IMenuItemsSingle {
  items: Array<Items>;
}

export interface IMenuItemsGroup {
  items: Array<Array<Items>>;
}
export interface DropdownFieldMainProps {
  menuButtonText?: string;
  profileUrl?: string;
  indicator?: boolean;
  renderHeader?: React.ReactNode;
  __menuTestId?: string;
  __menuButtonTestId?: string;
  __menuListTestId?: string;
  gap?: string;
  placement?: PlacementWithLogical | undefined;
  variant?: ButtonVariantsTypes;
  closeOnSelect?: boolean;
  showDropdownIndicator?: boolean;
  children(context: UseDisclosureReturn): JSX.Element | null;
}
export interface DropdownFieldPropsGroup extends DropdownFieldMainProps {
  group: true;
  items: IMenuItemsGroup['items'];
  hasDivider?: never;
}
export interface DropdownFieldPropsSingle extends DropdownFieldMainProps {
  group: false;
  items: IMenuItemsSingle['items'];
  hasDivider?: boolean;
}

export type DropdownFieldProps =
  | DropdownFieldPropsGroup
  | DropdownFieldPropsSingle;
const Dropdown: FC<DropdownFieldProps> = (props) => {
  const {
    renderHeader,
    closeOnSelect = true,
    showDropdownIndicator = false,
    items,
    gap,
    group,
    hasDivider,
    children,
    __menuTestId,
    __menuButtonTestId,
    __menuListTestId,
    placement,
    variant = 'unstyled',
  } = props;
  const disclosure = useDisclosure();
  return (
    <Menu
      data-testid={__menuTestId ?? 'hds.menu.dropdown'}
      placement={placement}
      closeOnSelect={closeOnSelect}
    >
      <Box w="full">
        <MenuButton
          variant={variant}
          as={Button}
          isActive={disclosure.isOpen}
          rightIcon={
            !disclosure.isOpen && showDropdownIndicator ? (
              <ChevronDownIcon width="20px" height="20px" />
            ) : disclosure.isOpen && showDropdownIndicator ? (
              <ChevronUpIcon width="20px" height="20px" />
            ) : undefined
          }
          data-testid={__menuButtonTestId}
          display="flex"
        >
          {children(disclosure)}
        </MenuButton>

        <MenuList
          boxShadow={
            '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
          }
          marginTop={gap}
          data-testid={__menuListTestId ?? 'hds.menu.list'}
          py={'0px'}
          fontSize={'14px'}
          color="neutrals.900"
        >
          {renderHeader}
          <Divider orientation="horizontal" />
          <MenuGroup>
            {!group &&
              (items as IMenuItemsSingle['items']).map(
                ({ command, label, icon }, idx) => {
                  return (
                    <>
                      <MenuItem command={command} icon={icon}>
                        {label}
                      </MenuItem>
                      {hasDivider && idx !== items.length - 1 && <Divider />}
                    </>
                  );
                }
              )}
            {group &&
              (items as IMenuItemsGroup['items']).map((item) => {
                return item.map(({ label, command, icon }, idx) => {
                  return (
                    <>
                      <MenuItem command={command} icon={icon}>
                        {label}
                      </MenuItem>
                      {idx === item.length - 1 && <Divider />}
                    </>
                  );
                });
              })}
          </MenuGroup>
        </MenuList>
      </Box>
    </Menu>
  );
};

export default Dropdown;
