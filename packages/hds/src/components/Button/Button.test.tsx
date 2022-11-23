import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import ThemeProvider from '../ThemeProvider';
import Button from './Button';

describe('Button Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Button>Submit</Button>
      </ThemeProvider>
    );
  });

  it('should render button component', async () => {
    const submitButton = await screen.findAllByTestId(':r0:-button');
    expect(submitButton).toHaveLength(1);
  });

  it('should render button children', async () => {
    const submitText = await screen.findByText('Submit');
    expect(submitText.innerHTML).toBe('Submit');
  });
});
