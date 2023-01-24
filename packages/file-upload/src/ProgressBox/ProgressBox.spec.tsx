import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import ProgressBox from './ProgressBox';

describe('FileUpload', () => {
  it('should render FileUpload', () => {
    const { container } = render(<ProgressBox />);

    expect(container).toMatchSnapshot();
  });
});
