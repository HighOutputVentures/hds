import { Avatar, Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import Table from "./Table";

export default {
  title: "Components/Table",
  argTypes: {},
} as Meta;

const Template: ComponentStory<typeof Table> = () => {
  return (
    <ChakraProvider>
      <Table
        data={items}
        columns={[
          {
            label: "Name",
            getData(item) {
              return item;
            },
            renderRow(item) {
              return (
                <Flex gap={2}>
                  <Avatar src={item.avatar} name={item.name} />

                  <Box>
                    <Text>{item.name}</Text>
                    <Text>@{item.username}</Text>
                  </Box>
                </Flex>
              );
            },
            checkbox: {
              enabled: true,
              onToggle() {},
            },
          },
        ]}
      />
    </ChakraProvider>
  );
};

const items = new Array(10).fill(null).map(() => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    username: faker.internet.userName(),
    isActive: faker.datatype.boolean(),
    role: faker.name.jobTitle(),
    teams: new Array(
      faker.datatype.number({
        min: 3,
        max: 10,
      }),
    )
      .fill(null)
      .map(() => faker.name.jobTitle()),
  };
});

export const Default = Template.bind({});

Default.args = {};
