// @ts-nocheck "Bug"

import { VStack } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds";
import { Toast } from "./Toast";

const meta: ComponentMeta<typeof Toast> = {
  title: "Components/Toast",
  argTypes: {},
};

export default meta;

const Template: ComponentStory<typeof Toast> = () => {
  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        <Toast status="success" description="This is a success toast." onClose={noop} />
        <Toast status="error" description="This is an error toast." onClose={noop} />
      </VStack>
    </ThemeProvider>
  );
};

function noop() {}

export const Default = Template.bind({});

Default.args = {};
