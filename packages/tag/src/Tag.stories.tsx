import { VStack } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import AUIcon from "./examples/AUIcon";
import Tag from "./Tag";

const Story: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
};

export default Story;

const Template: ComponentStory<typeof Tag> = (args) => {
  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        <Tag icon={AUIcon} {...args} />
        <Tag avatar="https://i.pravatar.cc/25" hasAvatar {...args} />
        <Tag hasCheckbox {...args} />
        <Tag hasOnlineIndicator {...args} />
        <Tag hasBadge badgeCount={4} {...args} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: "Label",
  isClosable: false,
  ...Default.args,
};
