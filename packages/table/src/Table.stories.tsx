import {
  Avatar,
  Badge,
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  Icon,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { MenuDropdown } from "~/dropdown";
import { ThemeProvider } from "~/hds";
import { DotsVerticalIcon } from "~/icons";
import { Pagination } from "~/pagination";
import Table, { TableProps } from "./Table";

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

const items: TUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@dummy.bla",
    avatar: "",
    username: "johndoe",
    isActive: true,
    role: "Web Developer",
    teams: ["Design", "Product", "Marketing"],
  },
  {
    id: "2",
    name: "Will Smith",
    email: "willsmith@domain.xyz",
    avatar: "",
    username: "willsmith69",
    isActive: true,
    role: "Actor",
    teams: ["Design", "Product", "Marketing"],
  },
  {
    id: "3",
    name: "Mary Doe",
    email: "marydoe@dummy.bla",
    avatar: "",
    username: "marydoe1@hom.e",
    isActive: true,
    role: "House Wife",
    teams: ["Design", "Product", "Marketing"],
  },
  {
    id: "3",
    name: "Peter Parker",
    email: "spiderman@marvel.avngr",
    avatar: "",
    username: "friendlyneighbor@gmai.l",
    isActive: true,
    role: "Hero",
    teams: ["Design", "Product", "Marketing"],
  },
];

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  argTypes: {},
};

export default meta;

const Template: ComponentStory<(props: TableProps<TUser[]>) => JSX.Element> = (args) => {
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

      <chakra.button display="flex">
        <Icon as={DotsVerticalIcon} w="20px" h="20px" color="#A3A3A3" />
      </chakra.button>
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
  items,
  columns: [
    {
      label: "Name",
      width: "300px",
      renderRow({ name, avatar, username }) {
        return (
          <Flex alignItems="center" gap="12px">
            <Avatar src={avatar} name={name} size="sm" width="40px" height="40px" />
            <Box>
              <Text color="#0F0F0F" fontWeight="medium">
                {name}
              </Text>
              <Text>@{username.toLowerCase().replace(/[_.]/g, "")}</Text>
            </Box>
          </Flex>
        );
      },
      onCheck(/* { isChecked, item } */) {},
      onCheckAll(/* { isChecked, selected } */) {},
      defaultChecked() {
        return false;
      },
    },
    {
      label: "Status",
      width: "120px",
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
            <Text color="#027A48">{isActive ? "Active" : "Inactive"}</Text>
          </Badge>
        );
      },
      onSort(/* { direction } */) {},
    },
    {
      label: "Role",
      width: "175px",
      renderRow({ role }) {
        return role;
      },
      tooltip: "Example tooltip",
    },
    {
      label: "Email address",
      width: "225px",
      renderRow({ email }) {
        return email.toLowerCase().replace(/[_.]/g, "");
      },
    },
    {
      label: "Team",
      width: "290px",
      renderRow({ teams }) {
        const scheme = [
          { bgColor: "#EDE8FC", color: "#8A68EF" },
          { bgColor: "#E8F3FC", color: "#295580" },
          { bgColor: "#FCEFD4", color: "#CC8900" },
          { bgColor: "#F0F0F0", color: "#525252" },
        ];

        return (
          <HStack>
            {[...teams, "+4"].map((team, idx) => (
              <Badge
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
      label: "",
      renderRow() {
        return (
          <MenuDropdown
            menuType="kebab"
            menuItems={
              <>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
              </>
            }
          ></MenuDropdown>
        );
      },
    },
  ],
  renderHeader: <Header />,
  renderFooter: <Footer />,
};
