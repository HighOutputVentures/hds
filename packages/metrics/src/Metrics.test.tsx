import { render, fireEvent } from '@testing-library/react';
import Metrics from './Metrics';
import * as React from 'react';

describe('Metrics', () => {
  it('renders correctly with positive metric change', () => {
    const { getByText, container } = render(
      <Metrics
        percentage={5}
        metricChange="positive"
        metricLabel="Revenue"
        metricValue="$1,000"
        lastViewedText="Last viewed: 1 hour ago"
        viewDetailsText="View details"
      />
    );
    expect(container).toMatchSnapshot();
    expect(getByText('Revenue')).toBeDefined();
    expect(getByText('$1,000')).toBeDefined();
    expect(getByText('5%')).toBeDefined();
    expect(getByText('Last viewed: 1 hour ago')).toBeDefined();
    expect(getByText('View details')).toBeDefined();
  });

  it('renders correctly with negative metric change', () => {
    const { getByText, container } = render(
      <Metrics
        percentage={-5}
        metricChange="negative"
        metricLabel="Revenue"
        metricValue="$1,000"
        lastViewedText="Last viewed: 1 hour ago"
        viewDetailsText="View details"
      />
    );
    expect(container).toMatchSnapshot();
    expect(getByText('Revenue')).toBeDefined();
    expect(getByText('$1,000')).toBeDefined();
    expect(getByText('-5%')).toBeDefined();
    expect(getByText('Last viewed: 1 hour ago')).toBeDefined();
    expect(getByText('View details')).toBeDefined();
  });

  it('calls view details callback function on click', () => {
    const viewDetailsCallback = jest.fn();
    const { getByText } = render(
      <Metrics
        percentage={5}
        metricChange="positive"
        metricLabel="Revenue"
        metricValue="$1,000"
        lastViewedText="Last viewed: 1 hour ago"
        viewDetailsText="View details"
        viewDetailsCalllback={viewDetailsCallback}
      />
    );

    fireEvent.click(getByText('View details'));
    expect(viewDetailsCallback).toHaveBeenCalled();
  });
});
