import { Icon } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
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
    const tooltip_child = screen.getByTestId('hds.tooltip-trigger');

    userEvent.hover(tooltip_child);

    waitFor(() => {
      const tooltip = screen.getByTestId('hds.tooltip');
      expect(tooltip).toBeInTheDocument();
    });

    userEvent.unhover(tooltip_child);

    await waitFor(() => {
      const tooltip = screen.queryByText(/This is a tooltip/);

      expect(tooltip).not.toBeInTheDocument();
    });
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Tooltip label="This is a tooltip">
          <Icon />
        </Tooltip>
      </ThemeProvider>
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
