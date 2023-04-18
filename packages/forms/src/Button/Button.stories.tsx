import { Icon, VStack } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import Button from "./Button";
import PlaceholderIcon from "./examples/PlaceholderIcon";

const Story: Meta<typeof Button> = {
  title: "Components/Button/Button",
  component: Button,
};

export default Story;

const Template: ComponentStory<typeof Button> = (args) => {
  const isGrayAccent = args.accent === "gray";

  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        {!isGrayAccent && (
          <Button variant="solid" {...args}>
            Button
          </Button>
        )}

        <Button variant="outline" {...args}>
          Button
        </Button>

        {!isGrayAccent && (
          <Button variant="subtle" {...args}>
            Button
          </Button>
        )}

        <Button variant="ghost" {...args}>
          Button
        </Button>

        <Button variant="link" {...args}>
          Button
        </Button>

        <Button variant="unstyled" {...args}>
          Button
        </Button>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: "md",
  width: "150px",
  accent: "primary",
  isActive: false,
  isLoading: false,
  isDisabled: false,
  forceAccent: false,
  leftIcon: <Icon as={PlaceholderIcon} />,
  rightIcon: <Icon as={PlaceholderIcon} />,
};
