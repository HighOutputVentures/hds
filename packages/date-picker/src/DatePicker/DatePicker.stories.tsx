import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { DatePicker } from "./DatePicker";

const Story: Meta<typeof DatePicker> = {
  title: "Components/DatePicker/Calendar",
  component: DatePicker,
};

export default Story;

const Template: ComponentStory<typeof DatePicker> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Box p={4}>
        <DatePicker
          value={args.selected}
          onChange={(selected) =>
            setArgs({
              ...args,
              selected,
            })
          }
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
