import { ChakraProvider } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import CredentialLoginForm from "./CredentialLoginForm";

const onSubmit1 = jest.fn();
const onSubmit2 = jest.fn();

const input1 = {
  emailAddress: faker.internet.email(),
  password: faker.lorem.word({ length: { min: 8, max: 16 } }),
};

const input2 = {
  username: faker.internet.userName(),
  password: faker.lorem.word({ length: { min: 8, max: 16 } }),
};

describe("CredentialLoginForm (email-password)", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <ChakraProvider>
        <CredentialLoginForm variant="email-password" onSubmit={onSubmit1} />
      </ChakraProvider>,
    );
  });

  it("Should render email field", () => {
    expect(screen.getByTestId("hds.credential-login.input.email")).toBeInTheDocument();
  });

  it("Should render password field", () => {
    expect(screen.getByTestId("hds.credential-login.input.password")).toBeInTheDocument();
  });

  it("Should render button", () => {
    expect(screen.getByTestId("hds.credential-login.submit-button")).toBeInTheDocument();
  });

  it("Should validate fields", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("hds.credential-login.submit-button"));
    });

    await waitFor(() => {
      const email = screen.getByTestId("hds.credential-login.input.email");
      const password = screen.getByTestId("hds.credential-login.input.password");

      expect(email).toHaveAttribute("aria-invalid");
      expect(password).toHaveAttribute("aria-invalid");
    });
  });

  test("'onSubmit'", async () => {
    await act(async () => {
      fireEvent.change(screen.getByTestId("hds.credential-login.input.email"), {
        target: {
          value: input1.emailAddress,
        },
      });
    });

    await act(async () => {
      fireEvent.change(screen.getByTestId("hds.credential-login.input.password"), {
        target: {
          value: input1.password,
        },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId("hds.credential-login.submit-button"));
    });

    await waitFor(() => {
      expect(onSubmit1).toHaveBeenCalledWith(input1, expect.any(Object));
    });
  });
});

describe("CredentialLoginForm (name-password)", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <ChakraProvider>
        <CredentialLoginForm variant="name-password" onSubmit={onSubmit2} />
      </ChakraProvider>,
    );
  });

  it("Should render username field", () => {
    expect(screen.getByTestId("hds.credential-login.input.username")).toBeInTheDocument();
  });

  it("Should render password field", () => {
    expect(screen.getByTestId("hds.credential-login.input.password")).toBeInTheDocument();
  });

  it("Should render button", () => {
    expect(screen.getByTestId("hds.credential-login.submit-button")).toBeInTheDocument();
  });

  it("Should validate fields", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("hds.credential-login.submit-button"));
    });

    await waitFor(() => {
      const username = screen.getByTestId("hds.credential-login.input.username");
      const password = screen.getByTestId("hds.credential-login.input.password");

      expect(username).toHaveAttribute("aria-invalid");
      expect(password).toHaveAttribute("aria-invalid");
    });
  });

  test("'onSubmit'", async () => {
    await act(async () => {
      fireEvent.change(screen.getByTestId("hds.credential-login.input.username"), {
        target: {
          value: input2.username,
        },
      });
    });

    await act(async () => {
      fireEvent.change(screen.getByTestId("hds.credential-login.input.password"), {
        target: {
          value: input2.password,
        },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId("hds.credential-login.submit-button"));
    });

    await waitFor(() => {
      expect(onSubmit2).toHaveBeenCalledWith(input2, expect.any(Object));
    });
  });
});
