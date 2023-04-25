import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('should render EmptyState', () => {
    const { container } = render(
      <EmptyState
        header={`No projects found`}
        subHeader="Your search “Landing page design” did not match any projects. Please try again."
        primaryLabel="Changelog"
        secondaryLabel="Dismiss"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render EmptyState', () => {
    const { getByText } = render(
      <EmptyState
        header={`No projects found`}
        subHeader="Your search “Landing page design” did not match any projects. Please try again."
        primaryLabel="Changelog"
        secondaryLabel="Dismiss"
      />,
    );

    expect(getByText(`No projects found`)).toBeInTheDocument();
    expect(
      getByText(
        `Your search “Landing page design” did not match any projects. Please try again.`,
      ),
    ).toBeInTheDocument();
  });
});
