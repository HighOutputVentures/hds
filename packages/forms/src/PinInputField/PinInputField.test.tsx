import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import PinInputField from './PinInputField';

describe('Pin Input Field Component', () => {
  beforeEach(() => {
    const { debug } = render(
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

    debug();
  });

  it('should render FormControl', () => {
    expect(screen.queryByRole('group')).toBeDefined();
  });

  it('should render PinInputFields', async () => {
    await waitFor(() => {
      expect(screen.getAllByPlaceholderText('0')).toHaveLength(6);
    });
  });
});
