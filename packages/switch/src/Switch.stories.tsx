import { Box, extendTheme } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme, ThemeProvider } from "@highoutput/hds";
import Switch from "./Switch";
import withSwitch from "./withSwitch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
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
    colorScheme: {
      name: "colorScheme",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "dark",
      control: "radio",
      options: ["dark", "light"],
    },
    checked: {
      name: "checked",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    disabled: {
      name: "disabled",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(theme, withSwitch())}>
      <Box>
        <Switch label="Remember me" helperText="Save my login details for next time." {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  checked: false,
};
