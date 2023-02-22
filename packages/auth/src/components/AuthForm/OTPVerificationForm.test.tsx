import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import OTPVerificationForm from './OTPVerificationForm';

describe('Email Login Component', () => {
  beforeEach(() => {
    render(<OTPVerificationForm otpReceived={false} />);
  });

  it('should render button submit for email', async () => {
    const submitButton = await screen.findAllByTestId(
      'hds.otp.verification.submit.button'
    );
    expect(submitButton).toHaveLength(1);
  });
  test('user clicks submit with no value or invalid input and renders error messages', async () => {
    const submit = await screen.findByTestId('box.emailform.form');
    await fireEvent.submit(submit);
    const errorFormControl = await screen.findAllByTestId(
      /hds.form.control.error.message/i
    );
    expect(errorFormControl).toHaveLength(1);
  });
});
describe('One Time Password Verification Component', () => {
  beforeEach(() => {
    render(<OTPVerificationForm otpReceived={true} />);
  });

  it('should render otp component', async () => {
    const otpComponent = await screen.findAllByTestId('otp.component');
    expect(otpComponent).toHaveLength(1);
  });
});

describe('Snapshot', () => {
  it('(OTPVerificationForm) Should match snapshot', () => {
    const component = renderer.create(<OTPVerificationForm otpReceived />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
