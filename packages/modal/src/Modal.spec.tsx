import { faker } from '@faker-js/faker';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode, useState } from 'react';
import { Modal } from './Modal';

const mockedTitle = faker.random.word();
const mockedMessage = faker.lorem.paragraph();
const mockedOnOkay = jest.fn();
const mockedOnCancel = jest.fn();
const mockedChildren = faker.random.word();

describe('Modal', () => {
  beforeEach(() => {
    render(
      <TestComponent
        title={mockedTitle}
        message={mockedMessage}
        onOkay={mockedOnOkay}
        onCancel={mockedOnCancel}
      >
        {mockedChildren}
      </TestComponent>,
    );
  });

  it('Should render modal', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal')).toBeInTheDocument();
    });
  });

  it('Should render icon', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.icon')).toBeInTheDocument();
    });
  });

  it('Should render title', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.title')).toBeInTheDocument();
    });
  });

  it('Should render message', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.children')).toBeInTheDocument();
    });
  });

  it('Should render children', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.message')).toBeInTheDocument();
    });
  });

  it('Should render cancel button', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.controls.close')).toBeInTheDocument();
      expect(screen.getByTestId('hds.modal.controls.cancel')).toBeInTheDocument();
    });
  });

  it('Should render okay button', async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.controls.okay')).toBeInTheDocument();
    });
  });

  test("'children'", async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.children')).toBeInTheDocument();
      expect(screen.getByTestId('hds.modal.children')).toHaveTextContent(mockedChildren);
    });
  });

  test("'onCancel'", async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.controls.cancel')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTestId('hds.modal.controls.cancel'));
    await waitFor(() => {
      expect(mockedOnCancel).toHaveBeenCalled();
    });
  });

  test("'onOkay'", async () => {
    expect(screen.getByTestId('trigger')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('trigger'));
    await waitFor(() => {
      expect(screen.getByTestId('hds.modal.controls.okay')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTestId('hds.modal.controls.okay'));
    await waitFor(() => {
      expect(mockedOnOkay).toHaveBeenCalled();
    });
  });
});

function TestComponent({
  title,
  message,
  onOkay,
  onCancel,
  children,
}: {
  title: string;
  message: string;
  onOkay(): void;
  onCancel(): void;
  children: ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button data-testid="trigger" onClick={() => setOpen(true)}>
        Click
      </button>

      <Modal
        icon={<div />}
        title={title}
        message={message}
        isOpen={isOpen}
        onCancel={() => {
          onCancel();
          setOpen(false);
        }}
        onOkay={() => {
          onOkay();
          setOpen(false);
        }}
      >
        {children}
      </Modal>
    </div>
  );
}
