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
  const relativePath =
    '/iframe.html?viewMode=story&id=components-breadcrumbs--default';
  const breadCrumbLinks = [
    { link: `${relativePath}#hello`, name: 'Home', isActive: true },
    { link: `${relativePath}#Settings`, name: 'Settings' },
    { link: `${relativePath}#Faqs`, name: 'Faqs' },
    { link: `${relativePath}#Logout`, name: 'Logout' },
    { link: `${relativePath}#New`, name: 'New' },
    { link: `${relativePath}#Create`, name: 'Create' },
    { link: `${relativePath}#Contact`, name: 'Contact' },
    { link: `${relativePath}#Read`, name: 'Read' },
    { link: `${relativePath}#Save`, name: 'Save' },
    { link: `${relativePath}#Copy`, name: 'Copy' },
  ];

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
        />
        <Breadcrumbs
          {...props}
          separator={<ChevronRightIcon color="#D6D6D6" />}
          icon={<AttachmentIcon />}
          activeLinkType={'color-on-bg'}
          breadCrumbLinks={breadCrumbLinks}
        />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
