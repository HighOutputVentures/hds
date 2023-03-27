import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Box, Flex, ThemeProvider } from '@highoutput/hds';
import { Button } from '@highoutput/hds-button';
import { Text } from '@chakra-ui/react';
import CTA from './CTA';
import { EmailIcon, Icon } from '@chakra-ui/icons';
import VisaIcon from './exampale/VisaIcon';

export default {
  title: 'Components/CTA',
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <CTA {...args} />
      </Flex>
    </ThemeProvider>
  );
};

const TemplateContent: ComponentStory<typeof CTA> = (args) => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <CTA
          {...args}
          content={
            <Flex
              border="1px solid #F0F0F0"
              borderRadius="10px"
              p="1rem"
              mt="1.25rem"
              direction="row"
              gap={4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Icon h={10} w={14} as={VisaIcon} />

              <Box w="80%">
                <Text
                  fontSize="14px"
                  lineHeight="20px"
                  letterSpacing="0.02em"
                  color="neutrals.700"
                >
                  Visa ending in 1234
                </Text>
                <Text
                  fontSize="14px"
                  lineHeight="20px"
                  letterSpacing="0.02em"
                  color="neutrals.600"
                >
                  Expiry 06/2024
                </Text>

                <Flex gap={2} alignItems="center" mt="12px">
                  <Icon as={EmailIcon} />{' '}
                  <Text
                    fontSize="14px"
                    lineHeight="20px"
                    letterSpacing="0.02em"
                    color="neutrals.600"
                  >
                    billing@untitledui.com
                  </Text>
                </Flex>
              </Box>

              <Flex justifyContent="flex-end">
                <Button variant="outline-primary">Edit</Button>
              </Flex>
            </Flex>
          }
        />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
export const SubscriptionCTA = Template.bind({});
export const ContentCTA = TemplateContent.bind({});

Default.args = {
  ...Default.args,
  header: "We've just released a new update!",
  subHeader: 'Check out the all new dashboard view. Pages and now load faster.',
  primaryLabel: 'Changelog',
  secondaryLabel: 'Dismiss',
};

SubscriptionCTA.args = {
  ...Default.args,
  header: 'We’ve just released a new update!',
  subHeader: 'Check out the all new dashboard view. Pages and now load faster.',
  primaryLabel: 'Subscribe',
  isSubscription: true,
};

ContentCTA.args = {
  ...ContentCTA.args,
  header: 'Payment method',
  subHeader: 'Change how you pay for your plan.',
};
