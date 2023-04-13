import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { Avatar, AvatarLabel } from "@highoutput/hds-avatar";
import { ExitIcon, SettingIcon, UserIcon, ZapIcon } from "@highoutput/hds-icons";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import Dropdown from "./Dropdown";

const Story: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default Story;

const itemsSingle = [
  { label: "View Profile", command: "⌘K->P", icon: <UserIcon /> },
  { label: "Settings", command: "⌘S", icon: <SettingIcon /> },
  { label: "Keyboard shortcuts", command: "?", icon: <ZapIcon /> },
];

const itemsGroup = [
  [
    {
      label: "View Profile",
      command: "⌘K->P",
      icon: <UserIcon />,
    },
    {
      label: "Settings",
      command: "⌘S",
      icon: <SettingIcon />,
    },
    {
      label: "Keyboard shortcuts",
      command: "?",
      icon: <ZapIcon />,
    },
  ],
  [
    {
      label: "Log out",
      icon: <ExitIcon />,
      command: "⌥⇧Q",
    },
  ],
];

const Template: ComponentStory<typeof Dropdown> = () => {
  return (
    <ThemeProvider>
      <Flex justify={"space-around"} alignItems="start" flexDir="row" height={"500px"}>
        <VStack spacing="20px">
          <Text>Single</Text>

          <Box>
            <Dropdown
              items={itemsSingle}
              renderHeader={
                <AvatarLabel
                  src="https://i.pravatar.cc/300?u=1"
                  name="Olivia Rhye"
                  supportText="olivia@untitledui.com"
                />
              }
            >
              {({ onToggle }) => (
                <Avatar src="https://i.pravatar.cc/300?u=1" onClick={onToggle} />
              )}
            </Dropdown>
          </Box>
        </VStack>

        <VStack spacing="20px">
          <Text>Group</Text>

          <Box>
            <Dropdown
              items={itemsGroup}
              renderHeader={
                <AvatarLabel
                  src="https://i.pravatar.cc/300?u=1"
                  name="Olivia Rhye"
                  supportText="olivia@untitledui.com"
                />
              }
              isGrouped
            >
              {({ onToggle }) => (
                <Avatar src="https://i.pravatar.cc/300?u=1" onClick={onToggle} />
              )}
            </Dropdown>
          </Box>
        </VStack>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
