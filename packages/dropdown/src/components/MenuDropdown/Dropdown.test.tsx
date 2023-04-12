import { Box, ChakraProvider } from '@chakra-ui/react';
import { SettingIcon, UserIcon, ZapIcon } from '@highoutput/hds-icons';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown, { IMenuItemsSingle } from './Dropdown';
const itemsSingle: IMenuItemsSingle['items'] = [
  { label: 'View Profile', command: '⌘K->P', icon: <UserIcon /> },
  { label: 'Settings', command: '⌘S', icon: <SettingIcon /> },
  { label: 'Keyboard shortcuts', command: '?', icon: <ZapIcon /> },
];
describe('Menu Dropdown Kebab Type Component', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Dropdown items={itemsSingle} group={false} __menuButtonTestId="hds.dropdown">
          {({ onToggle }) => {
            return <Box onClick={onToggle} />;
          }}
        </Dropdown>
      </ChakraProvider>,
    );
  });

  it('Should render menu dropdown', async () => {
    const MenuKebab = await screen.findAllByTestId('hds.dropdown');

    expect(MenuKebab).toHaveLength(1);
  });
});

describe('Snapshot', () => {
  const component = renderer.create(
    <ChakraProvider>
      <Dropdown items={itemsSingle} group={false}>
        {({ onToggle }) => {
          return <Box onClick={onToggle} />;
        }}
      </Dropdown>
    </ChakraProvider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});
