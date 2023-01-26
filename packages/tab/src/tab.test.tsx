import { TabPanel, TabPanels } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab';

describe('Should render Tab', () => {
  beforeEach(() => {
    render(
      <Tab
        tabLabel={['My details', 'Profile', 'Password', 'Team']}
        tabItems={
          <TabPanels>
            <TabPanel>One</TabPanel>
            <TabPanel>Two</TabPanel>
            <TabPanel>Three</TabPanel>
            <TabPanel>Four</TabPanel>
          </TabPanels>
        }
      />
    );
  });

  it('Should render tab labels', async () => {
    const tabs = await screen.findAllByRole('tab');
    expect(tabs).toHaveLength(4);
  });

  it('Should render the current selected tab', () => {
    const tab = screen.getByRole('tab', { name: /My details/i });
    expect(tab).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Snapshot', () => {
  const component = renderer.create(
    <Tab
      tabLabel={['My details', 'Profile', 'Password', 'Team']}
      tabItems={
        <TabPanels>
          <TabPanel>One</TabPanel>
          <TabPanel>Two</TabPanel>
          <TabPanel>Three</TabPanel>
          <TabPanel>Four</TabPanel>
        </TabPanels>
      }
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});
