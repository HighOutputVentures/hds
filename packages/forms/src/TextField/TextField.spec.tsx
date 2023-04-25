import { ChakraProvider } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { act, fireEvent, render } from '@testing-library/react';
import TextField, { TextFieldProps } from './TextField';

describe('TextField', () => {
  const renderComponent = (props: TextFieldProps = {}) => {
    return render(
      <ChakraProvider>
        <TextField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render 'TextField'", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('hds.text-field.input')).toBeInTheDocument();
  });

  it("'onChange' event", async () => {
    const { getByTestId } = renderComponent();

    const field = getByTestId('hds.text-field.input');
    const value = faker.lorem.word();

    await act(async () => {
      fireEvent.change(field, { target: { value } });
    });

    expect(field).toHaveValue(value);
  });
});
