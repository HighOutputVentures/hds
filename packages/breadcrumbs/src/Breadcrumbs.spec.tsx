import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs Component', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Breadcrumbs
          withAccent
          items={[
            {
              href: '/settings',
              label: 'Settings',
            },
            {
              href: '#',
              label: '...',
              isDisabled: true,
            },
            {
              href: '/settings/teams',
              label: 'Teams',
              isActive: true,
            },
          ]}
        />
      </ChakraProvider>,
    );
  });

  it('should render breadcrumb', async () => {
    const breadcrumb = screen.getByTestId('hds.breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <ChakraProvider>
        <Breadcrumbs
          withAccent
          items={[
            {
              href: '/settings',
              label: 'Settings',
            },
            {
              href: '#',
              label: '...',
              isDisabled: true,
            },
            {
              href: '/settings/teams',
              label: 'Teams',
              isActive: true,
            },
          ]}
        />
      </ChakraProvider>,
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
