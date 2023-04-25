import { faker } from '@faker-js/faker';
import { ThemeProvider } from '@highoutput/hds';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberField from './NumberField';

const mockedOnChange = jest.fn();

describe('NumberField', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <NumberField onChange={mockedOnChange} />
      </ThemeProvider>,
    );
  });

  it('Should render field', () => {
    expect(screen.getByTestId('hds.number-field.input')).toBeInTheDocument();
  });

  it('Should render increment control', () => {
    expect(screen.getByTestId('hds.number-field.controls.increment')).toBeInTheDocument();
  });

  it('Should render decrement control', () => {
    expect(screen.getByTestId('hds.number-field.controls.decrement')).toBeInTheDocument();
  });

  test("'onChange'", async () => {
    const input = screen.getByTestId('hds.number-field.input');
    const incr = screen.getByTestId('hds.number-field.controls.increment');
    const decr = screen.getByTestId('hds.number-field.controls.decrement');

    expect(input).toBeInTheDocument();
    expect(incr).toBeInTheDocument();
    expect(decr).toBeInTheDocument();

    const randomNumber = faker.datatype.number({ min: 1, max: 5, precision: 1 });

    await userEvent.clear(input);
    await userEvent.type(input, randomNumber.toString());

    await waitFor(() => {
      expect(mockedOnChange).toHaveBeenCalledWith(randomNumber.toString(), randomNumber);
    });

    await userEvent.click(incr);

    const incredValue = randomNumber + 1;

    await waitFor(() => {
      expect(mockedOnChange).toHaveBeenCalledWith(incredValue.toString(), incredValue);
    });

    await userEvent.click(decr);
    await userEvent.click(decr);

    const decredValue = incredValue - 2;

    await waitFor(() => {
      expect(mockedOnChange).toHaveBeenCalledWith(decredValue.toString(), decredValue);
    });
  });
});
