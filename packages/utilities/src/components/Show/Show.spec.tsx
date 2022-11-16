import { render } from '@testing-library/react';
import * as React from 'react';
import Show from './Show';

describe('Mount', () => {
  it('Should show component if conditions are met', () => {
    const condition = true;

    const { queryByText } = render(<Show when={condition}>It works!</Show>);

    expect(queryByText(/it works/i)).toBeDefined();
  });

  it("Should show component if conditions ain't met", () => {
    const condition = false;

    const { queryByText } = render(<Show when={condition}>It works!</Show>);

    expect(queryByText(/it works/i)).toBeNull();
  });
});
