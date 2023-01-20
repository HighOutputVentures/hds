import { AttachmentIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (props) => {
  return (
    <ThemeProvider>
      <Flex
        gap={'50px'}
        flexDir="column"
        width="full"
        justify={'center'}
        align={'center'}
        height={'400px'}
      >
        <Breadcrumbs
          {...props}
          separator={<ChevronRightIcon color="#D6D6D6" />}
          icon={<AttachmentIcon />}
          activeLinkType={'color-on-bg'}
          backgroundStyleType={'bg-grey-with-border'}
          breadCrumbLinks={[
            { link: '#hello', name: 'Home' },
            { link: '#Settings', name: 'Settings' },
            { link: '#Faqs', name: 'Faqs' },
            { link: '#Logout', name: 'Logout' },
            { link: '#New', name: 'New' },
            { link: '#Create', name: 'Create' },
            { link: '#Contact', name: 'Contact' },
            { link: '#Read', name: 'Read' },
            { link: '#Save', name: 'Save' },
            { link: '#Copy', name: 'Copy' },
          ]}
        />
        <Breadcrumbs
          {...props}
          separator={<ChevronRightIcon color="#D6D6D6" />}
          icon={<AttachmentIcon />}
          activeLinkType={'color-on-bg'}
          breadCrumbLinks={[
            { link: '#hello', name: 'Home' },
            { link: '#Settings', name: 'Settings' },
            { link: '#Faqs', name: 'Faqs' },
            { link: '#Logout', name: 'Logout' },
            { link: '#New', name: 'New' },
            { link: '#Create', name: 'Create' },
            { link: '#Contact', name: 'Contact' },
            { link: '#Read', name: 'Read' },
            { link: '#Save', name: 'Save' },
            { link: '#Copy', name: 'Copy' },
          ]}
        />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
