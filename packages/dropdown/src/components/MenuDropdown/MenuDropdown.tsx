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
import { ThreeDots } from '@highoutput/hds-icons';
import { ButtonVariantsTypes } from '@highoutput/hds';
import React, { FC } from 'react';

export interface MenuDropdownFieldProps {
  menuType: 'kebab' | 'button' | 'profile' | 'meatball';
  menuButtonText?: string;
  profileUrl?: string;
  indicator?: boolean;
  menuHeader?: {
    profileUrl: string;
    userName: string;
    emailAddress: string;
  };
  menuItems: Omit<MenuItemProps, 'css' | 'style'>;
  gap?: string;
  placement?: PlacementWithLogical | undefined;
  variant?: ButtonVariantsTypes;
}

const MenuDropdown: FC<MenuDropdownFieldProps> = (props) => {
  const {
    menuHeader,
    menuButtonText = '',
    indicator = true,
    menuItems,
    gap,
    profileUrl,
    menuType,
    placement,
    variant = 'unstyled',
  } = props;

  return (
    <Menu data-testid="menu-dropdown" placement={placement}>
      {({ isOpen }) => (
        <Box w="full">
          <MenuButton
            variant={variant}
            as={Button}
            isActive={isOpen}
            rightIcon={
              menuType === 'button' && !isOpen ? (
                <ChevronDownIcon width="20px" height="20px" />
              ) : menuType === 'button' && isOpen ? (
                <ChevronUpIcon width="20px" height="20px" />
              ) : undefined
            }
            data-testid={
              menuType === 'button'
                ? 'menu-button'
                : menuType === 'kebab'
                ? 'menu-kebab'
                : 'menu-profile'
            }
            display="flex"
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
              <Text size="label-sm-default">{menuButtonText}</Text>
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
        </Box>
      )}
    </Menu>
  );
};

export default MenuDropdown;
