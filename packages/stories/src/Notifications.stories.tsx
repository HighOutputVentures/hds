import { Flex } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Notification } from '@highoutput/hds-alerts';
import {
  ErrorFolderIcon,
  PrimaryIcon,
  SuccessCircleIcon,
  WarningFolderIcon,
} from '@highoutput/hds-icons';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = () => {
  return (
    <ThemeProvider>
      <Flex
        gap={'50px'}
        flexDir="column"
        width="full"
        justify={'center'}
        align={'center'}
      >
        <Notification
          type={'upload'}
          progressValue={'70'}
          supportingDetail="Please wait while we upload your file."
          alertLabel={{ label1: 'Dismiss', label2: 'Changelog' }}
          alertLinks={{ link1: '#', link2: '#' }}
          title="Uploading ‘website-FINAL06.fig’"
          isOpen={true}
        />
        <Notification
          type={'avatar'}
          avatar={'/public/alerts-assets/Avatar.png'}
          createdAt={'2 mins ago'}
          supportingDetail="I’ve finished adding my notes. Happy for us to review whenever you’re ready!"
          alertLabel={{ label1: 'Dismiss', label2: 'Changelog' }}
          alertLinks={{ link1: '#', link2: '#' }}
          title="Katherine Moss"
          isOpen={true}
        />
        <Notification
          type={'image'}
          previewImage="/public/previewImage.png"
          supportingDetail="Check out the all new dashboard view. Pages and exports now load faster."
          alertLabel={{ label1: 'Dismiss', label2: 'Changelog' }}
          alertLinks={{ link1: '#', link2: '#' }}
          title="We’ve just released a new update!"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={PrimaryIcon}
          supportingDetail="Check out the all new dashboard view. Pages and exports now load faster. "
          alertLabel={{ label1: 'Dismiss', label2: 'Changelog' }}
          alertLinks={{ link1: '#', link2: '#' }}
          title="We’ve just released a new update!"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={ErrorFolderIcon}
          supportingDetail="Removing all users has unpublished this project. Add users to republish."
          alertLabel={{ label1: 'Undo Action' }}
          alertLinks={{ link1: '#' }}
          title="This project has been unpublished"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={WarningFolderIcon}
          supportingDetail="Removing all users has unpublished this project. Add users to republish."
          alertLabel={{ label1: 'Undo Action' }}
          alertLinks={{ link1: '#' }}
          title="This project has been unpublished"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={SuccessCircleIcon}
          supportingDetail="Your changes have been saved and your profile is live. Your team can make edits. "
          alertLabel={{ label1: 'Dismiss', label2: 'View Changes' }}
          alertLinks={{ link1: '#', link2: '#' }}
          title="Successfully updated profile"
          isOpen={true}
        />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
