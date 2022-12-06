import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import ThemeProvider from '~/hds/src/components/ThemeProvider';
import Pagination from './Pagination';
import PaginationMDX from './Pagination.mdx';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      page: PaginationMDX,
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (props) => {
  const [args, setArgs] = useArgs();

  const handlePageChange = (page: number) => {
    setArgs({ ...args, page });
  };

  const handleSizeChange = (size: number) => {
    setArgs({ ...args, size, page: 1 });
  };

  return (
    <ThemeProvider>
      <Pagination
        {...props}
        page={args.page}
        size={args.size}
        total={args.total}
        options={args.options}
        loading={args.loading}
        onPageChange={handlePageChange}
        onSizeChange={handleSizeChange}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

const noop = () => {};

Default.args = {
  page: 1,
  size: 5,
  options: {
    sizes: [5, 10, 25, 50],
  },
  loading: false,
  onPageChange: noop,
  onSizeChange: noop,
  total: 75,
};
