import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import FileUpload from './FileUpload';

describe('FileUpload', () => {
  it('should render FileUpload', () => {
    const { container } = render(<FileUpload />);

    expect(container).toMatchSnapshot();
  });
});
