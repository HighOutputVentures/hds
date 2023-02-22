import { render } from '@testing-library/react';
import LoadingLite from './LoadingLite';
import * as React from 'react';

describe('LoadingLite', () => {
  it('should render', () => {
    const { container } = render(<LoadingLite />);

    expect(container).toMatchSnapshot();
  });

  it('should show the label by default', () => {
    const { getByText } = render(<LoadingLite />);

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should update the label', () => {
    const labelText = 'Please wait...';

    const { getByText } = render(<LoadingLite labelText={labelText} />);

    expect(getByText(labelText)).toBeTruthy();
  });

  it('should hide the label', () => {
    const { queryByText } = render(<LoadingLite showLabel={false} />);

    expect(queryByText('Loading...')).toBeFalsy();
  });
});
