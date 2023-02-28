import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import InputField from './InputField';

describe('InputField', () => {
  beforeEach(() => {
    render(
      <InputField
        id="name"
        name="name"
        placeholder="Input your name"
        leftIcon={<>left</>}
        rightIcon={<>right</>}
      />
    );
  });

  it('should render FormControl', () => {
    expect(screen.queryByRole('group', { name: 'Form Group' })).toBeDefined();
  });

  it('should render InputField', () => {
    expect(screen.queryByTestId('hds.input.field')).toBeDefined();
  });

  it('should render Input', () => {
    expect(screen.queryByPlaceholderText('Input your name')).toBeDefined();
  });

  it("should render 'leftElement'", () => {
    expect(screen.queryByTestId('hds.input.left.element')).toBeDefined();
  });

  it("should render 'rightElement'", () => {
    expect(screen.queryByTestId('hds.input.right.element')).toBeDefined();
  });
});
