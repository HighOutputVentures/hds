import { VStack } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import AvatarProfile from "./AvatarProfile";

const Story: Meta<typeof AvatarProfile> = {
  title: "Components/Avatar/AvatarProfile",
  component: AvatarProfile,
};

export default Story;

const Template: ComponentStory<typeof AvatarProfile> = (args) => {
  const onClick = function noop() {};

  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        <AvatarProfile
          src="https://i.pravatar.cc/300"
          size={args.size}
          name="John Doe"
          onClick={onClick}
        />
        <AvatarProfile size={args.size} name="John Doe" onClick={onClick} />
        <AvatarProfile size={args.size} onClick={onClick} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
