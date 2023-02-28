import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';

function Component() {
  return (
    <Alert
      alertLabel={{ label1: 'Learn More', label2: 'View Changes' }}
      alertLinks={{ link1: '#', link2: '#' }}
      status="default"
      supportingDetail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      title="We’ve just released a new feature"
      isOpen={true}
    />
  );
}

describe('Alert Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const AlertBox = await screen.findAllByTestId('hds.alert.container');
    expect(AlertBox).toHaveLength(1);
  });
  it('should render title', async () => {
    const title = await screen.findAllByTestId('hds.alert.title');
    expect(title).toHaveLength(1);
  })

  it('should render supporting detail', async () => {
    const supportingDetail = await screen.findAllByTestId('hds.alert.message');
    expect(supportingDetail).toHaveLength(1);
  })

  it('should render alert links', async () => {
    const notificationLinks = await screen.findAllByTestId('hds.alert.link');
    expect(notificationLinks).toHaveLength(2);
  })

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(<Component />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});
