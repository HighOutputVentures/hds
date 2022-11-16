import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SelectField from './SelectField';

describe('SelectField', () => {
  beforeEach(() => {
    render(
      <SelectField
        id="name"
        name="name"
        placeholder="Input your name"
        options={[{ label: 'test', value: 'test' }]}
      />
    );
  });

  it('should render FormControl', () => {
    expect(screen.queryByRole('group', { name: 'Form Group' })).toBeDefined();
  });

  it('should render Select', () => {
    expect(screen.queryByTestId(':r0:-select-field-select')).toBeDefined();
  });
});
