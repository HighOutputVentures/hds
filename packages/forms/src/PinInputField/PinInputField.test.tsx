import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import React from 'react';

import PinInputField from './PinInputField';

describe('Pin Input Field Component', () => {
  beforeAll(() => {
    render(
      <ThemeProvider>
        <PinInputField
          numberOfFields={6}
          id="otpPin"
          name="otpPin"
          onBlur={jest.fn()}
          onChange={jest.fn()}
        />
      </ThemeProvider>
    );
  });

  it('should render pin input field form container', () => {
    expect(
      screen.queryByTestId(':r1:-form-container-form-control')
    ).toBeDefined();
  });

  it('should render pin input field pin', () => {
    expect(screen.queryAllByTestId(/:r0:-pininput-pin/i)).toHaveLength(6);
  });
});
