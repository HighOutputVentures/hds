import renderer from 'react-test-renderer';
import ButtonTabs from './ButtonTabs';

describe('Snapshot (ButtonTabs)', () => {
  it('Should match snapshot', () => {
    const component = renderer.create(
      <ButtonTabs
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
