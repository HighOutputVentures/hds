### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-modal
```

### Usage

```tsx
import Modal from '@highoutput/hds-modal';

export const ModalSample = () => {
  const onClose = () => {
    // do something
  };

  const onOk = () => {
    // do something
  };

  return (
    <Modal
      isOpen
      okText="Confirm"
      onClose={onClose}
      onOk={onOk}
      title="Blog post published"
    >
      <Text fontSize="sm">
        This blog post has been published. Team members will be able to edit
        this post and republish changes.
      </Text>
    </Modal>
  );
};
```
