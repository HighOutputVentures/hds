import { Icon } from '@chakra-ui/react';
import { ThemeProvider, useDisclosure } from '@highoutput/hds';
import { Button } from '@highoutput/hds-forms';
import { Modal } from '@highoutput/hds-modal';
import { Meta, StoryFn } from '@storybook/react';
import { Fragment } from 'react';
import FeaturedCheckIcon from './examples/FeaturedCheckIcon';

const Story: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default Story;

const Template: StoryFn<typeof Modal> = (args) => {
  const disclosure = useDisclosure();

  return (
    <ThemeProvider>
      <Button onClick={disclosure.onOpen}>Open</Button>

      <Modal
        {...args}
        isOpen={disclosure.isOpen}
        onOkay={disclosure.onClose}
        onCancel={disclosure.onClose}
      ></Modal>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: 'lg',
  isDanger: false,
  isLoading: false,
  isCenterAligned: false,
  hasCloseButton: true,
  hasOkayButton: true,
  hasCancelButton: true,
  icon: <Icon as={FeaturedCheckIcon} w="48px" h="48px" />,
  title: 'Blog post published',
  message: <Fragment>This blog post has been published.</Fragment>,
};
