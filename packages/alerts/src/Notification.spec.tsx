import { SearchIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Notification } from './Notification';

const onClose = jest.fn();
const onOkay = jest.fn();

describe('Notification', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Notification
          icon={<SearchIcon />}
          title="We&rsquo;ve just released a new feature"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          closeButton="Dismiss"
          okayButton="View Changes"
          onClose={onClose}
          onOkay={onOkay}
        >
          <p>Hello world</p>
        </Notification>
      </ChakraProvider>,
    );
  });

  it('Should render', () => {
    expect(screen.getByTestId('hds.notification')).toBeInTheDocument();
  });

  it('should render title', () => {
    expect(screen.getByTestId('hds.notification.title')).toBeInTheDocument();
  });

  it('should render description', () => {
    expect(screen.getByTestId('hds.notification.description')).toBeInTheDocument();
  });

  it('should render okay button', async () => {
    expect(screen.getByTestId('hds.notification.okay-btn')).toBeInTheDocument();
  });

  it('should render close button', async () => {
    expect(screen.getByTestId('hds.notification.close-btn')).toBeInTheDocument();
  });

  it('should render children', async () => {
    expect(screen.getByTestId('hds.notification.children')).toBeInTheDocument();
  });

  test("'onClose'", async () => {
    await userEvent.click(screen.getByTestId('hds.notification.close-btn'));
    expect(onClose).toHaveBeenCalled();
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(
        <Notification
          icon={<SearchIcon />}
          title="We&rsquo;ve just released a new feature"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          closeButton="Dismiss"
          okayButton="View Changes"
        >
          <p>Hello world</p>
        </Notification>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});
