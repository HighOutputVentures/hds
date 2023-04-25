import { ChakraProvider } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import MultilineField, { MultilineFieldProps } from './MultilineField';

describe('MultilineField', () => {
  const renderComponent = (props: MultilineFieldProps = {}) => {
    return render(
      <ChakraProvider>
        <MultilineField {...props} />
      </ChakraProvider>,
    );
  };

  it('Should render multiline', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('hds.multiline-field.input')).toBeInTheDocument();
  });

  it("'onChange' event", async () => {
    const { getByTestId } = renderComponent();

    const field = getByTestId('hds.multiline-field.input');
    const value = faker.lorem.word();

    await act(async () => {
      fireEvent.change(field, { target: { value } });
    });

    expect(field).toHaveValue(value);
  });
});
