import { ChakraProvider } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import { OtpLoginForm } from './OtpLoginForm';

const onSubmit1 = jest.fn();
const onSubmit2 = jest.fn();

const input1 = {
  emailAddress: faker.internet.email(),
};

const input2 = {
  otp: '1234',
};

describe('OtpLoginForm (step 1)', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <OtpLoginForm onSubmit={onSubmit1} />
      </ChakraProvider>,
    );
  });

  it('Should render username field', () => {
    expect(screen.getByTestId('hds.otp-login.input.email')).toBeInTheDocument();
  });

  it('Should render button', () => {
    expect(screen.getByTestId('hds.otp-login.submit-button')).toBeInTheDocument();
  });

  it('Should validate fields', async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId('hds.otp-login.submit-button'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('hds.otp-login.input.email')).toHaveAttribute(
        'aria-invalid',
      );
    });
  });

  test("'onSubmit'", async () => {
    await act(async () => {
      fireEvent.change(screen.getByTestId('hds.otp-login.input.email'), {
        target: {
          value: input1.emailAddress,
        },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId('hds.otp-login.submit-button'));
    });

    await waitFor(() => {
      expect(onSubmit1).toHaveBeenCalledWith(input1, expect.any(Object));
    });
  });
});

describe('OtpLoginForm (step 2)', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <OtpLoginForm step={2} otp={{ fieldCount: 4 }} onSubmit={onSubmit2} />
      </ChakraProvider>,
    );
  });

  it('Should render field', () => {
    expect(screen.getAllByTestId('hds.otp-login.input.otp')).toHaveLength(4);
  });

  it('Should render button', () => {
    expect(screen.getByTestId('hds.otp-login.submit-button')).toBeInTheDocument();
  });

  it('Should validate fields', async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId('hds.otp-login.submit-button'));
    });

    const fields = screen.getAllByTestId('hds.otp-login.input.otp');

    for (const field of fields) {
      await waitFor(() => {
        expect(field).toHaveAttribute('data-invalid');
      });
    }
  });

  test.skip("'onSubmit'", async () => {
    const fields = screen.getAllByTestId('hds.otp-login.input.otp');

    expect(fields).toHaveLength(4);

    await act(async () => {
      fireEvent.change(fields[0], { target: { value: '1' } });
      fireEvent.change(fields[1], { target: { value: '2' } });
      fireEvent.change(fields[2], { target: { value: '3' } });
      fireEvent.change(fields[3], { target: { value: '4' } });
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId('hds.otp-login.submit-button'));
    });

    await waitFor(() => {
      expect(onSubmit2).toHaveBeenCalledWith(input2, expect.any(Object));
    });
  });
});
