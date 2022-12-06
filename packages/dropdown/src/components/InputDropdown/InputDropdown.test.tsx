import { render, screen } from '@testing-library/react';
import React from 'react';
import InputDropdown from './InputDropdown';

import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';

const OPTIONS = ['user1', 'user2', 'user3', 'user4', 'user5'];

const SELECT_OPTION = Object.entries(OPTIONS).map(([value, label]) => {
  return {
    value,
    label,
  };
});

describe('Input Dropdown Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <InputDropdown
          label="Users"
          options={SELECT_OPTION}
          onChangeValue={jest.fn()}
        />
      </ThemeProvider>
    );
  });

  it('Should render Input Dropdown  form container', async () => {
    const formControl = await screen.findAllByTestId(
      ':r1:-form-container-form-control'
    );
    expect(formControl).toHaveLength(1);
  });
  it('Should render Input Dropdown  label', async () => {
    const formControlLabel = await screen.findAllByTestId(
      ':r4:-form-container-label'
    );
    expect(formControlLabel).toHaveLength(1);
  });
  it('Should render Input Dropdown ', async () => {
    const InputDropdown = await screen.findAllByRole('combobox', {
      name: 'input-dropdown',
    });

    expect(InputDropdown).toHaveLength(1);
  });
});
