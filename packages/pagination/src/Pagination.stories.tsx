import { ChakraProvider } from "@chakra-ui/react";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
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
      name: "maxPageControls",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: 6,
      control: "select",
      options: [4, 6],
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
    <ChakraProvider>
      <Pagination
        variant="minimal"
        page={args.page}
        pageSize={args.pageSize}
        total={args.total}
        hasLegend={args.hasLegend}
        isLegendCentered={args.isLegendCentered}
        hasButtonIcon={args.hasButtonIcon}
        hasButtonLabel={args.hasButtonLabel}
        hasButtonOutline={args.hasButtonOutline}
        hasPageControls={args.hasPageControls}
        maxPageControls={args.maxPageControls}
        onPageChange={(page: number) => setArgs({ ...args, page })}
      />

      <Pagination
        mt={16}
        variant="group"
        page={args.page}
        pageSize={args.pageSize}
        total={args.total}
        maxPageControls={args.maxPageControls}
        onPageChange={(page: number) => setArgs({ ...args, page })}
      />
    </ChakraProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
