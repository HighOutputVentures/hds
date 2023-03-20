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
    isNextLoading: {
      name: "isNextLoading",
      type: {
        name: "boolean",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    isPreviousLoading: {
      name: "isPreviousLoading",
      type: {
        name: "boolean",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    isNextDisabled: {
      name: "isNextDisabled",
      type: {
        name: "boolean",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    isPreviousDisabled: {
      name: "isPreviousDisabled",
      type: {
        name: "boolean",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
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
        isNextLoading={args.isNextLoading}
        isNextDisabled={args.isNextDisabled}
        isPreviousLoading={args.isPreviousLoading}
        isPreviousDisabled={args.isPreviousDisabled}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
