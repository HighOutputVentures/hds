import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import React from 'react';
import InputField from './InputField';

describe('Input Field Component', () => {
  beforeAll(() => {
    render(
      <ThemeProvider>
        <InputField
          id="name"
          name="name"
          placeholder="Input your name"
          leftIcon={<>left</>}
          rightIcon={<>right</>}
        />
      </ThemeProvider>
    );
  });

  it('should render FormControl', async () => {
    expect(screen.queryByRole('group')).toBeDefined();
  });

  it('should render InputGroup', () => {
    expect(screen.queryByTestId(':r0:-input-field-group')).toBeDefined();
  });

  it('should render InputField', () => {
    expect(screen.queryByTestId(':r0:-input-field-input')).toBeDefined();
  });

  it('should render leftElement', () => {
    expect(screen.queryByTestId(':r0:-input-field-left-element')).toBeDefined();
  });

  it('should render rightElement', () => {
    expect(
      screen.queryByTestId(':r0:-input-field-right-element')
    ).toBeDefined();
  });
});
