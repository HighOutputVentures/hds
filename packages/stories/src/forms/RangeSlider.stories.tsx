import { ThemeProvider } from '@highoutput/hds';
import { RangeSlider } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RangeSlider> = {
  title: 'Components/Forms/RangeSlider',
  component: RangeSlider,
};

const Template: StoryFn<typeof RangeSlider> = (args) => {
  return (
    <ThemeProvider>
      <RangeSlider {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [25, 75],
  hasLabel: false,
  keepLabelOpened: false,
};

export default Story;
