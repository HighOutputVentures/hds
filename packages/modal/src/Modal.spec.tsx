import { faker } from '@faker-js/faker';
import { ThemeProvider } from '@highoutput/hds';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Modal } from './Modal';

const title = faker.lorem.word();
const body = faker.lorem.paragraph(2);

const onClose = jest.fn();
const onConfirm = jest.fn();

const closeButtonLabel = faker.lorem.word();
const confirmButtonLabel = faker.lorem.word();

describe('Modal', () => {
  it('should render modal', async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });
  });

  it('should render the correct title passed', async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });

    expect(screen.getByTestId('hds.modal.title')).toHaveTextContent(title);
  });

  it('should render the correct body content', async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });

    expect(screen.getByTestId('hds.modal.body')).toHaveTextContent(body);
  });

  it("should render the correct text passed in 'close' and 'confirm' button", async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });

    expect(screen.getByTestId('hds.modal.close-button')).toHaveTextContent(
      closeButtonLabel,
    );
    expect(screen.getByTestId('hds.modal.submit-button')).toHaveTextContent(
      confirmButtonLabel,
    );
  });

  test("'onCancel'", async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId('hds.modal.close-button'));
    });

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  test("'onConfirm'", async () => {
    render(<TestComponent />);

    await userEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId('hds.modal.submit-button'));
    });

    await waitFor(() => {
      expect(onConfirm).toHaveBeenCalled();
    });
  });
});

function TestComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <button data-testid="trigger" onClick={() => setOpen(true)}>
        Click me
      </button>

      <Modal
        size="sm"
        isOpen={isOpen}
        title={title}
        closeButton={closeButtonLabel}
        confirmButton={confirmButtonLabel}
        onClose={onClose}
        onConfirm={onConfirm}
      >
        {body}
      </Modal>
    </ThemeProvider>
  );
}
