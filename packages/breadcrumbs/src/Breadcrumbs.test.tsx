import { AttachmentIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Breadcrumbs
          separator={<ChevronRightIcon color="#D6D6D6" />}
          maxLinkControls={2}
          icon={<AttachmentIcon />}
          breadCrumbLinks={[
            { link: '#hello', name: 'Home' },
            { link: '#Settings', name: 'Settings' },
            { link: '#Faqs', name: 'Faqs' },
            { link: '#Logout', name: 'Logout' },
            { link: '#New', name: 'New' },
            { link: '#Create', name: 'Create' },
            { link: '#Contact', name: 'Contact' },
            { link: '#Read', name: 'Read' },
            { link: '#Save', name: 'Save' },
            { link: '#Copy', name: 'Copy' },
          ]}
        />
      </ThemeProvider>
    );
  });

  it('should render breadcrumb', async () => {
    const breadcrumb = screen.getByTestId('hds.breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Breadcrumbs
          separator={<ChevronRightIcon color="#D6D6D6" />}
          maxLinkControls={2}
          icon={<AttachmentIcon />}
          breadCrumbLinks={[
            { link: '#hello', name: 'Home' },
            { link: '#Settings', name: 'Settings' },
            { link: '#Faqs', name: 'Faqs' },
            { link: '#Logout', name: 'Logout' },
            { link: '#New', name: 'New' },
            { link: '#Create', name: 'Create' },
            { link: '#Contact', name: 'Contact' },
            { link: '#Read', name: 'Read' },
            { link: '#Save', name: 'Save' },
            { link: '#Copy', name: 'Copy' },
          ]}
        />
      </ThemeProvider>
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
