import { ThemeProvider } from '@highoutput/hds';
import { MinimalPagination } from '@highoutput/hds-pagination';
import { useArgs } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof MinimalPagination> = {
  title: 'Components/Pagination/Minimal',
  component: MinimalPagination,
};

export default Story;

const Template: StoryFn<typeof MinimalPagination> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <MinimalPagination
        {...args}
        onChange={({ page, pageSize }) =>
          setArgs({
            ...args,
            page,
            pageSize,
          })
        }
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  page: 1,
  pageSize: 10,
  count: 100,
  hasLegend: true,
  isLegendCentered: true,
  hasButtonIcon: true,
  hasButtonLabel: true,
  hasButtonOutline: true,
  hasPageControls: true,
};
