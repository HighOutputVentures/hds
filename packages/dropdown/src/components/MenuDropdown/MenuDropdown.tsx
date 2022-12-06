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
  MenuButtonProps,
  MenuItemProps,
  MenuList,
  Text,
} from '@chakra-ui/react';
// @ts-ignore
import React from 'react';
import ThreeDots from '../Icon/ThreeDots';

export interface MenuDropdownFieldProps {
  menuButton?: Omit<MenuButtonProps, 'css' | 'style'>;
  indicator?: boolean;
  menuHeader: {
    profileUrl: string;
    userName: string;
    emailAddress: string;
  };
  menuItems: Omit<MenuItemProps[], 'css' | 'style'>;
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

export type IMenuDropdownFieldProps = IKebabMenu | IButtonMenu | IProfileMenu;
const MenuDropdown = (props: IMenuDropdownFieldProps) => {
  const {
    menuHeader,
    menuButtonText,
    indicator = true,
    menuItems,
    profileUrl,
    menuType,
  } = props;

  return (
    <Menu data-testid="menu-dropdown">
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
                color={isOpen ? ' #344054' : '#98A2B3'}
              />
            ) : menuType === 'profile' ? (
              <Avatar
                src={profileUrl}
                border={isOpen ? '4px solid #F4EBFF' : undefined}
              />
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
            marginTop="52px"
            data-testid="menu-list"
            py={'0px'}
          >
            <HStack p={'16px 12px'}>
              <Avatar src={menuHeader.profileUrl} width="40px" height="40px">
                {indicator && <AvatarBadge boxSize="1em" bg="#00C408" />}
              </Avatar>

              <Box>
                <Text size="label-xs-default" color="neutrals.900" mb="4px">
                  {menuHeader.userName}
                </Text>
                <Text size="label-xs-default" color="neutrals.500">
                  {menuHeader.emailAddress}
                </Text>
              </Box>
            </HStack>
            <Divider orientation="horizontal" />

            {menuItems?.map((items, _) => {
              return <>{items}</>;
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuDropdown;
