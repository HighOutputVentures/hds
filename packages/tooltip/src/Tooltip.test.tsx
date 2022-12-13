import { Icon } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Tooltip from './Tooltip';

describe('Checkbox Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Tooltip label="This is a tooltip">
          <Icon />
        </Tooltip>
      </ThemeProvider>
    );
  });

  it('should toggle tooltip when hover and unhover tooltip trigger', async () => {
    const tooltip_child = screen.getByTestId('tooltip-trigger');

    userEvent.hover(tooltip_child);

    waitFor(() => {
      const tooltip = screen.getByTestId('tooltip');
      expect(tooltip).toBeInTheDocument();
    });

    userEvent.unhover(tooltip_child);

    await waitFor(() => {
      const tooltip = screen.queryByText(/This is a tooltip/);

      expect(tooltip).not.toBeInTheDocument();
    });
  });
});
