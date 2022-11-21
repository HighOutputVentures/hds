import { Box, extendTheme } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme, ThemeProvider } from "../../hds";
import Switch from "./Switch";
import withSwitch from "./withSwitch";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(theme, withSwitch())}>
      <Box>
        <Switch
          label="Remember me"
          helperText="Save my login details for next time."
          value="on"
          {...args}
        />

        <Switch
          mt={4}
          label="Remember me"
          helperText="Save my login details for next time."
          {...args}
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: "md",
};
