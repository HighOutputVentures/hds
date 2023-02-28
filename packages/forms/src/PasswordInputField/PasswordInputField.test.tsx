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
    expect(screen.queryByTestId('hds.input.group')).toBeDefined();
  });

  it('should renders Input', () => {
    expect(screen.queryByTestId('hds.password.input.field')).toBeDefined();
  });

  it("should render 'rightElement'", () => {
    expect(screen.queryByTestId('hds.input.right.element')).toBeDefined();
  });
});
