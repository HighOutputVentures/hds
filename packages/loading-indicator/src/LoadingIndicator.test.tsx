import { render } from '@testing-library/react';
import LoadingIndicator from './LoadingIndicator';
import * as React from 'react';

describe('LoadingIndicator', () => {
  it('should render', () => {
    const { container } = render(<LoadingIndicator />);

    expect(container).toMatchSnapshot();
  });

  it('should show the label by default', () => {
    const { getAllByText } = render(<LoadingIndicator />);

    expect(getAllByText('Loading...')[1]).toBeTruthy();
  });

  it('should update the label', () => {
    const labelText = 'Please wait...';

    const { getByText } = render(<LoadingIndicator labelText={labelText} />);

    expect(getByText(labelText)).toBeTruthy();
  });

  it('should hide the label', () => {
    const { getAllByText } = render(<LoadingIndicator showLabel={false} />);

    expect(getAllByText('Loading...').length).toBe(1);
  });
});