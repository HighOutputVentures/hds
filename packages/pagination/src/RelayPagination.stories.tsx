import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "~/hds";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination/Relay",
  argTypes: {
    page: {
      name: "page",
      type: {
        name: "number",
        required: true,
      },
      defaultValue: 1,
      control: "number",
    },
    pageSize: {
      name: "pageSize",
      type: {
        name: "number",
        required: true,
      },
      defaultValue: 10,
      control: "number",
    },
    count: {
      name: "count",
      type: {
        name: "number",
        required: false,
      },
      defaultValue: 100,
      control: "number",
    },
  },
} as Meta;

const Template: ComponentStory<typeof Pagination> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Pagination
        variant="relay"
        page={args.page}
        pageSize={args.pageSize}
        count={args.count}
        sizes={[10, 20, 30, 40, 50]}
        onChange={(value) => {
          setArgs({
            ...args,
            ...value,
          });
        }}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
