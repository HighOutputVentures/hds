import { Flex } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  ErrorFolderIcon,
  PrimaryIcon,
  SuccessCircleIcon,
  WarningFolderIcon,
} from '@highoutput/hds-icons';
import Notification from './Notification';
const previewImage = require('../../../assets/previewImage.png');

const Avatar = require('../../../assets/alerts-assets/Avatar.png');

export default {
  title: 'Components/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = () => {
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
          alertLinks={['#', '#']}
          alertLabel={['Dismiss', 'Changelog']}
          title="Uploading ‘website-FINAL06.fig’"
          isOpen={true}
        />
        <Notification
          type={'avatar'}
          avatar={Avatar}
          createdAt={'2 mins ago'}
          supportingDetail="I’ve finished adding my notes. Happy for us to review whenever you’re ready!"
          alertLinks={['#', '#']}
          alertLabel={['Dismiss', 'Changelog']}
          title="Katherine Moss"
          isOpen={true}
        />
        <Notification
          type={'image'}
          previewImage={previewImage}
          supportingDetail="Check out the all new dashboard view. Pages and exports now load faster."
          alertLinks={['#', '#']}
          alertLabel={['Dismiss', 'Changelog']}
          title="We’ve just released a new update!"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={PrimaryIcon}
          supportingDetail="Check out the all new dashboard view. Pages and exports now load faster. "
          alertLinks={['#', '#']}
          alertLabel={['Dismiss', 'Changelog']}
          title="We’ve just released a new update!"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={ErrorFolderIcon}
          supportingDetail="Removing all users has unpublished this project. Add users to republish."
          alertLinks={['#', '#']}
          alertLabel={['Undo Action']}
          title="This project has been unpublished"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={WarningFolderIcon}
          supportingDetail="Removing all users has unpublished this project. Add users to republish."
          alertLinks={['#', '#']}
          alertLabel={['Undo Action']}
          title="This project has been unpublished"
          isOpen={true}
        />
        <Notification
          type="primary"
          icon={SuccessCircleIcon}
          supportingDetail="Your changes have been saved and your profile is live. Your team can make edits. "
          alertLinks={['#', '#']}
          alertLabel={['Dismiss', 'View Changes']}
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
