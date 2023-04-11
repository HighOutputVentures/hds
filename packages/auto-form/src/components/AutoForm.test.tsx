import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AutoForm from './AutoForm';
import { autoFormSchema } from './validations';

jest.mock('react-textarea-autosize', () => {
  return {
    __esModule: true,
    default({ minRows: _mxr, maxRows: _mnr, ...props }: any) {
      return <textarea {...props} />;
    },
  };
});

describe.skip('Auto form component', () => {
  beforeEach(() => {
    render(<AutoForm yupSchema={autoFormSchema} />);
  });

  it('should render form inputs', () => {
    const inputs = screen.queryByTestId('hds.text-field.input');
    expect(inputs).toBeDefined();
  });

  it('should render form textarea', () => {
    const inputs = screen.queryByTestId('hds.multiline-field.input');
    expect(inputs).toBeDefined();
  });

  test('user clicks submit with no value or invalid input and renders error messages', async () => {
    const submit = screen.getByTestId('hds.button-form.submit');

    await act(async () => {
      fireEvent.submit(submit);
    });

    await waitFor(() => {
      expect(screen.queryAllByTestId('hds.form-group.error')).toHaveLength(2);
    });
  });
});
