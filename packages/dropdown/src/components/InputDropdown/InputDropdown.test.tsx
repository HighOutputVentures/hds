import { ThemeProvider } from '@highoutput/hds';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import InputDropdown from './InputDropdown';
const OPTIONS = ['user1', 'user2', 'user3', 'user4', 'user5'];

const SELECT_OPTION = Object.entries(OPTIONS).map(([value, label]) => {
  return {
    value,
    label,
  };
});

describe('Input Dropdown Component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  beforeEach(() => {
    render(
      <ThemeProvider>
        <InputDropdown
          label="Users"
          options={SELECT_OPTION}
          __selectTestId={'hds.input.field'}
          __formLabelTestId={'hds.form.control.label'}
          onChangeValue={jest.fn()}
        />
      </ThemeProvider>
    );
  });
  it('Should render Input Dropdown  form container', async () => {
    const formControl = await screen.findAllByTestId('hds.form.control');
    expect(formControl).toHaveLength(1);
  });
  it('Should render Input Dropdown  label', async () => {
    const formControlLabel = await screen.findAllByTestId(
      'hds.form.control.label'
    );
    expect(formControlLabel).toHaveLength(1);
  });
  it('Should render Input Dropdown ', async () => {
    const inputDropdownField = await screen.findAllByRole('combobox', {
      name: 'input-dropdown',
    });

    expect(inputDropdownField).toHaveLength(1);
  });
});
describe('Snapshot', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider>
        <InputDropdown
          label="Users"
          options={SELECT_OPTION}
          onChangeValue={jest.fn()}
        />
      </ThemeProvider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
