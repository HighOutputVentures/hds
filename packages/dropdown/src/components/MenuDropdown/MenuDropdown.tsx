import { ChevronDownIcon } from '@chakra-ui/icons';
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
  MenuGroup,
  MenuList,
  PlacementWithLogical,
  Portal,
  Text,
} from '@chakra-ui/react';
import { ThreeDots } from '@highoutput/hds-icons';
import { ButtonVariantsTypes } from '@highoutput/hds/src/theme/components/button/variants';
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
  __menuTestId?: string;
  __menuButtonTestId?: string;
  __menuListTestId?: string;
  menuItems: React.ReactNode;
  gap?: string;
  placement?: PlacementWithLogical | undefined;
  variant?: ButtonVariantsTypes;
  closeOnSelect?: boolean;
  showRightIcon?: boolean;
}

const MenuDropdown: FC<MenuDropdownFieldProps> = (props) => {
  const {
    menuHeader,
    menuButtonText = '',
    indicator = true,
    closeOnSelect = true,
    showRightIcon = true,
    menuItems,
    profileUrl,
    menuType,
    placement,
    variant = 'unstyled',
  } = props;

  const styles = useStyles();
  const shouldShowRightIcon = menuType === 'button' && showRightIcon;

  const getButtonContent = ({ isOpen }: { isOpen: boolean }) => {
    switch (menuType) {
      case 'kebab':
        return <Icon as={ThreeDots} sx={styles.menubuttonIcon({ isOpen })} />;
      case 'button':
        return <Text size="label-sm-default">{menuButtonText}</Text>;
      case 'profile':
        return <Avatar src={profileUrl} sx={styles.menuAvatar({ isOpen })} />;
      case 'meatball':
        return (
          <Box transform="rotate(90deg)">
            <Icon as={ThreeDots} sx={styles.menubuttonIcon({ isOpen })} />
          </Box>
        );
    }
  };

  return (
    <Menu placement={placement} closeOnSelect={closeOnSelect} data-testid="hds.menu.dropdown">
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant={variant}
            isActive={isOpen}
            display="flex"
            transition="all 300ms ease-in-out"
            {...(shouldShowRightIcon && {
              rightIcon: (
                <ChevronDownIcon
                  width={4}
                  height={4}
                  {...(isOpen && {
                    transform: 'rotate(180deg)',
                  })}
                />
              ),
            })}
            data-testid={
              menuType === 'button'
                ? 'hds.menu.button'
                : menuType === 'kebab'
                ? 'hds.menu.kebab'
                : 'hds.menu.profile'
            }
          >
            {getButtonContent({ isOpen })}
          </MenuButton>

          <Portal>
            <MenuList data-testid="hds.menu.list" sx={styles.menulist}>
              {menuHeader && (
                <>
                  <MenuGroup>
                    <HStack py={4} px={3}>
                      <Avatar src={menuHeader?.profileUrl} width="40px" height="40px">
                        {indicator && <AvatarBadge boxSize="1em" bg="#00C408" />}
                      </Avatar>
                      <Box>
                        <Text size="label-xs-default" color="neutrals.900" mb={1}>
                          {menuHeader?.userName}
                        </Text>

                        <Text size="label-xs-default" color="neutrals.500">
                          {menuHeader?.emailAddress}
                        </Text>
                      </Box>
                    </HStack>
                  </MenuGroup>
                  <MenuGroup>
                    <Divider orientation="horizontal" />
                  </MenuGroup>
                </>
              )}

              {menuItems}
            </MenuList>
          </Portal>
        </>
      )}
    </Menu>
  );
};

function useStyles() {
  return {
    menulist: {
      boxShadow: [
        '0px 12px 16px -4px rgba(16, 24, 40, 0.08),',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      ].join(),
      paddingY: '0px',
      fontSize: '14px',
      color: 'neutrals.900',
      overflow: 'hidden',
    },
    menubuttonIcon({ isOpen }: { isOpen: boolean }) {
      return {
        width: '20px',
        height: '20px',
        color: isOpen ? ' #344054' : '#98A2B3',
        _active: {
          background: 'transparent',
        },
        transition: 'all 300ms ease-in-out',
      };
    },
    menuAvatar({ isOpen }: { isOpen: boolean }) {
      if (!isOpen) return {};

      return {
        border: '4px',
        borderColor: '#F4EBFF',
      };
    },
  };
}

export default MenuDropdown;
