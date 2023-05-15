import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelectField from './MultiSelectField';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  { label: 'Option 5', value: 5 },
];

const selected = [options[0], options[1]];

const onChange = jest.fn();

describe('MultiSelect', () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <MultiSelectField
        label="Multiselect"
        error="This is error"
        value={selected.map((o) => o.value)}
        onChange={onChange}
        options={options}
        __fieldTestId="field"
        __valueTestId={({ value }) => `value.${value}`}
        __optionTestId={({ value }) => `option.${value}`}
      />,
    );
  });

  it('Should render group', () => {
    expect(screen.getByTestId('hds.form-group.group')).toBeInTheDocument();
  });

  it('Should render label', () => {
    expect(screen.getByTestId('hds.form-group.label')).toBeInTheDocument();
  });

  it('Should render error', () => {
    expect(screen.getByTestId('hds.form-group.error')).toBeInTheDocument();
  });

  it('Should render field', () => {
    expect(screen.getByTestId('hds.form-group.error')).toBeInTheDocument();
  });

  it('Should render values', () => {
    for (const { value } of selected) {
      expect(screen.getByTestId(`value.${value}`)).toBeInTheDocument();
    }
  });

  it('Should render options', async () => {
    await userEvent.click(screen.getByTestId('hds.form-group.label'));

    expect(screen.getByTestId('hds.multi-select.menu')).toBeInTheDocument();

    for (const option of options) {
      expect(screen.getByTestId(`option.${option.value}`)).toBeInTheDocument();
    }
  });

  test('Remove selected option', async () => {
    const parent = screen.getByTestId(`value.${selected[0].value}`);
    const unselect = within(parent).getByTestId(
      'hds.multi-select.control.unselect-value',
    );

    await userEvent.click(unselect);

    expect(onChange).toHaveBeenCalledWith([options[1].value]);
  });

  test('Select option', async () => {
    await userEvent.click(screen.getByTestId('hds.form-group.label'));

    expect(screen.getByTestId('hds.multi-select.menu')).toBeInTheDocument();

    const option = screen.getByTestId(`option.${options[2].value}`);
    await userEvent.click(option);

    expect(onChange).toHaveBeenCalled();
  });
});
