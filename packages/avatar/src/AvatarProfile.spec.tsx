// No need to do lots of tests here
// This just calls avatar underneath
// thus checking if avatar is rendered would be enough

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import * as React from 'react';
import AvatarProfile from './AvatarProfile';

jest.mock('@chakra-ui/react', function mockUseBreakpointHook() {
  return {
    ...jest.requireActual('@chakra-ui/react'),
    useBreakpoint() {
      return 'lg';
    },
  };
});

describe('AvatarProfile', () => {
  it("Should render just like regular 'Avatar'", () => {
    const { queryByRole } = render(<AvatarProfile src="" name="John Doe" />);

    expect(queryByRole('img', { name: 'avatar' })).toBeDefined();
  });
});
