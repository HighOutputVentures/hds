import { faker } from '@faker-js/faker';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@highoutput/hds';
import { AvatarLabel } from '@highoutput/hds-avatar';
import { Badge } from '@highoutput/hds-badge';
import { Breadcrumbs } from '@highoutput/hds-breadcrumbs';
import { RangeDatePickerDropdown } from '@highoutput/hds-date-picker';
import { Button, IconButton } from '@highoutput/hds-forms';
import { DotsVerticalIcon, TrashErrorIcon } from '@highoutput/hds-icons';
import { Modal } from '@highoutput/hds-modal';
import { Pagination } from '@highoutput/hds-pagination';
import { Table } from '@highoutput/hds-table';
import { useToast } from '@highoutput/hds-toast';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  teams: string[];
  isVerified: boolean;
};

function mockUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    username: faker.internet.userName(),
    teams: faker.helpers.arrayElements(
      [
        'Design',
        'Engineer',
        'Marketing',
        'BizOps',
        'Advante',
        'PH Wallet',
        'EU Wallet',
        'BrandSonic',
        'TalentStories',
        'Her Vietname',
      ],
      3,
    ),
    isVerified: faker.datatype.boolean(),
  };
}

type Props = {
  users: User[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = new Array(5).fill(null).map((_) => {
    return mockUser();
  });

  return {
    props: {
      users,
    },
  };
};

export default function Index({ users }: Props) {
  return (
    <Box p={16}>
      <Breadcrumbs
        as={Link}
        homeHref="/"
        items={[
          {
            href: '/',
            label: 'Users',
            isActive: true,
          },
        ]}
      />

      <Table
        mt={8}
        items={users}
        columns={[
          {
            label: 'Name',
            renderRow({ avatar, name, username }) {
              return (
                <HStack>
                  <AvatarLabel src={avatar} name={name} supportText={`@${username}`} />
                </HStack>
              );
            },
          },
          {
            label: 'Email',
            renderRow({ email }) {
              return <Text>{email}</Text>;
            },
          },
          {
            label: 'Teams',
            renderRow({ teams }) {
              return (
                <HStack>
                  {teams.map((team) => (
                    <Badge key={team} label={team} />
                  ))}
                </HStack>
              );
            },
          },
          {
            label: 'Actions',
            renderRow() {
              return (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    size="md"
                    variant="unstyled"
                    icon={<DotsVerticalIcon w={6} h={6} />}
                  />

                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <DeleteItem />
                  </MenuList>
                </Menu>
              );
            },
          },
        ]}
        renderHeader={
          <Flex>
            <Box>
              <Heading size="header-4">Users</Heading>
              <Text size="paragraph-sm-default" color="neutrals.600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, amet?
              </Text>
            </Box>

            <Box flexGrow={1} />

            <RangeDatePickerDropdown>
              {({ onToggle }) => (
                <Button accent="gray" variant="outline" onClick={onToggle}>
                  Select Dates
                </Button>
              )}
            </RangeDatePickerDropdown>
          </Flex>
        }
        renderFooter={
          <Pagination
            variant="relay"
            count={100}
            page={1}
            pageSize={10}
            sizes={[10, 20, 30]}
            onChange={() => {}}
          />
        }
      />
    </Box>
  );
}

function DeleteItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  return (
    <>
      <MenuItem onClick={onOpen}>Delete</MenuItem>

      <Modal
        icon={<TrashErrorIcon w={10} h={10} />}
        isOpen={isOpen}
        onCancel={onClose}
        onOkay={() => {
          toast.success('User has been deleted');
          onClose();
        }}
        title="Delete User"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nemo?"
      />
    </>
  );
}
