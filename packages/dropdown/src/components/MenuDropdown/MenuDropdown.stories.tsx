import {
  Divider,
  Flex,
  MenuGroup,
  MenuItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
//@ts-ignore
import React from 'react';
import BoxIcon from '../Icon/BoxIcon';
import ExitIcon from '../Icon/ExitIcon';
import HelpIcon from '../Icon/HelpIcon';
import HomeIcon from '../Icon/HomeIcon';
import LayersTwoIcon from '../Icon/LayersTwoIcon';
import MessageSmileIcon from '../Icon/MessageSmileIcon';
import SettingIcon from '../Icon/SettingIcon';
import UserIcon from '../Icon/UserIcon';
import UserPlusIcon from '../Icon/UserPlusIcon';
import UsersIcon from '../Icon/UsersIcon';
import ZapIcon from '../Icon/ZapIcon';

import MenuDropdown from './MenuDropdown';
const avatar = require('../../../../../assets/avatar.png');
export default {
  title: 'Components/Menu Dropdown',
  component: MenuDropdown,
} as ComponentMeta<typeof MenuDropdown>;
const Template: ComponentStory<typeof MenuDropdown> = () => {
  const menuItems = [
    <MenuGroup>
      <MenuItem
        icon={<UserIcon />}
        command="⌘K->P"
        fontSize={'14px'}
        color="neutrals.900"
      >
        View Profile
      </MenuItem>
      <MenuItem
        icon={<SettingIcon />}
        command="⌘S"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Settings
      </MenuItem>

      <MenuItem
        icon={<ZapIcon />}
        command="?"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Keyboard shortcuts
      </MenuItem>
    </MenuGroup>,
    <Divider />,
    <MenuGroup>
      <MenuItem
        icon={<HomeIcon />}
        command="⌘K->C"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Company profile
      </MenuItem>

      <MenuItem
        icon={<UsersIcon />}
        command="⌘K->T"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Team
      </MenuItem>

      <MenuItem
        icon={<UserPlusIcon />}
        command="⌘K->T"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Invite colleagues
      </MenuItem>
    </MenuGroup>,
    <Divider />,
    <MenuGroup>
      <MenuItem
        icon={<LayersTwoIcon />}
        command="⌘K->C"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Changelog
      </MenuItem>
      <MenuItem
        icon={<MessageSmileIcon />}
        command="⌘K->S"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Slack Community
      </MenuItem>
      <MenuItem
        icon={<HelpIcon />}
        command="⌘/"
        fontSize={'14px'}
        color="neutrals.900"
      >
        Support
      </MenuItem>
      <MenuItem
        icon={<BoxIcon />}
        command="⌘A"
        fontSize={'14px'}
        color="neutrals.900"
      >
        API
      </MenuItem>
    </MenuGroup>,
    <Divider />,
    <MenuItem
      icon={<ExitIcon />}
      command="⌥⇧Q"
      fontSize={'14px'}
      color="neutrals.900"
    >
      Log out
    </MenuItem>,
  ];
  return (
    <ThemeProvider>
      <Flex
        justify={'space-around'}
        alignItems="start"
        flexDir="row"
        height={'500px'}
      >
        <VStack spacing="20px">
          <Text fontSize={'18px'} fontWeight={500}>
            Profile dropdown type
          </Text>
          <MenuDropdown
            menuType={'profile'}
            profileUrl={avatar}
            menuHeader={{
              profileUrl: avatar,
              emailAddress: 'olivia@untitledui.com',
              userName: 'Olivia Rhye',
            }}
            menuItems={menuItems}
          />
        </VStack>
        <VStack spacing="20px">
          <Text fontSize={'18px'} fontWeight={500}>
            Kebab dropdown type
          </Text>
          <MenuDropdown
            menuType={'kebab'}
            menuHeader={{
              profileUrl: avatar,
              emailAddress: 'olivia@untitledui.com',
              userName: 'Olivia Rhye',
            }}
            menuItems={menuItems}
          />
        </VStack>
        <VStack spacing="20px">
          <Text fontSize={'18px'} fontWeight={500}>
            Button dropdown type
          </Text>
          <MenuDropdown
            menuType={'button'}
            menuHeader={{
              profileUrl: avatar,
              emailAddress: 'olivia@untitledui.com',
              userName: 'Olivia Rhye',
            }}
            menuButtonText="Account"
            menuItems={menuItems}
          />
        </VStack>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
