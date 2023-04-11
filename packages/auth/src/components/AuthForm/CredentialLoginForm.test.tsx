import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import CredentialLoginForm from './CredentialLoginForm';

describe('Login Form Email-based Component', () => {
  beforeEach(() => {
    render(<CredentialLoginForm variant="email-password" />);
  });
  it('should display error message on email', async () => {
    // const emailInput = screen.getByRole('input', { name: 'email-input' });
    const emailInput = screen.getByTestId('hds.credential.input.email');
    const submitBtn = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(emailInput, { target: { value: 'hello@g' } });
    fireEvent.click(submitBtn);
    const errorText = await screen.findByText(
      /please enter a valid email address/i
    );
    expect(errorText).toBeInTheDocument();
  });

  it('should display error message on password', async () => {
    // const passwordInput = screen.getByRole('input', { name: 'password-input' });
    const passwordInput = screen.getByPlaceholderText(/Input your password/i);
    const submitBtn = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(passwordInput, { target: { value: null } });
    fireEvent.click(submitBtn);
    const errorText = await screen.findByText(/password is required/i);
    expect(errorText).toBeInTheDocument();
  });
  it('should toggle login to signup form', async () => {
    const switchLink = screen.getByTestId('hds.switch.form.link');
    fireEvent.click(switchLink);
    const textLoginLabel = screen.getByRole('link', {
      name: 'hds.login.link.label',
    });
    expect(textLoginLabel).toBeInTheDocument();
    fireEvent.click(switchLink);
    const textSignUpLabel = await screen.findByRole('link', {
      name: 'hds.signup.link.label',
    });
    expect(textSignUpLabel).toBeInTheDocument();
  });
});

describe('Login form Username-based component', () => {
  beforeEach(() => {
    render(
      <CredentialLoginForm variant="name-password" nameLabel="Username" />
    );
  });
  it('should display error message on name', async () => {
    // const nameInput = screen.getByRole('input', { name: 'name-input' });
    const nameInput = screen.getByTestId('hds.credential.input.username');
    const submitBtn = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(nameInput, { target: { value: null } });
    fireEvent.click(submitBtn);
    const errorText = await screen.findByText(/name is required/i);
    expect(errorText).toBeInTheDocument();
  });
});

describe('Snapshot', () => {
  it('(CredentialLoginForm) Should match snapshot', () => {
    const component = renderer.create(
      <CredentialLoginForm variant="name-password" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
