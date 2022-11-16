import { extendTheme, HStack } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { theme, ThemeProvider } from "../../hds/src";
import Tag from "./Tag";
import withTag from "./withTag";

export default {
  title: "Components/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withTag())}>
      <HStack spacing={4}>
        <Tag size="sm" label="Label" indicator closable onClose={() => {}} />
        <Tag size="md" label="Label" indicator closable onClose={() => {}} />
        <Tag size="lg" label="Label" indicator closable onClose={() => {}} />
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
