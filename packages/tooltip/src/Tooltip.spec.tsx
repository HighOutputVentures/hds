import { ChakraProvider, Icon } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { Tooltip } from './Tooltip';

describe('Checkbox Component', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Tooltip label="This is a tooltip">
          <Icon />
        </Tooltip>
      </ChakraProvider>,
    );
  });

  it('should toggle tooltip when hover and unhover tooltip trigger', async () => {
    const tooltip_child = screen.getByTestId('hds.tooltip.trigger');

    await act(async () => {
      fireEvent.mouseOver(tooltip_child);
    });

    waitFor(() => {
      const tooltip = screen.getByTestId('hds.tooltip');
      expect(tooltip).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.mouseOver(tooltip_child);
    });

    await waitFor(() => {
      const tooltip = screen.queryByText(/This is a tooltip/);

      expect(tooltip).not.toBeInTheDocument();
    });
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <ChakraProvider>
        <Tooltip label="This is a tooltip">
          <Icon />
        </Tooltip>
      </ChakraProvider>,
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
