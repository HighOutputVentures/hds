import { render, screen } from '@testing-library/react';
import React from 'react';
import Notification from './Notification';

import { SearchIcon } from '@chakra-ui/icons';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';

describe('Notification Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Notification
          alertLabel={{ label1: 'Learn More', label2: 'View Changes' }}
          alertLinks={{ link1: '#', link2: '#' }}
          supportingDetail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          title="We’ve just released a new feature"
          isOpen={true}
          type="primary"
          icon={SearchIcon}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const NotificationBox = await screen.findAllByTestId('notification-box');
    expect(NotificationBox).toHaveLength(1);
  });
});
