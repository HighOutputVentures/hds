import { render } from '@testing-library/react';
import Modal from './Modal';
import * as React from 'react';

describe('Modal', () => {
  it('should render', () => {
    const { container } = render(
      <Modal isOpen onClose={jest.fn} onOk={jest.fn} title="Vans">
        Off the wall
      </Modal>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the correct title passed', () => {
    const title = 'This is a modal title';

    const { getByText } = render(
      <Modal isOpen onClose={jest.fn} onOk={jest.fn} title={title} />
    );

    expect(getByText(title)).toBeTruthy();
  });

  it('should render the correct body content', () => {
    const title = 'Hello! My name is Gustavo Fring';

    const { getByText } = render(
      <Modal isOpen onClose={jest.fn} onOk={jest.fn} title={title}>
        But you can call me gus.
      </Modal>
    );

    expect(getByText('But you can call me gus.')).toBeTruthy();
  });

  it('should render the correct text passed in close and ok button', () => {
    const title = 'Hello! My name is Gustavo Fring';
    const closeText = 'Dismiss';
    const okText = 'Accept';

    const { getByText } = render(
      <Modal
        isOpen
        onClose={jest.fn}
        onOk={jest.fn}
        title={title}
        closeText={closeText}
        okText={okText}
      >
        But you can call me gus.
      </Modal>
    );

    expect(getByText(closeText)).toBeTruthy();
    expect(getByText(okText)).toBeTruthy();
  });
});
