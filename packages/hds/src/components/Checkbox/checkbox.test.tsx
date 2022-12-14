import React from 'react';
import ThemeProvider from '../ThemeProvider';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Checkbox from './checkbox';

const handleCheck = jest.fn();

describe('Checkbox Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Checkbox
          type="checkboxType"
          checkbox_icon="checkIcon"
          onCheck={handleCheck}
          __testId="checkbox-test"
          label="Label"
          helperMsg="this is a hint to help user"
        />
      </ThemeProvider>
    );
  });
  it('Should render checkbox', async () => {
    expect(screen.getAllByTestId('checkbox-test')).toBeDefined();
  });

  it('Should toggle checkbox checked', () => {
    const checkbox = within(screen.getByTestId('checkbox-test')).getByRole(
      'checkbox'
    );

    fireEvent.click(checkbox);

    expect(handleCheck).toHaveBeenCalledWith(true);
  });

  it('Should render helper message of checkbox', () => {
    expect(screen.getByText('this is a hint to help user')).toBeInTheDocument();
  });

  it('Should render label of checkbox', () => {
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
