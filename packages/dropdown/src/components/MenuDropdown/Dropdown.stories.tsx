import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  ExitIcon,
  SettingIcon,
  UserIcon,
  ZapIcon,
} from '@highoutput/hds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ThemeProvider from '../../../../hds/src/components/ThemeProvider';
import Dropdown, { IMenuItemsGroup, IMenuItemsSingle } from './Dropdown';

const avatar = require('../../../../../assets/avatar.png');

export default {
  title: 'Components/Menu Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const itemsSingle: IMenuItemsSingle['items'] = [
  { label: 'View Profile', command: '⌘K->P', icon: <UserIcon /> },
  { label: 'Settings', command: '⌘S', icon: <SettingIcon /> },
  { label: 'Keyboard shortcuts', command: '?', icon: <ZapIcon /> },
];
const itemsGroup: IMenuItemsGroup['items'] = [
  [
    { label: 'View Profile', command: '⌘K->P', icon: <UserIcon /> },
    { label: 'Settings', command: '⌘S', icon: <SettingIcon /> },
    { label: 'Keyboard shortcuts', command: '?', icon: <ZapIcon /> },
  ],
  [{ label: 'Log out', icon: <ExitIcon />, command: '⌥⇧Q' }],
];

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return (
    <ThemeProvider>
      <Flex
        justify={'space-around'}
        alignItems="start"
        flexDir="row"
        height={'500px'}
      >
        <VStack spacing="20px">
          <Text>Single</Text>
          <Dropdown
            items={itemsSingle}
            renderHeader={
              <HStack p={'16px 12px'}>
                <Avatar src={avatar} width="40px" height="40px">
                  <AvatarBadge boxSize="1em" bg="#00C408" />
                </Avatar>
                <Box>
                  <Text size="label-xs-default" color="neutrals.900" mb="4px">
                    Olivia Rhye
                  </Text>
                  <Text size="label-xs-default" color="neutrals.500">
                    olivia@untitledui.com
                  </Text>
                </Box>
              </HStack>
            }
            group={false}
            hasDivider
          >
            {({ onToggle }) => {
              return <Avatar src={avatar} onClick={onToggle} />;
            }}
          </Dropdown>
        </VStack>
        <VStack spacing="20px">
          <Text>Group</Text>
          <Dropdown
            items={itemsGroup}
            renderHeader={
              <HStack p={'16px 12px'}>
                <Avatar src={avatar} width="40px" height="40px">
                  <AvatarBadge boxSize="1em" bg="#00C408" />
                </Avatar>
                <Box>
                  <Text size="label-xs-default" color="neutrals.900" mb="4px">
                    Olivia Rhye
                  </Text>
                  <Text size="label-xs-default" color="neutrals.500">
                    olivia@untitledui.com
                  </Text>
                </Box>
              </HStack>
            }
            group
          >
            {({ onToggle }) => {
              return <Avatar src={avatar} onClick={onToggle} />;
            }}
          </Dropdown>
        </VStack>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
