import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { Button } from "@highoutput/hds-forms";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { RangeDatePickerModal } from "./RangeDatePickerModal";

const Story: Meta<typeof RangeDatePickerModal> = {
  title: "Components/DatePicker/RangeDatePickerModal",
  component: RangeDatePickerModal,
};

export default Story;

const Template: ComponentStory<typeof RangeDatePickerModal> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4}>
        <RangeDatePickerModal {...args}>
          {({ onOpen }) => <Button onClick={onOpen}>Open</Button>}
        </RangeDatePickerModal>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
