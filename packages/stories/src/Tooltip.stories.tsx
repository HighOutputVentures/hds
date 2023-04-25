import { Flex, Icon } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Tooltip } from '@highoutput/hds-tooltip';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export default Story;

const Template: StoryFn<typeof Tooltip> = (props) => {
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
        <Tooltip {...props}>
          <Icon />
        </Tooltip>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: 'This is a tooltip',
  hasArrow: true,
};
