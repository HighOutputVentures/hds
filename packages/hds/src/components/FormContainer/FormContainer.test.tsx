import { Input } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import React from 'react';
import ThemeProvider from '../ThemeProvider';
import FormContainer from './FormContainer';

describe('Form Container Component', () => {
  beforeAll(() => {
    render(
      <ThemeProvider>
        <FormContainer
          id="test"
          label="Name"
          errorMsg="Error Message"
          children={<Input role="textbox" />}
        />
      </ThemeProvider>
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

  it('should render child Input', () => {
    expect(screen.queryByRole('textbox')).toBeDefined();
  });
});
