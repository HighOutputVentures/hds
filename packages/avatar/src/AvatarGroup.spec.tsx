import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import Avatar from './Avatar';
import AvatarGroup, { AvatarGroupProps } from './AvatarGroup';

jest.mock('@chakra-ui/react', function mockUseBreakpointHook() {
  return {
    ...jest.requireActual('@chakra-ui/react'),
    useBreakpoint() {
      return 'lg';
    },
  };
});

describe('AvatarGroup', () => {
  const renderTestComponent = (options: AvatarGroupProps = {}) => {
    return render(
      <AvatarGroup {...options}>
        <Avatar src="https://i.pravatar.cc/50?u=1" />
        <Avatar src="https://i.pravatar.cc/50?u=2" />
        <Avatar src="https://i.pravatar.cc/50?u=3" />
        <Avatar src="https://i.pravatar.cc/50?u=4" />
        <Avatar src="https://i.pravatar.cc/50?u=5" />
      </AvatarGroup>,
    );
  };

  it('Should render container', () => {
    const { queryByRole } = renderTestComponent({ max: Infinity });
    expect(queryByRole('group', { name: 'Group of users' })).toBeDefined();
  });

  it('Should render avatars', () => {
    const { queryAllByRole } = renderTestComponent({ max: Infinity });
    expect(queryAllByRole('img', { name: 'avatar' })).toHaveLength(5);
  });

  it('Should be able to set max avatars to show', () => {
    const max = 3;
    const { queryAllByRole } = renderTestComponent({ max });
    expect(queryAllByRole('img', { name: 'avatar' })).toHaveLength(max);
  });

  it('Should show excess label', () => {
    const max = 3;
    const { queryByText } = renderTestComponent({ max });
    expect(queryByText('+2')).toBeDefined();
  });

  it('Should be able to toggle add button', () => {
    const { queryByRole } = renderTestComponent({ hasAddButton: true });
    expect(queryByRole('button', { name: 'Add User' })).toBeInTheDocument();
  });

  it('Add button should call callback fn', async () => {
    const onAddButtonClick = jest.fn();
    const { getByRole } = renderTestComponent({ hasAddButton: true, onAddButtonClick });

    fireEvent.click(getByRole('button', { name: 'Add User' }));

    await waitFor(() => {
      expect(onAddButtonClick).toHaveBeenCalled();
    });
  });

  it('Should show tooltip when add button is hovered', async () => {
    const { getByRole, queryByRole } = renderTestComponent({ hasAddButton: true });

    fireEvent.mouseOver(getByRole('button', { name: 'Add User' }));

    await waitFor(() => {
      expect(queryByRole('tooltip', { name: 'Add user' })).toBeDefined();
    });
  });
});
