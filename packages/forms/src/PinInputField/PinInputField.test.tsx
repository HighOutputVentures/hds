import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import PinInputField from './PinInputField';

describe('PinInputField', () => {
  beforeEach(() => {
    render(
      <PinInputField
        numberOfFields={6}
        id="otpPin"
        name="otpPin"
        onBlur={jest.fn()}
        onChange={jest.fn()}
      />
    );
  });

  it('should render FormControl', () => {
    expect(screen.queryByRole('group', { name: 'Form Group' })).toBeDefined();
  });

  it('should render PinInputField', async () => {
    await waitFor(() => {
      expect(screen.queryAllByPlaceholderText('0')).toHaveLength(6);
    });
  });
});
