import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
  VisuallyHidden,
  chakra,
  useDisclosure,
} from '@highoutput/hds';
import { GetStaticProps } from 'next';
import { withLayout } from '../components/Layout';
import {
  ChevronRightIcon,
  SmartHomeIcon,
  UserCogIcon,
  UserEditIcon,
  UserPlusIcon,
  UserSearchIcon,
  UserXIcon,
} from '../components/icons';
import { users } from '../fixtures';

interface Props {
  users: Array<typeof users[number]>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { users } };
};

function Index({ users }: Props) {
  return (
    <>
      <Breadcrumb separator={<Icon as={ChevronRightIcon} />}>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Icon as={SmartHomeIcon} w={5} h={5} />
            <VisuallyHidden>Home</VisuallyHidden>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Users</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex mt={4} alignItems="center">
        <Box>
          <Heading>Users</Heading>
          <Text size="label-xs" color="neutral.600">
            Mange Users
          </Text>
        </Box>

        <Spacer />

        <InputGroup w="300px" mr={3}>
          <InputLeftElement>
            <Icon as={UserSearchIcon} w={5} h={5} />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>

        <ButtonGroup isAttached variant="outline" colorScheme="gray">
          <CreateUser />
          <IconButton aria-label="" icon={<Icon as={UserSearchIcon} w={5} h={5} />} />
        </ButtonGroup>
      </Flex>

      <Table mt={4}>
        <Thead>
          <Tr>
            <Th>
              <HStack>
                <Checkbox size="sm" isIndeterminate />
                <chakra.span>User</chakra.span>
              </HStack>
            </Th>
            <Th>Email</Th>
            <Th>
              <HStack>
                <chakra.span>Friends</chakra.span>
                <Tooltip label="Need help?" hasArrow>
                  <Icon />
                </Tooltip>
              </HStack>
            </Th>
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
                    <Avatar key={idx} src={`https://i.pravatar.cc/80?u${id}${idx}`} />
                  ))}
                </AvatarGroup>
              </Td>
              <Td>
                <HStack spacing={1}>
                  {teams.map((team, idx) => (
                    <Badge
                      key={`${id}${idx}team`}
                      colorScheme={getBadgeAccentViaTeam(team)}
                      data-indicator
                    >
                      {team}
                    </Badge>
                  ))}
                </HStack>
              </Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    size="md"
                    variant="unstyled"
                    aria-label="Open user menu"
                    icon={<Icon as={UserCogIcon} />}
                    _active={{
                      color: 'primary.700',
                    }}
                  />

                  <MenuList>
                    <MenuItem icon={<Icon as={UserEditIcon} />}>Edit</MenuItem>
                    <MenuItem icon={<Icon as={UserXIcon} />}>Delete</MenuItem>
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

function CreateUser() {
  const disclosure = useDisclosure();

  return (
    <>
      <IconButton
        aria-label=""
        onClick={disclosure.onOpen}
        icon={<Icon as={UserPlusIcon} w={5} h={5} />}
      />

      <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
        <ModalOverlay />
        <ModalContent as={chakra.form}>
          <ModalCloseButton />
          <ModalHeader>
            <Heading size="label-md" fontWeight="medium">
              Create new user
            </Heading>
            <Text mt={1} size="label-xs" color="neutral.600" fontWeight="normal">
              Fill out the form to add new members to your platform.
            </Text>
          </ModalHeader>

          <ModalBody mt={8}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="johndoe" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter mt={6} display="flex" gap={2}>
            <Button w="full" onClick={disclosure.onClose}>
              Cancel
            </Button>
            <Button
              w="full"
              variant="solid"
              colorScheme="primary"
              onClick={disclosure.onClose}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function getBadgeAccentViaTeam(team: String) {
  switch (team.toUpperCase()) {
    case 'QA':
      return 'blue';
    case 'FRONTEND':
      return 'indigo';
    case 'BACKEND':
      return 'purple';
    case 'DEVOPS':
      return 'gray-blue';
    case 'DESIGN':
      return 'rose';
    default:
      return 'gray';
  }
}

export default withLayout(Index);
