import { SearchIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './Notification';

function Component() {
  return (
    <Notification
      alertLabel={{ label1: 'Learn More', label2: 'View Changes' }}
      alertLinks={{ link1: '#', link2: '#' }}
      supportingDetail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      title="We’ve just released a new feature"
      isOpen={true}
      type="primary"
      icon={SearchIcon}
    />
  );
}

describe('Notification Component', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    );
  });

  it('Should render', async () => {
    const NotificationBox = await screen.findAllByTestId(
      'hds.notification.container'
    );
    expect(NotificationBox).toHaveLength(1);
  });

  it('should render title', async () => {
    const title = await screen.findAllByTestId('hds.notification.title');
    expect(title).toHaveLength(1);
  });

  it('should render supporting detail', async () => {
    const supportingDetail = await screen.findAllByTestId(
      'hds.notification.message'
    );
    expect(supportingDetail).toHaveLength(1);
  });

  it('should render notification links', async () => {
    const notificationLinks = await screen.findAllByTestId(
      'hds.notification.link'
    );
    expect(notificationLinks).toHaveLength(2);
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(<Component />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});
