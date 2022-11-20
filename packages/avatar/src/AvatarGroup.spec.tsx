import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
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

  it.skip('Should render avatars', () => {
    const { debug } = renderTestComponent({ max: 50 });

    debug();
  });

  it.skip('Should be able to set max avatars to show', () => {
    const { debug } = renderTestComponent({ max: 3 });

    debug();
  });

  it.skip('Should show excess label', () => {
    const { debug } = renderTestComponent({ max: 3 });

    debug();
  });

  it.skip('Should be able to toggle add button', () => {
    const { debug } = renderTestComponent({ hasAddButton: true });

    debug();
  });

  it.skip('Add button should call callback fn', () => {
    const onAddButtonClick = jest.fn();

    const { debug } = renderTestComponent({ hasAddButton: true, onAddButtonClick });

    debug();
  });

  it.skip('Should show tooltip when add button is hovered', () => {
    const { debug } = renderTestComponent({ hasAddButton: true });

    debug();
  });
});
