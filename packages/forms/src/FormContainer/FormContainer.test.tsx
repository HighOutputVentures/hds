import { Input } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import React from 'react';

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

  it('should renders form container form control', () => {
    expect(screen.queryByRole('group')).toBeDefined();
  });

  it('should renders form container form label', () => {
    expect(screen.queryByText('Name')).toBeDefined();
  });

  it('should renders form container form error message', () => {
    expect(screen.queryByText('Error Message')).toBeDefined();
  });

  it('should renders form container children react node', () => {
    expect(screen.queryByRole('textbox')).toBeDefined();
  });
});
