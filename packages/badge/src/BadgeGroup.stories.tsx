import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import BadgeGroup from "./BadgeGroup";

const meta: Meta = {
  title: "Components/Badge/BadgeGroup",
};

export default meta;

const Template: ComponentStory<typeof BadgeGroup> = () => {
  return (
    <ThemeProvider>
      <BadgeGroup />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
