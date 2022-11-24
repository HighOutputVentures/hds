import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import CogIcon from "./examples/CogIcon";
import RadioGroup from "./RadioGroup";
// @ts-ignore
import { ThemeProvider } from "../../hds/src";

export default {
  title: "Components/RadioGroup",
  argTypes: {
    disabled: {
      name: "disabled",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    size: {
      name: "size",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "md",
      control: "select",
      options: ["sm", "md"],
    },
  },
} as Meta;

const Template: ComponentStory<any> = ({ size, disabled }) => {
  const items = [
    { id: 1, name: "James Bond", work: "Actor" },
    { id: 2, name: "Willam Turner", work: "Pirate" },
  ];

  return (
    <ThemeProvider>
      <VStack align="stretch" spacing={8}>
        <RadioGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
        >
          {({ item, getProps }) => {
            const { container, radio, icon } = getProps({ disabled });

            return (
              <HStack spacing={4} key={item.id} {...container}>
                <Box {...icon}>
                  <Icon as={CogIcon} />
                </Box>

                <Box flexGrow={1}>
                  <Text>{item.name}</Text>
                  <Text fontSize="xs" color="neutrals.600">
                    {item.work}
                  </Text>
                </Box>

                <Box {...radio} />
              </HStack>
            );
          }}
        </RadioGroup>

        <RadioGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
          variant="dot"
        >
          {({ item, getProps }) => {
            const { container, radio, icon } = getProps({ disabled });

            return (
              <HStack spacing={4} key={item.id} {...container}>
                <Box {...icon}>
                  <Icon as={CogIcon} />
                </Box>

                <Box flexGrow={1}>
                  <Text>{item.name}</Text>
                  <Text fontSize="xs" color="neutrals.600">
                    {item.work}
                  </Text>
                </Box>

                <Box {...radio} />
              </HStack>
            );
          }}
        </RadioGroup>

        <RadioGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
          variant="square"
        >
          {({ item, getProps }) => {
            const { container, radio, icon } = getProps({ disabled });

            return (
              <HStack spacing={4} key={item.id} {...container}>
                <Box {...icon}>
                  <Icon as={CogIcon} />
                </Box>

                <Box flexGrow={1}>
                  <Text>{item.name}</Text>
                  <Text fontSize="xs" color="neutrals.600">
                    {item.work}
                  </Text>
                </Box>

                <Box {...radio} />
              </HStack>
            );
          }}
        </RadioGroup>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
