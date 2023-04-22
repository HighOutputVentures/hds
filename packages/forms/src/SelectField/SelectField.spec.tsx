import { ChakraProvider } from '@chakra-ui/react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import SelectField, { SelectFieldProps } from './SelectField';

const options = [
  {
    label: 'One',
    value: 1,
  },
  {
    label: 'Two',
    value: 2,
  },
  {
    label: 'Three',
    value: 3,
  },
];

describe('SelectField', () => {
  const renderComponent = (props: SelectFieldProps<any> = {}) => {
    return render(
      <ChakraProvider>
        <SelectField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render 'SelectField'", () => {
    const { getByTestId } = renderComponent({ options });

    expect(getByTestId('hds.select-field.input')).toBeInTheDocument();
  });

  it('Should render options', async () => {
    const { getByTestId, getAllByTestId } = renderComponent({ options });

    await act(async () => {
      fireEvent.click(getByTestId('hds.select-field.input'));
    });

    expect(getAllByTestId('hds.select-field.option')).toHaveLength(options.length);
  });

  it("'onChange' event", async () => {
    const onChange = jest.fn();

    const { getByTestId, getAllByTestId } = renderComponent({
      options,
      onChange,
    });

    const field = getByTestId('hds.select-field.input');

    await act(async () => {
      fireEvent.click(field);
    });

    expect(getAllByTestId('hds.select-field.option')).toHaveLength(options.length);

    await act(async () => {
      fireEvent.click(getAllByTestId('hds.select-field.option')[0]);
    });

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(options[0].value);
    });
  });
});
