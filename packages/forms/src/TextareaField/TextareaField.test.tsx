import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TextareaField from './TextareaField';

describe('TextareaField', () => {
  beforeEach(() => {
    render(
      <TextareaField
        id="description"
        label="description"
        placeholder="Write something here..."
      />
    );
  });

  it('should render FormControl', () => {
    expect(screen.queryByRole('group', { name: 'Form Group' })).toBeDefined();
  });

  it('should renders Textarea', () => {
    expect(
      screen.queryByPlaceholderText('Write something here...')
    ).toBeDefined();
  });
});
