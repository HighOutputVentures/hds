import { faker } from '@faker-js/faker';
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@highoutput/hds';
import { Avatar, AvatarLabel } from '@highoutput/hds-avatar';
import { IconButton } from '@highoutput/hds-forms';
import { BellIcon, ExitIcon, SettingIcon, UserIcon } from '@highoutput/hds-icons';
import { SlideoutMenu } from '@highoutput/hds-slideout-menu';
import { Tabs } from '@highoutput/hds-tab';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function Header() {
  return (
    <Box
      as="header"
      h="65px"
      px={6}
      py={4}
      display="flex"
      alignItems="center"
      borderBottom="1px"
      borderColor="neutrals.200"
    >
      <Box flexGrow={1} />

      <HStack spacing={4}>
        <Notifications />
        <UserMenu />
      </HStack>
    </Box>
  );
}

function UserMenu() {
  const router = useRouter();
  const [user, setUser] = useState<{
    name?: string;
    username?: string;
    avatar?: string;
  }>({});

  useEffect(() => {
    setUser({
      name: faker.name.fullName(),
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
    });
  }, []);

  return (
    <Menu>
      <MenuButton as={Avatar} size="sm" src={user.avatar} />

      <MenuList>
        <MenuItem>
          <AvatarLabel
            src={user.avatar}
            name={user.name}
            supportText={`@${user.username}`}
          />
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<UserIcon />}>View Profile</MenuItem>
        <MenuItem icon={<SettingIcon />}>Settings</MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<ExitIcon />}
          onClick={() => {
            router.push('/login');
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function Notifications() {
  return (
    <SlideoutMenu
      gutter={{
        top: 65, // header height,
      }}
      renderTrigger={({ isOpen, onToggle }) => (
        <IconButton
          size="md"
          variant="unstyled"
          icon={<BellIcon w={6} h={6} />}
          onClick={onToggle}
          isActive={isOpen}
        />
      )}
    >
      <Box p={8}>
        <Tabs
          items={[
            {
              label: 'All',
              render() {
                return <Box py={4}>All</Box>;
              },
            },
            {
              label: 'Emails',
              badgeCount: 1,
              render() {
                return <Box py={4}>Emails</Box>;
              },
            },
            {
              label: 'Others',
              badgeCount: 3,
              render() {
                return <Box py={4}>Others</Box>;
              },
            },
          ]}
        />
      </Box>
    </SlideoutMenu>
  );
}
