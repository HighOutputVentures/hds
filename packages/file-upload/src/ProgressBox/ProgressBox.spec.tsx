import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import ProgressBox from './ProgressBox';

describe('FileUpload', () => {
  it('should render FileUpload', () => {
    const { container } = render(<ProgressBox />);
    expect(container).toMatchSnapshot();
  });

  it('should render error progress box', () => {
    const { getByText } = render(<ProgressBox hasError />);
    expect(getByText('Upload failed, please try again')).toBeInTheDocument();
    expect(getByText('Try Again')).toBeInTheDocument();
  });

  it('should have a progress indicator', () => {
    const { getByText, getByRole } = render(<ProgressBox value={80} />);
    expect(getByRole('progressbar')).toBeInTheDocument();
    expect(getByText('80%')).toBeInTheDocument();
  });
});
