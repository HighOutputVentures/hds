import { ThemeProvider } from '@highoutput/hds';
import { RangeDatePickerModal } from '@highoutput/hds-date-picker';
import { Button } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RangeDatePickerModal> = {
  title: 'Components/DatePicker/RangeDatePickerModal',
  component: RangeDatePickerModal,
};

export default Story;

const Template: StoryFn<typeof RangeDatePickerModal> = (args) => {
  return (
    <ThemeProvider>
      <RangeDatePickerModal {...args}>
        {({ onOpen }) => <Button onClick={onOpen}>Open</Button>}
      </RangeDatePickerModal>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
