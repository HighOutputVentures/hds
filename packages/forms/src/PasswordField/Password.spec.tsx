import { ChakraProvider } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import PasswordField, { PasswordFieldProps } from './PasswordField';

describe('PasswordField', () => {
  const renderComponent = (props: PasswordFieldProps = {}) => {
    return render(
      <ChakraProvider>
        <PasswordField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render 'Password'", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('hds.password-field.input')).toBeInTheDocument();
  });

  it("'onChange' event", async () => {
    const { getByTestId } = renderComponent();

    const field = getByTestId('hds.password-field.input');
    const value = faker.lorem.word();

    await act(async () => {
      fireEvent.change(field, { target: { value } });
    });

    expect(field).toHaveValue(value);
  });

  it('Should render password visibility toggle', () => {
    const { getByTestId } = renderComponent();

    expect(
      getByTestId('hds.password-field.controls.toggle-visibility'),
    ).toBeInTheDocument();
  });

  it('Should be able to show/hide password', async () => {
    const { getByTestId } = renderComponent();

    const toggle = getByTestId('hds.password-field.controls.toggle-visibility');

    expect(getByTestId('hds.password-field.input')).toHaveAttribute('type', 'password');

    await act(async () => {
      fireEvent.click(toggle);
    });

    await waitFor(() => {
      expect(getByTestId('hds.password-field.input')).toHaveAttribute('type', 'text');
    });

    await act(async () => {
      fireEvent.click(toggle);
    });

    await waitFor(() => {
      expect(getByTestId('hds.password-field.input')).toHaveAttribute('type', 'password');
    });
  });
});
