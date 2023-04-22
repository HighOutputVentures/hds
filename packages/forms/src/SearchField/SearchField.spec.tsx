import { ChakraProvider } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import SearchField, { SearchFieldProps } from './SearchField';

describe('SearchField', () => {
  const renderComponent = (props: SearchFieldProps = {}) => {
    return render(
      <ChakraProvider>
        <SearchField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render 'SearchField'", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('hds.search-field.input')).toBeInTheDocument();
  });

  it('Should render search icon', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('hds.search-field.icon')).toBeInTheDocument();
  });

  it("'onChange' event", async () => {
    const { getByTestId } = renderComponent();

    const field = getByTestId('hds.search-field.input');
    const value = faker.lorem.word();

    await act(async () => {
      fireEvent.change(field, { target: { value } });
    });

    expect(field).toHaveValue(value);
  });
});
