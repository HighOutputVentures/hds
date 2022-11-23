import { render } from '@testing-library/react';
import * as React from 'react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('Should render checkbox', () => {
    const { queryByRole } = render(<Checkbox />);

    expect(queryByRole('checkbox')).toBeDefined();
  });
});
