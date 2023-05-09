import { Icon } from '@chakra-ui/react';
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
      <Tooltip {...props}>
        <Icon />
      </Tooltip>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: 'This is a tooltip',
  hasArrow: true,
};
