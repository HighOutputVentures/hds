import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CloseButton from './CloseButton';

describe('Close Button Component', () => {
  beforeEach(() => {
    render(<CloseButton __testId="hds.close.btn" />);
  });

  it('should render close button ', async () => {
    const submitButton = await screen.findAllByTestId('hds.close.btn');
    expect(submitButton).toHaveLength(1);
  });
});
