import { faker } from '@faker-js/faker';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@highoutput/hds';
import {
  BellIcon,
  ChevronDownIcon,
  ExitIcon,
  SettingIcon,
  UserIcon,
} from '@highoutput/hds-icons';
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
            rightIcon={<ChevronDownIcon w={4} h={4} />}
            isActive={router.pathname.startsWith('/users')}
          >
            Users
          </MenuButton>

          <MenuList w="200px">
            <MenuItem>Menu option 1</MenuItem>
            <MenuItem>Menu option 2</MenuItem>
            <MenuDivider />
            <MenuItem>Menu option 3</MenuItem>
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
      <MenuButton>
        <Avatar size="sm" src={user.avatar}>
          <AvatarBadge />
        </Avatar>
      </MenuButton>

      <MenuList w="250px">
        <MenuItem>
          <HStack>
            <Avatar size="sm" src={user.avatar} name={user.name} />
            <Box>
              <Heading size="paragraph-sm" fontWeight="medium">
                {user.name}
              </Heading>
              <Text size="label-xs" color="neutral.700">
                @{user.username}
              </Text>
            </Box>
          </HStack>
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
  const disclosure = useDisclosure();

  return (
    <>
      <IconButton
        aria-label=""
        variant="unstyled"
        icon={<BellIcon w={5} h={5} />}
        onClick={disclosure.onOpen}
      />

      <Drawer size="sm" isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
        <DrawerOverlay mt="65px" />
        <DrawerContent mt="65px">
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Emails</Tab>
                <Tab>Others</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>Hello</TabPanel>
                <TabPanel>Hello Again!</TabPanel>
                <TabPanel>Ok, Bye!</TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
