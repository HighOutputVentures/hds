import { fireEvent, render, screen } from '@testing-library/react';
import { Toast, ToastProps } from './Toast';

describe('Toast', () => {
  it('should render the toast component with title and description', () => {
    const onClose = jest.fn();
    const Component = Toast as (p: ToastProps) => JSX.Element;

    render(
      <Component
        title="Success"
        description="This is a successful toast message."
        status="success"
        onClose={onClose}
      />,
    );

    const toastElement = screen.getByRole('alert');
    const titleElement = screen.getByText('Success');
    const descriptionElement = screen.getByText('This is a successful toast message.');

    expect(toastElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should call the onClose function when the close button is clicked', () => {
    const onClose = jest.fn();
    const Component = Toast as (p: ToastProps) => JSX.Element;

    render(
      <Component
        title="Success"
        description="This is a successful toast message."
        status="success"
        onClose={onClose}
      />,
    );

    fireEvent.click(screen.getByLabelText('Close alert'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should render a custom render function if provided', () => {
    const customRender = jest.fn();
    const Component = Toast as (p: ToastProps) => JSX.Element;

    render(
      <Component
        title="Success"
        description="This is a successful toast message."
        status="success"
        onClose={jest.fn()}
        render={customRender}
      />,
    );

    expect(customRender).toHaveBeenCalledTimes(1);
  });
});
