import { render, screen } from '@testing-library/react';
import React from 'react';
import MenuDropdown from './MenuDropdown';

import { RepeatIcon } from '@chakra-ui/icons';
import { MenuItem } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';

describe('Menu Dropdown Kebab Type Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <MenuDropdown
          menuHeader={{
            profileUrl: '',
            emailAddress: 'olivia@untitledui.com',
            userName: 'Olivia Rhye',
          }}
          menuItems={[
            <MenuItem
              icon={<RepeatIcon />}
              command="⌘⇧N"
              fontSize={'14px'}
              color="neutrals.900"
            >
              Open Closed Tab
            </MenuItem>,
          ]}
          menuType="kebab"
        />
      </ThemeProvider>
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('menu-kebab');

    expect(MenuKebab).toHaveLength(1);
  });
});
describe('Menu Dropdown Button Type Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <MenuDropdown
          menuHeader={{
            profileUrl: '',
            emailAddress: 'olivia@untitledui.com',
            userName: 'Olivia Rhye',
          }}
          menuItems={[
            <MenuItem
              icon={<RepeatIcon />}
              command="⌘⇧N"
              fontSize={'14px'}
              color="neutrals.900"
            >
              Open Closed Tab
            </MenuItem>,
          ]}
          menuType="button"
          menuButtonText="Account"
        />
      </ThemeProvider>
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('menu-button');

    expect(MenuKebab).toHaveLength(1);
  });
});
describe('Menu Dropdown Profile Type Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <MenuDropdown
          menuHeader={{
            profileUrl: '',
            emailAddress: 'olivia@untitledui.com',
            userName: 'Olivia Rhye',
          }}
          menuItems={[
            <MenuItem
              icon={<RepeatIcon />}
              command="⌘⇧N"
              fontSize={'14px'}
              color="neutrals.900"
            >
              Open Closed Tab
            </MenuItem>,
          ]}
          menuType="profile"
          profileUrl=""
        />
      </ThemeProvider>
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('menu-profile');

    expect(MenuKebab).toHaveLength(1);
  });
});
