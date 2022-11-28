import { Box, Button, Text } from "@chakra-ui/react";
import { useArgs } from "@storybook/addons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Show from "./Show";

export default {
  title: "Utilities/Show",
  component: Show,
} as ComponentMeta<typeof Show>;

const Template: ComponentStory<typeof Show> = (defaultArgs) => {
  const [args, setArgs] = useArgs();

  const toggle = () => {
    setArgs({ ...args, when: !args.when });
  };

  return (
    <Box p={4}>
      <Show {...defaultArgs}>
        <Text>Hello World!!</Text>
      </Show>

      <Button mt={4} onClick={toggle}>
        Toggle
      </Button>
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  when: true,
};
