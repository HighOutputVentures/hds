import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AutoForm from './AutoForm';
import { autoFormSchema } from './validations';

describe('Auto form component', () => {
  beforeEach(() => {
    render(<AutoForm yupSchema={autoFormSchema} />);
  });

  it('should render form inputs', () => {
    const inputs = screen.queryByTestId('hds.input.group');
    expect(inputs).toBeDefined();
  });

  it('should render form textarea', () => {
    const inputs = screen.queryByTestId(/textarea-field-input/i);
    expect(inputs).toBeDefined();
  });

  test('user clicks submit with no value or invalid input and renders error messages', async () => {
    const submit = screen.getByTestId('button.form.submit');

    await act(async () => {
      fireEvent.submit(submit);
    });

    await waitFor(() => {
      expect(
        screen.queryAllByTestId(/hds.form.control.error.message/i)
      ).toHaveLength(2);
    });
  });
});
