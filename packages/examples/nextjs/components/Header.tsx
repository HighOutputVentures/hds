import { faker } from '@faker-js/faker';
import {
  Box,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@highoutput/hds';
import { Avatar, AvatarLabel } from '@highoutput/hds-avatar';
import { Button, IconButton } from '@highoutput/hds-forms';
import {
  BellIcon,
  ChevronDownIcon,
  ErrorFilmIcon,
  ErrorFolderIcon,
  ExitIcon,
  SettingIcon,
  UserIcon,
  WarningFolderIcon,
} from '@highoutput/hds-icons';
import { SlideoutMenu } from '@highoutput/hds-slideout-menu';
import { Tabs } from '@highoutput/hds-tab';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export function Header() {
  const router = useRouter();

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
      <Icon
        as={Logo}
        h="30px"
        w="160px"
        mr={{
          base: 8,
          md: 12,
          lg: 16,
        }}
      />

      <HStack spacing={4}>
        <Button as={Link} href="/" variant="ghost" isActive={router.pathname === '/'}>
          Dashboard
        </Button>

        <Menu placement="bottom">
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon w={4} h={4} />}
            isActive={router.pathname.startsWith('/users')}
          >
            Users
          </MenuButton>

          <MenuList w="200px">
            <MenuItem icon={<ErrorFolderIcon w={6} h={6} />}>Menu option 1</MenuItem>
            <MenuItem icon={<WarningFolderIcon w={6} h={6} />}>Menu option 2</MenuItem>
            <MenuDivider />
            <MenuItem icon={<ErrorFilmIcon w={6} h={6} />}>Menu option 3</MenuItem>
          </MenuList>
        </Menu>

        <Button
          as={Link}
          href="/orders"
          variant="ghost"
          isActive={router.pathname === '/orders'}
        >
          Orders
        </Button>
      </HStack>

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

      <MenuList w="250px">
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
