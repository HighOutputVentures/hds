import { Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import { Avatar, AvatarLabel } from '@highoutput/hds-avatar';
import { ExitIcon, SettingIcon, UserIcon, ZapIcon } from '@highoutput/hds-icons';
import { ComponentStory, Meta } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from '../src';

const Story: Meta = {
  title: 'Components/Menu',
};

export default Story;

const items1 = [
  {
    label: 'View Profile',
    command: '⌘K->P',
    icon: <UserIcon />,
  },
  {
    label: 'Settings',
    command: '⌘S',
    icon: <SettingIcon />,
  },
  {
    label: 'Keyboard shortcuts',
    command: '?',
    icon: <ZapIcon />,
  },
];

const items2 = [
  {
    label: 'Log out',
    icon: <ExitIcon />,
    command: '⌥⇧Q',
    onClick() {
      alert('Wiw');
    },
  },
];

const Template: ComponentStory<any> = () => {
  return (
    <ThemeProvider>
      <Box h="400px">
        <Menu>
          <MenuButton as={Avatar} src="items" />

          <MenuList>
            <MenuItem>
              <AvatarLabel
                src="https://i.pravatar.cc/300"
                name="Olivia Rhye"
                supportText="olivia@untitledui.com"
              />
            </MenuItem>

            <MenuDivider />

            {items1.map((item) => (
              <MenuItem icon={item.icon} command={item.command}>
                {item.label}
              </MenuItem>
            ))}

            <MenuDivider />

            {items2.map((item) => (
              <MenuItem icon={item.icon} command={item.command}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
