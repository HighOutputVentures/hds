import { Input } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import FormContainer from './FormContainer';

describe('FormContainer', () => {
  beforeEach(() => {
    render(
      <FormContainer
        id="test"
        label="Name"
        errorMsg="Error Message"
        children={<Input role="checkbox" aria-label="Enter text" />}
      />
    );
  });

  it('should render FormControl', () => {
    expect(screen.queryByRole('group')).toBeDefined();
  });

  it('should render FormLabel', () => {
    expect(screen.queryByText('Name')).toBeDefined();
  });

  it('should render FormErrorMessage', () => {
    expect(screen.queryByText('Error Message')).toBeDefined();
  });

  it('should render Input', () => {
    expect(
      screen.queryByRole('checkbox', { name: 'Enter text' })
    ).toBeDefined();
  });
});
