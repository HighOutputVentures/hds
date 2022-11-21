import { extendTheme } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme, ThemeProvider } from "../../hds";
import Switch from "./Switch";
import withSwitch from "./withSwitch";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => (
  <ThemeProvider theme={extendTheme(theme, withSwitch())}>
    <Switch />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};
