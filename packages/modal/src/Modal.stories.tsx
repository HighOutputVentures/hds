import { Button, Text, ThemeProvider } from '@highoutput/hds';
import { SuccessCircleIcon } from '@highoutput/hds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOk = () => setIsOpen(false);

  return (
    <ThemeProvider>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal {...args} isOpen={isOpen} onClose={onClose} onOk={onOk}>
        <Text fontSize="sm">
          This blog post has been published. Team members will be able to edit
          this post and republish changes.
        </Text>
      </Modal>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  icon: SuccessCircleIcon,
  okText: 'Confirm',
  title: 'Blog post published',
};
