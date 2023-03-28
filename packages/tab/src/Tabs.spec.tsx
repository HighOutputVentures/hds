import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';

describe('Snapshot (Tabs)', () => {
  it('Should match snapshot', () => {
    const component = renderer.create(
      <Tabs
        items={[
          {
            label: 'One',
            render() {
              return <div>One</div>;
            },
          },
          {
            label: 'Two',
            render() {
              return <div>Two</div>;
            },
          },
          {
            label: 'Three',
            render() {
              return <div>Three</div>;
            },
          },
        ]}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
