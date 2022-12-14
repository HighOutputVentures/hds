import { render, screen } from '@testing-library/react';
import React from 'react';
import Alert from './Alert';

import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';

describe('Alert Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Alert
          alertLabel={['Learn more', 'View Changes']}
          alertLinks={['#', '#']}
          status="default"
          supportingDetail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          title="We’ve just released a new feature"
          isOpen={true}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const AlertBox = await screen.findAllByTestId('alert-box');
    expect(AlertBox).toHaveLength(1);
  });
});
