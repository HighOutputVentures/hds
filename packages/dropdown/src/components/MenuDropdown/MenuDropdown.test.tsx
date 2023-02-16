import { RepeatIcon } from '@chakra-ui/icons';
import { Menu, MenuItem } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import MenuDropdown from './MenuDropdown';

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
          menuItems={
            <Menu>
              <MenuItem
                icon={<RepeatIcon />}
                command="⌘⇧N"
                fontSize={'14px'}
                color="neutrals.900"
              >
                Open Closed Tab
              </MenuItem>
            </Menu>
          }
          menuType="kebab"
        />
      </ThemeProvider>
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('hds.menu.kebab');

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
          menuItems={
            <Menu>
              <MenuItem
                icon={<RepeatIcon />}
                command="⌘⇧N"
                fontSize={'14px'}
                color="neutrals.900"
              >
                Open Closed Tab
              </MenuItem>
            </Menu>
          }
          menuType="button"
          menuButtonText="Account"
        />
      </ThemeProvider>
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('hds.menu.button');

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
          menuItems={
            <Menu>
              <MenuItem
                icon={<RepeatIcon />}
                command="⌘⇧N"
                fontSize={'14px'}
                color="neutrals.900"
              >
                Open Closed Tab
              </MenuItem>
            </Menu>
          }
          menuType="profile"
          profileUrl=""
        />
      </ThemeProvider>
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('hds.menu.profile');

    expect(MenuKebab).toHaveLength(1);
  });
});

describe('Snapshot', () => {
  const component = renderer.create(
    <ThemeProvider>
      <MenuDropdown
        menuHeader={{
          profileUrl: '',
          emailAddress: 'olivia@untitledui.com',
          userName: 'Olivia Rhye',
        }}
        menuItems={
          <Menu>
            <MenuItem
              icon={<RepeatIcon />}
              command="⌘⇧N"
              fontSize={'14px'}
              color="neutrals.900"
            >
              Open Closed Tab
            </MenuItem>
          </Menu>
        }
        menuType="profile"
        profileUrl=""
      />
    </ThemeProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});
