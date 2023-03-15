import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "~/hds";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination/Group",
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
    total: {
      name: "total",
      type: {
        name: "number",
        required: false,
      },
      defaultValue: 100,
      control: "number",
    },
    hasLegend: {
      name: "hasLegend",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    isLegendCentered: {
      name: "isLegendCentered",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    hasPageControls: {
      name: "hasPageControls",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    maxPageControls: {
      name: "page",
      type: {
        name: "number",
        required: true,
      },
      defaultValue: 2,
      control: "number",
    },
    hasButtonIcon: {
      name: "hasButtonIcon",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    hasButtonLabel: {
      name: "hasButtonLabel",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    hasButtonOutline: {
      name: "hasButtonOutline",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
  },
} as Meta;

const Template: ComponentStory<typeof Pagination> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Pagination
        variant="group"
        page={args.page}
        pageSize={args.pageSize}
        count={args.total}
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
