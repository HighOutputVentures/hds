import { ChakraProvider } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { ContactUs } from "./ContactUs";
import * as utils from "./utils";

jest.mock("@highoutput/hds-forms", () => {
  const actualModule = jest.requireActual("@highoutput/hds-forms");

  return {
    ...actualModule,
    /*
     * mocking Multiline due to issue in "react-textarea-autosize"
     */
    MultilineField: React.forwardRef<HTMLTextAreaElement, any>(
      function MockedMultilineField(
        {
          //
          label,
          error,
          isInvalid,
          __fieldTestId,
          ...others
        },
        ref,
      ) {
        const props = {
          ...others,
          ...(error && {
            "aria-invalid": true,
            "aria-errormessage": error,
          }),
        };

        return <textarea ref={ref} {...props} data-testid={__fieldTestId} />;
      },
    ),
  };
});

const url = faker.internet.url();

const input = {
  details: {
    name: faker.name.fullName(),
  },
  message: faker.lorem.paragraph(1),
  emailAddress: faker.internet.email(),
};

describe("ContactUs", () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(
      <ChakraProvider>
        <ContactUs url={url} />
      </ChakraProvider>,
    );
  });

  it("Should render heading 1", () => {
    expect(screen.getByTestId("hds.contact-us.heading-1")).toBeInTheDocument();
  });

  it("Should render heading 2", () => {
    expect(screen.getByTestId("hds.contact-us.heading-2")).toBeInTheDocument();
  });

  it("Should render name field", () => {
    expect(screen.getByTestId("hds.contact-us.form.input.name")).toBeInTheDocument();
  });

  it("Should render email field", () => {
    expect(screen.getByTestId("hds.contact-us.form.input.email")).toBeInTheDocument();
  });

  it("Should render message field", () => {
    expect(screen.getByTestId("hds.contact-us.form.input.message")).toBeInTheDocument();
  });

  it("Should render submit button", () => {
    expect(screen.getByTestId("hds.contact-us.form.submit-button")).toBeInTheDocument();
  });

  it("Should validate fields", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("hds.contact-us.form.submit-button"));
    });

    await waitFor(() => {
      const name = screen.getByTestId("hds.contact-us.form.input.name");
      const email = screen.getByTestId("hds.contact-us.form.input.email");
      const message = screen.getByTestId("hds.contact-us.form.input.message");

      expect(name).toHaveAttribute("aria-invalid");
      expect(email).toHaveAttribute("aria-invalid");
      expect(message).toHaveAttribute("aria-invalid");
    });
  });

  it("Should be able to send", async () => {
    jest.spyOn(utils, "postJson").mockImplementation(async () => ({ ok: true }));

    const name = screen.getByTestId("hds.contact-us.form.input.name");
    const email = screen.getByTestId("hds.contact-us.form.input.email");
    const message = screen.getByTestId("hds.contact-us.form.input.message");
    const submitBtn = screen.getByTestId("hds.contact-us.form.submit-button");

    await act(async () => {
      fireEvent.change(name, { target: { value: input.details.name } });
      fireEvent.change(email, { target: { value: input.emailAddress } });
      fireEvent.change(message, { target: { value: input.message } });
    });

    await act(async () => {
      fireEvent.click(submitBtn);
    });

    expect(utils.postJson).toHaveBeenCalledWith(url, input);

    await waitFor(() => {
      expect(screen.getByText("Message successfully sent!")).toBeInTheDocument();
    });
  });
});
