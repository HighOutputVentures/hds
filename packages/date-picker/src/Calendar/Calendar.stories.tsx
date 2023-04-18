import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { Calendar } from "./Calendar";

const Story: Meta<typeof Calendar> = {
  title: "Components/DatePicker/Calendar",
  component: Calendar,
};

export default Story;

const Template: ComponentStory<typeof Calendar> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Box p={4}>
        <Calendar
          __bordered
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
