import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Alert } from './Alert';

const onClose = jest.fn();
const onPrimaryButtonClick = jest.fn();
const onSecondaryButtonClick = jest.fn();

describe('Alert', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Alert
          primaryButton="View Changes"
          secondaryButton="Learn More"
          accent="primary"
          title="We&rsquo;ve just released a new feature"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          onClose={onClose}
          onPrimaryButtonClick={onPrimaryButtonClick}
          onSecondaryButtonClick={onSecondaryButtonClick}
        />
      </ChakraProvider>,
    );
  });

  it('Should render', () => {
    expect(screen.getByTestId('hds.alert')).toBeInTheDocument();
  });

  it('should render title', () => {
    expect(screen.getByTestId('hds.alert.title')).toBeInTheDocument();
  });

  it('should render description', () => {
    expect(screen.getByTestId('hds.alert.description')).toBeInTheDocument();
  });

  it('should render primary button', () => {
    expect(screen.getByTestId('hds.alert.primary-btn')).toBeInTheDocument();
  });

  it('should render secondary button', () => {
    expect(screen.getByTestId('hds.alert.secondary-btn')).toBeInTheDocument();
  });

  it('should render close button', () => {
    expect(screen.getByTestId('hds.alert.close-btn')).toBeInTheDocument();
  });

  test("'onClose'", async () => {
    await userEvent.click(screen.getByTestId('hds.alert.close-btn'));
    expect(onClose).toHaveBeenCalled();
  });

  test("'onPrimaryButtonClick'", async () => {
    await userEvent.click(screen.getByTestId('hds.alert.primary-btn'));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
  });

  test("'onSecondaryButtonClick'", async () => {
    await userEvent.click(screen.getByTestId('hds.alert.secondary-btn'));
    expect(onSecondaryButtonClick).toHaveBeenCalled();
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(
        <Alert
          primaryButton="View Changes"
          secondaryButton="Learn More"
          accent="primary"
          title="We&rsquo;ve just released a new feature"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});
