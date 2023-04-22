import { ThemeProvider } from '@highoutput/hds';
import { RelayPagination } from '@highoutput/hds-pagination';
import { useArgs } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RelayPagination> = {
  title: 'Components/Pagination/Relay',
  component: RelayPagination,
};

export default Story;

const Template: StoryFn<typeof RelayPagination> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <RelayPagination
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
  sizes: [10, 20, 30, 40, 50],
  isNextLoading: false,
  isNextDisabled: false,
  isPreviousLoading: false,
  isPreviousDisabled: false,
};
