import { ChevronRightIcon } from '@chakra-ui/icons';
import { faker } from '@faker-js/faker';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VisuallyHidden,
  chakra,
} from '@highoutput/hds';
import { DotsVerticalIcon, HomeIcon } from '@highoutput/hds-icons';
import { GetServerSideProps } from 'next';
import { withLayout } from '../components/Layout';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  teams: string[];
  isVerified: boolean;
}

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

interface Props {
  users: User[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = new Array(5).fill(null).map((_) => mockUser());

  return { props: { users } };
};

function Index({ users }: Props) {
  return (
    <>
      <Breadcrumb separator={<ChevronRightIcon w={4} h={4} />}>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <HomeIcon />
            <VisuallyHidden>Home</VisuallyHidden>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Users</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Table mt={8}>
        <Thead>
          <Tr>
            <Th>
              <HStack>
                <Checkbox size="sm" isIndeterminate />
                <chakra.span>User</chakra.span>
              </HStack>
            </Th>
            <Th>Email</Th>
            <Th>Besties</Th>
            <Th>Teams</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {users.map(({ id, name, avatar, username, email, teams }, idx) => (
            <Tr key={id}>
              <Td>
                <Flex alignItems="center">
                  <Checkbox size="sm" isChecked={idx % 2 === 0} />
                  <Avatar mr={1} ml={2} size="sm" src={avatar} name={name} />
                  <Box>
                    <Heading
                      size="paragraph-sm"
                      fontWeight="medium"
                      lineHeight="none"
                      color="neutral.800"
                    >
                      {name}
                    </Heading>
                    <Text color="neutral.500" size="label-xxs" lineHeight="short">
                      @{username}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td>{email}</Td>
              <Td>
                <AvatarGroup size="sm" max={5}>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <Avatar src={`https://i.pravatar.cc/150?u=${idx}`} />
                  ))}
                </AvatarGroup>
              </Td>
              <Td>
                <HStack>
                  {teams.map((team, idx) => (
                    <Badge key={`${id}${idx}team`}>{team}</Badge>
                  ))}
                </HStack>
              </Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    size="md"
                    variant="unstyled"
                    icon={<DotsVerticalIcon w={5} h={5} />}
                  />

                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default withLayout(Index);
