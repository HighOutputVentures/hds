import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { ThemeProvider } from '@highoutput/hds';
import { IconButton } from '@highoutput/hds-forms';
import { DotsVerticalIcon } from '@highoutput/hds-icons';
import { Pagination } from '@highoutput/hds-pagination';
import { Table, TableProps } from '@highoutput/hds-table';
import { Meta, StoryFn } from '@storybook/react';
import { v4 as uuid } from 'uuid';

type TUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  username: string;
  isActive: boolean;
  role: string;
  teams: string[];
};

function mockUser(): TUser {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    username: faker.internet.userName(),
    isActive: true,
    role: faker.name.jobTitle(),
    teams: ['Design', 'Product', 'Marketing'],
  };
}

const items = new Array(2).fill(null).map(() => mockUser());

export default { title: 'Components/Table', argTypes: {} } as Meta;

const Template: StoryFn<(props: TableProps<TUser[]>) => JSX.Element> = (args) => {
  return (
    <ThemeProvider>
      <Table {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

function Header() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <HStack spacing="8px">
        <Heading fontSize="20px" lineHeight="20px" color="#0F0F0F" fontWeight="normal">
          Team members
        </Heading>
        <Badge
          bgColor="#EDE8FC"
          paddingY="4px"
          paddingX="6px"
          rounded="full"
          fontSize="14px"
          lineHeight="14px"
          letterSpacing="0.02em"
          fontWeight="normal"
          textTransform="unset"
          color="#8A68EF"
        >
          100 users
        </Badge>
      </HStack>

      <Menu>
        <MenuButton
          as={IconButton}
          variant="unstyled"
          icon={<Icon as={DotsVerticalIcon} w="20px" h="20px" color="#A3A3A3" />}
        />

        <MenuList>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

function Footer() {
  return (
    <Pagination
      variant="relay"
      page={1}
      pageSize={10}
      count={100}
      sizes={[10, 20, 30, 40, 50]}
      onChange={function noop() {}}
    />
  );
}

Default.args = {
  isLoading: false,
  isBordered: false,
  items,
  columns: [
    {
      label: 'Name',
      renderRow({ name, avatar, username }) {
        return (
          <Flex alignItems="center" gap="12px">
            <Avatar src={avatar} name={name} size="sm" width="40px" height="40px" />
            <Box>
              <Text color="#0F0F0F" fontWeight="medium">
                {name}
              </Text>
              <Text>@{username.toLowerCase().replace(/[_.]/g, '')}</Text>
            </Box>
          </Flex>
        );
      },
      onSort({ direction }) {
        alert(direction);
      },
      onCheck({ isChecked, item }) {
        alert(item.name + ' ' + (isChecked ? 'Checked' : 'Unchecked'));
      },
      onCheckAll() {
        alert('All users (Checked)');
      },
      isSticky: true,
    },
    {
      label: 'Status',
      renderRow({ isActive }) {
        return (
          <Badge
            variant="subtle"
            bgColor="#ECFDF3"
            rounded="16px"
            fontSize="14px"
            lineHeight="14px"
            fontWeight="normal"
            textTransform="unset"
            paddingY="2px"
            paddingX="8px"
            display="flex"
            alignItems="center"
            gap="6px"
          >
            <Box bgColor="#12B76A" width="6px" height="6px" rounded="full" />
            <Text color="#027A48">{isActive ? 'Active' : 'Inactive'}</Text>
          </Badge>
        );
      },
      onSort({ direction }) {
        alert(direction);
      },
      onCheck({ isChecked }) {
        alert(isChecked ? 'Status Checked' : 'Status Unchecked');
      },
      onCheckAll() {
        alert('All Status (Checked)');
      },
      defaultChecked() {
        return false;
      },
    },
    {
      label: 'Role',
      renderRow({ role }) {
        return role;
      },
      tooltip: 'Example tooltip',
    },
    {
      label: 'Email address',
      renderRow({ email }) {
        return email.toLowerCase().replace(/[_.]/g, '');
      },
    },
    {
      label: 'Team',
      renderRow({ teams }) {
        const scheme = [
          { bgColor: '#EDE8FC', color: '#8A68EF' },
          { bgColor: '#E8F3FC', color: '#295580' },
          { bgColor: '#FCEFD4', color: '#CC8900' },
          { bgColor: '#F0F0F0', color: '#525252' },
        ];

        return (
          <HStack>
            {[...teams, '+4'].map((team, idx) => (
              <Badge
                key={uuid()}
                paddingY="2px"
                paddingX="8px"
                rounded="full"
                fontSize="14px"
                lineHeight="14px"
                letterSpacing="0.02em"
                fontWeight="normal"
                textTransform="unset"
                {...scheme[idx]}
              >
                {team}
              </Badge>
            ))}
          </HStack>
        );
      },
    },

    {
      label: 'Actions',
      isSticky: true,
      renderRow() {
        return (
          <Menu>
            <MenuButton
              as={IconButton}
              variant="unstyled"
              icon={<Icon as={DotsVerticalIcon} w="20px" h="20px" color="#A3A3A3" />}
            />

            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuList>
          </Menu>
        );
      },
    },
  ],
  renderHeader: <Header />,
  renderFooter: <Footer />,
};
