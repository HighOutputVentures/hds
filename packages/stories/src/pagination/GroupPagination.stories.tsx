import { ThemeProvider } from '@highoutput/hds';
import { GroupPagination } from '@highoutput/hds-pagination';
import { useArgs } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof GroupPagination> = {
  title: 'Components/Pagination/Group',
  component: GroupPagination,
};

export default Story;

const Template: StoryFn<typeof GroupPagination> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <GroupPagination
        page={args.page}
        pageSize={args.pageSize}
        hasJumpTo
        onChangeJumpValue={(value) => alert(value)}
        count={args.count}
        sizes={[10, 20, 30, 40, 50]}
        onChange={({ page, pageSize }) => {
          setArgs({
            ...args,
            page,
            pageSize,
          });
        }}
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
};
