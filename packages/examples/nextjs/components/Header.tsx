import {
  Avatar,
  AvatarBadge,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  GenericAvatarIcon,
  HStack,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VisuallyHidden,
  chakra,
  useDisclosure,
} from '@highoutput/hds';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Number123Icon } from 'packages/hds/src/components/Toast/icons';
import { users } from '../fixtures';
import Logo from './Logo';
import {
  BellIcon,
  ChevronDownIcon,
  PowerIcon,
  SettingsIcon,
  UserShareIcon,
} from './icons';

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      h="65px"
      px={6}
      py={4}
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
        <NavButton as={Link} href="/" data-active={router.pathname === '/' || undefined}>
          Dashboard
        </NavButton>

        <Menu placement="bottom">
          {({ isOpen }) => (
            <>
              <MenuButton
                as={NavButton}
                data-active={router.pathname.startsWith('/users') || undefined}
              >
                <chakra.div display="flex" alignItems="center" gap={1}>
                  <chakra.span>Users</chakra.span>
                  <chakra.svg
                    as={ChevronDownIcon}
                    w={4}
                    h={4}
                    display="inline-block"
                    transition="all 150ms ease-in-out"
                    _expanded={{
                      transform: 'rotate(180deg)',
                    }}
                    data-expanded={isOpen || undefined}
                  />
                </chakra.div>
              </MenuButton>

              <Portal>
                <MenuList w="175px">
                  <MenuItem icon={<Icon as={Number123Icon} />}>Menu option 1</MenuItem>
                  <MenuItem icon={<Icon as={Number123Icon} />}>Menu option 2</MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<Icon as={Number123Icon} />}>Menu option 3</MenuItem>
                </MenuList>
              </Portal>
            </>
          )}
        </Menu>

        <NavButton
          as={Link}
          href="/orders"
          data-active={router.pathname === '/orders' || undefined}
        >
          Orders
        </NavButton>
      </HStack>

      <Spacer />

      <Flex gap={4} alignItems="center">
        <Notifications />
        <UserMenu />
      </Flex>
    </Flex>
  );
}

const NavButton = chakra('button', {
  baseStyle: {
    px: 3,
    py: 1,
    letterSpacing: '0.02em',
    rounded: 'md',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    _hover: {
      bg: 'primary.50',
    },
    _active: {
      bg: 'primary.100',
      color: 'primary.900',
    },
  },
});

const user = users[0];

function UserMenu() {
  const router = useRouter();

  return (
    <Menu>
      <MenuButton>
        <VisuallyHidden>Toggle Profile Menu</VisuallyHidden>
        <Avatar size="sm" src={user.avatar} icon={<GenericAvatarIcon />}>
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
        <MenuItem icon={<UserShareIcon />}>View Profile</MenuItem>
        <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<PowerIcon />}
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
        aria-label="Toggle Notifications"
        variant="unstyled"
        icon={<Icon as={BellIcon} w={6} h={6} />}
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
