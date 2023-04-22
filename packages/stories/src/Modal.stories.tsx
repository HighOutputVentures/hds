import { Text, useBoolean } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Button } from '@highoutput/hds-forms';
import { SuccessCircleIcon } from '@highoutput/hds-icons';
import { Modal } from '@highoutput/hds-modal';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [flag, setFlag] = useBoolean();

  return (
    <ThemeProvider>
      <Button onClick={setFlag.on}>Open Modal</Button>

      <Modal
        {...args}
        isOpen={flag}
        onClose={setFlag.off}
        onConfirm={setFlag.off}
        closeButton="Okay"
        confirmButton
      >
        <Text fontSize="sm">
          This blog post has been published. Team members will be able to edit this post
          and republish changes.
        </Text>
      </Modal>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  icon: SuccessCircleIcon,
  title: 'Blog post published',
};
