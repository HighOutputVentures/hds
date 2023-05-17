import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
];

const onChange = jest.fn();

describe('Select', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Select
          value={options[0].value}
          options={options}
          onChange={onChange}
          __fieldTestId="select"
          __optionTestId={(option) => `option.${option.value}`}
          __optionsTestId="options"
        />
      </ChakraProvider>,
    );
  });

  it('Should render select', () => {
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('Should render options', async () => {
    await userEvent.click(screen.getByTestId('select'));

    expect(screen.getByTestId('options')).toBeInTheDocument();

    for (const option of options) {
      expect(screen.getByTestId(`option.${option.value}`)).toBeInTheDocument();
    }
  });

  test('onChange', async () => {
    await userEvent.click(screen.getByTestId('select'));
    expect(screen.getByTestId('options')).toBeInTheDocument();
    expect(screen.getByTestId(`option.${options[1].value}`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(`option.${options[1].value}`));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(options[1].value);
    });
  });
});
