import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import FileUpload from './FileUpload';

describe('FileUpload', () => {
  it('should render FileUpload', () => {
    const { container } = render(<FileUpload />);

    expect(container).toMatchSnapshot();
  });

  it('should have a input type of file upload', () => {
    const { getByTestId } = render(<FileUpload />);

    const input = getByTestId('hds.file.input.upload');
    expect(input).toHaveProperty('type', 'file');
  });
});
