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
  VStack,
} from '@highoutput/hds';
import { AvatarLabel } from '@highoutput/hds-avatar';
import { Badge } from '@highoutput/hds-badge';
import { Breadcrumbs } from '@highoutput/hds-breadcrumbs';
import { DatePickerInput, RangeDatePickerDropdown } from '@highoutput/hds-date-picker';
import {
  Button,
  IconButton,
  PasswordField,
  SelectField,
  TextField,
} from '@highoutput/hds-forms';
import { DotsVerticalIcon, TrashErrorIcon } from '@highoutput/hds-icons';
import { Modal } from '@highoutput/hds-modal';
import { Pagination } from '@highoutput/hds-pagination';
import { Table } from '@highoutput/hds-table';
import { useToast } from '@highoutput/hds-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import AddIcon from '../components/AddIcon';
import { withLayout } from '../components/Layout';

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
  const users = new Array(3).fill(null).map((_) => {
    return mockUser();
  });

  return {
    props: {
      users,
    },
  };
};

function Index({ users }: Props) {
  return (
    <>
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
            onCheck() {},
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

            <HStack spacing={3}>
              <RangeDatePickerDropdown>
                {({ onToggle }) => (
                  <Button accent="gray" variant="outline" onClick={onToggle}>
                    Select Dates
                  </Button>
                )}
              </RangeDatePickerDropdown>

              <CreateUser />
            </HStack>
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
    </>
  );
}

const schema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.string().oneOf(['male', 'female']).required(),
});

function CreateUser() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, control, formState, reset, handleSubmit } = useForm<
    yup.InferType<typeof schema>
  >({
    shouldFocusError: true,
    shouldUnregister: true,
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      username: '',
      password: '',
      dateOfBirth: '',
      gender: 'male',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    toast.success('New user has been added');
    onClose();
    reset();
  });

  return (
    <>
      <Button onClick={onOpen}>Create User</Button>

      <Modal
        isOpen={isOpen}
        onCancel={onClose}
        icon={<AddIcon />}
        title="Add new user"
        message="Fill out the form to add new members to your platform."
        okayButtonLabel="Continue"
        onOkay={onSubmit}
        isLoading={formState.isSubmitting}
        width="475px"
        padding="12px"
      >
        <VStack spacing={4} pt={4}>
          <TextField
            label="Name"
            placeholder="Name"
            error={formState.errors.name?.message}
            {...register('name')}
          />
          <TextField
            label="Username"
            placeholder="Username"
            error={formState.errors.username?.message}
            {...register('username')}
          />
          <PasswordField
            label="Password"
            placeholder="Password"
            error={formState.errors.password?.message}
            {...register('password')}
          />
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field, fieldState }) => (
              <DatePickerInput
                error={fieldState.error?.message}
                label="Birthday"
                placeholder="Birthday"
                value={field.value ? new Date(field.value) : undefined}
                onChange={(newValue) =>
                  field.onChange({
                    target: {
                      value: newValue.toISOString(),
                    },
                  })
                }
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field, fieldState }) => (
              <SelectField
                value={field.value}
                error={fieldState.error?.message}
                label="Gender"
                placeholder="Gender"
                options={[
                  {
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    label: 'Female',
                    value: 'female',
                  },
                ]}
                onChange={(newValue) => {
                  field.onChange({
                    target: {
                      value: newValue,
                    },
                  });
                }}
              />
            )}
          />
        </VStack>
      </Modal>
    </>
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

export default withLayout(Index);
