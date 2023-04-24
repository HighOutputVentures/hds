import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Slider } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof Slider> = {
  title: 'Components/Forms/Slider',
  component: Slider,
};

const Template: StoryFn<typeof Slider> = (args) => {
  return (
    <ThemeProvider>
      <Box>
        <Slider {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 25,
  hasLabel: true,
  keepLabelOpened: false,
};

export default Story;
