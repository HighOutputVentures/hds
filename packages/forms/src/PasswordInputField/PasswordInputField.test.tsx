import { render, screen } from '@testing-library/react';
import React from 'react';
import PasswordInputField from './PasswordInputField';

describe('PasswordInputField', () => {
  beforeEach(() => {
    render(
      <PasswordInputField
        placeholder={'Password'}
        onChange={jest.fn()}
        onBlur={jest.fn()}
        name={'Password'}
      />
    );
  });

  it('Should render FormControl', () => {
    expect(screen.queryByRole('group', { name: 'Form Group' })).toBeDefined();
  });

  it('should renders InputGroup', () => {
    expect(screen.queryByTestId(':r0:-input-field-group')).toBeDefined();
  });

  it('should renders Input', () => {
    expect(screen.queryByTestId(':r0:-input-field-input')).toBeDefined();
  });

  it("should render 'rightElement'", () => {
    expect(
      screen.queryByTestId(':r0:-input-field-right-element')
    ).toBeDefined();
  });
});
