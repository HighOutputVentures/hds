import { SearchIcon } from '@chakra-ui/icons';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
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
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const NotificationBox = await screen.findAllByTestId('notification-box');
    expect(NotificationBox).toHaveLength(1);
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
