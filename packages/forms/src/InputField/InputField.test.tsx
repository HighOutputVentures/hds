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
    expect(screen.queryByTestId(':r0:-input-field-group')).toBeDefined();
  });

  it('should render Input', () => {
    expect(screen.queryByPlaceholderText('Input your name')).toBeDefined();
  });

  it("should render 'leftElement'", () => {
    expect(screen.queryByTestId(':r0:-input-field-left-element')).toBeDefined();
  });

  it("should render 'rightElement'", () => {
    expect(
      screen.queryByTestId(':r0:-input-field-right-element')
    ).toBeDefined();
  });
});
