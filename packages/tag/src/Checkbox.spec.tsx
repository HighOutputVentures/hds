import { render } from '@testing-library/react';
import * as React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('Should render checkbox', () => {
    const { queryByRole } = render(<Checkbox />);

    expect(queryByRole('checkbox')).toBeDefined();
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(<Checkbox />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});
