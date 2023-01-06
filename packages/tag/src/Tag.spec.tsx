import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import * as React from 'react';
import renderer from 'react-test-renderer';
import AUIcon from './examples/AUIcon';
import Tag from './Tag';

const handleCheck = jest.fn();
const handleClose = jest.fn();

jest.mock('@chakra-ui/react', () => {
  return {
    ...jest.requireActual('@chakra-ui/react'),
    useBreakpoint() {
      return 'lg';
    },
  };
});

describe('Tag', () => {
  beforeEach(() => {
    render(
      <Tag
        label="Tag Label"
        indicator
        icon={AUIcon}
        avatar="https://i.pravatar.cc/25"
        checkbox
        checked
        onCheck={handleCheck}
        badge
        badgeCount={1_000_000}
        closable
        onClose={handleClose}
        __testId="tag"
      />,
    );
  });

  it('Should render tag', () => {
    expect(screen.queryByTestId('tag')).toBeDefined();
  });

  it('Should render correct label', () => {
    expect(screen.queryByRole('contentinfo')).toBeDefined();
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Tag Label');
  });

  it('Should render indicator', () => {
    expect(screen.queryByRole('presentation', { name: 'Green Dot' })).toBeDefined();
  });

  it('Should render icon', () => {
    expect(screen.queryByRole('img', { name: 'Tag Icon' })).toBeDefined();
  });

  it('Should render avatar', () => {
    expect(screen.queryByRole('img', { name: 'Tag Avatar' })).toBeDefined();
  });

  it('Should render badge', () => {
    expect(screen.queryByText('1000000')).toBeInTheDocument();
  });

  it('Should render close button', () => {
    expect(screen.queryByRole('button', { name: 'Close Tag' })).toBeDefined();
  });

  it('Should call onClose callback when close button is clicked', async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Close Tag' }));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });

  it('Should render checkbox', () => {
    expect(screen.queryByRole('checkbox', { name: 'Select Item' })).toBeDefined();
  });

  it('Should be able to toggle checkbox checked', async () => {
    const { getByTestId } = render(
      <Tag label="Isolated Tag Label" checkbox onCheck={handleCheck} __testId="isolated-tag" />,
    );

    const checkbox = within(getByTestId('isolated-tag')).getByRole('checkbox', {
      name: 'Select Item',
    });

    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(handleCheck).toHaveBeenCalledWith(true);
    });
  });

  it('Should call checkbox onChange callback on toggle', async () => {
    fireEvent.click(screen.getByRole('checkbox', { name: 'Select Item' }));

    await waitFor(() => {
      expect(handleCheck).toHaveBeenCalledWith(expect.any(Boolean));
    });
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(
        <Tag
          label="Tag Label"
          indicator
          icon={AUIcon}
          avatar="https://i.pravatar.cc/25"
          checkbox
          checked
          badge
          badgeCount={1_000_000}
          closable
          onCheck={function () {}}
          onClose={function () {}}
        />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Tag
          label="Tag Label"
          indicator
          icon={AUIcon}
          avatar="https://i.pravatar.cc/25"
          checkbox
          checked
          onCheck={function () {}}
          badge
          badgeCount={1_000_000}
          closable
          onClose={function () {}}
        />
      </ThemeProvider>,
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
