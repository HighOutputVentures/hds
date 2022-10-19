import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import TextareaAutosize from './TextareaAutosize';

describe('Textarea Autosize', () => {
  beforeEach(() => {
    render(<TextareaAutosize mt="2rem" pt="4rem" />);
  });

  it('Should have correct value', async () => {
    const input = await screen.getByTestId<HTMLTextAreaElement>(
      ':r0:-textarea-autosize'
    );
    const value = Date.now().toString();
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  it('Should be styleable', async () => {
    const input = await screen.getByTestId<HTMLTextAreaElement>(
      ':r1:-textarea-autosize'
    );

    expect(input).toHaveStyle({
      'margin-top': '2rem',
      'padding-top': '4rem',
    });
  });
});
