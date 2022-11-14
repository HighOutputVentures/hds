import { ThemeProvider } from '@highoutput/hds';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import React from 'react';
import PasswordInputField from './PasswordInputField';

describe('Password Input Field Component', () => {
  beforeAll(() => {
    render(
      <ThemeProvider>
        <PasswordInputField
          placeholder={'Password'}
          onChange={jest.fn()}
          onBlur={jest.fn()}
          name={'Password'}
        />
      </ThemeProvider>
    );
  });

  it('Should render FormControl', async () => {
    expect(screen.queryByRole('group')).toBeDefined();
  });

  it('should render InputGroup', async () => {
    expect(screen.queryByTestId(':r0:-input-field-group')).toBeDefined();
  });

  it('should render Input', async () => {
    expect(screen.queryByTestId(':r0:-input-field-input')).toBeDefined();
  });

  it('should render rightElement', async () => {
    expect(
      screen.queryByTestId(':r0:-input-field-right-element')
    ).toBeDefined();
  });
});
