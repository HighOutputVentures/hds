import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import Badge from "./Badge";

const meta: Meta = {
  title: "Components/Badge/Badge",
};

const Template: ComponentStory<typeof Badge> = () => {
  return (
    <ThemeProvider>
      <Badge>Aa</Badge>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default meta;
