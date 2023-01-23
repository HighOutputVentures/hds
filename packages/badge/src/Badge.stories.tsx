import { Icon } from "@chakra-ui/icons";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import Badge from "./Badge";
import AUIcon from "./examples/AUIcon";
import ExampleIcon from "./examples/ExampleIcon";

const meta: Meta = {
  title: "Components/Badge/Badge",
  component: Badge,
  argTypes: {
    size: {
      name: "size",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "md",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    accent: {
      name: "accent",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "primary",
      control: "select",
      options: [
        "gray",
        "primary",
        "error",
        "warning",
        "success",
        "blue-gray",
        "blue-light",
        "blue",
        "indigo",
        "purple",
        "pink",
        "rose",
        "orange",
      ],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Badge> = (args) => {
  return (
    <ChakraProvider>
      <VStack align="start" gap={2}>
        <Badge label="Label" size={args.size} accent={args.accent} />
        <Badge label="Label" hasIndicator size={args.size} accent={args.accent} />
        <Badge
          label="Label"
          rightIcon={
            <Icon
              as={ExampleIcon}
              onClick={() => {
                alert("We gotcha 👌");
              }}
            />
          }
          size={args.size}
          accent={args.accent}
        />
        <Badge
          label="Label"
          leftIcon={
            <Icon
              as={ExampleIcon}
              onClick={() => {
                alert("We gotcha 👌");
              }}
            />
          }
          size={args.size}
          accent={args.accent}
        />
        <Badge label="Label" avatar={<Icon as={AUIcon} />} size={args.size} accent={args.accent} />
        <Badge
          label="Label"
          avatar="https://i.pravatar.cc/300"
          size={args.size}
          accent={args.accent}
        />
      </VStack>
    </ChakraProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
