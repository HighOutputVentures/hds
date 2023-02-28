import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import CTA from './CTA';

describe('CTA', () => {
  it('should render CTA', () => {
    const { container } = render(
      <CTA
        header={`We've just released a new update!`}
        subHeader="Check out the all new dashboard view. Pages and now load faster."
        primaryLabel="Changelog"
        secondaryLabel="Dismiss"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should have a header and sub header', () => {
    const { getByText } = render(
      <CTA
        header={`We've just released a new update!`}
        subHeader="Check out the all new dashboard view. Pages and now load faster."
        primaryLabel="Changelog"
        secondaryLabel="Dismiss"
      />
    );

    expect(getByText(`We've just released a new update!`)).toBeInTheDocument();
    expect(
      getByText(
        `Check out the all new dashboard view. Pages and now load faster.`
      )
    ).toBeInTheDocument();
  });
});
