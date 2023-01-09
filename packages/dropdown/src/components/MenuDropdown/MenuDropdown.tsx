import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItemProps,
  MenuList,
  PlacementWithLogical,
  Text,
} from '@chakra-ui/react';
// @ts-ignore
import { ThreeDots } from '@highoutput/hds-icons';
import React from 'react';

// import ThreeDots from '../Icon/ThreeDots';

export interface MenuDropdownFieldProps {
  indicator?: boolean;
  menuHeader?: {
    profileUrl: string;
    userName: string;
    emailAddress: string;
  };
  menuItems: Omit<MenuItemProps, 'css' | 'style'>;
  gap?: string;
  placement?: PlacementWithLogical | undefined;
}

export interface IKebabMenu extends MenuDropdownFieldProps {
  menuType: 'kebab';
  menuButtonText?: never;
  profileUrl?: never;
}
export interface IButtonMenu extends MenuDropdownFieldProps {
  menuType: 'button';
  menuButtonText: string;
  profileUrl?: never;
}
export interface IProfileMenu extends MenuDropdownFieldProps {
  menuType: 'profile';
  menuButtonText?: never;
  profileUrl: string;
}
export interface IMeatBallMenu extends MenuDropdownFieldProps {
  menuType: 'meatball';
  menuButtonText?: never;
  profileUrl?: never;
}

export type IMenuDropdownFieldProps =
  | IKebabMenu
  | IButtonMenu
  | IProfileMenu
  | IMeatBallMenu;
const MenuDropdown = (props: IMenuDropdownFieldProps) => {
  const {
    menuHeader,
    menuButtonText,
    indicator = true,
    menuItems,
    gap,
    profileUrl,
    menuType,
    placement,
  } = props;

  return (
    <Menu data-testid="menu-dropdown" placement={placement}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            backgroundColor="white"
            isActive={isOpen}
            rightIcon={
              menuType === 'button' && !isOpen ? (
                <ChevronDownIcon width="20px" height="20px" />
              ) : menuType === 'button' && isOpen ? (
                <ChevronUpIcon width="20px" height="20px" />
              ) : undefined
            }
            color="black"
            data-testid={
              menuType === 'button'
                ? 'menu-button'
                : menuType === 'kebab'
                ? 'menu-kebab'
                : 'menu-profile'
            }
            _hover={{ background: 'white' }}
            border={menuType === 'button' ? '1px solid #D6D6D6' : undefined}
            width={menuType === 'button' ? '130px' : undefined}
            height={menuType === 'button' ? '44px' : undefined}
          >
            {menuType === 'kebab' ? (
              <Icon
                as={ThreeDots}
                width="20px"
                height="20px"
                _active={{ background: 'transparent' }}
                color={isOpen ? ' #344054' : '#98A2B3'}
              />
            ) : menuType === 'profile' ? (
              <Avatar
                src={profileUrl}
                border={isOpen ? '4px solid #F4EBFF' : undefined}
              />
            ) : menuType === 'meatball' ? (
              <Box transform={'rotate(90deg)'}>
                <Icon
                  as={ThreeDots}
                  width="20px"
                  height="20px"
                  _active={{ background: 'transparent' }}
                  color={isOpen ? ' #344054' : '#98A2B3'}
                />
              </Box>
            ) : (
              <Text
                fontSize={'18px'}
                fontWeight={500}
                color="neutrals.700"
                lineHeight={'24px'}
              >
                {menuButtonText}
              </Text>
            )}
          </MenuButton>
          <MenuList
            boxShadow={
              '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
            }
            marginTop={gap}
            data-testid="menu-list"
            py={'0px'}
            fontSize={'14px'}
            color="neutrals.900"
          >
            {menuHeader && (
              <HStack p={'16px 12px'}>
                <Avatar src={menuHeader?.profileUrl} width="40px" height="40px">
                  {indicator && <AvatarBadge boxSize="1em" bg="#00C408" />}
                </Avatar>

                <Box>
                  <Text size="label-xs-default" color="neutrals.900" mb="4px">
                    {menuHeader?.userName}
                  </Text>
                  <Text size="label-xs-default" color="neutrals.500">
                    {menuHeader?.emailAddress}
                  </Text>
                </Box>
              </HStack>
            )}
            <Divider orientation="horizontal" />
            <Menu>
              {() => {
                return <>{menuItems}</>;
              }}
            </Menu>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuDropdown;
