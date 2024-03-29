import { Icon } from '@chakra-ui/icons';
import { ThemeProvider } from '@highoutput/hds';
import { BadgeGroup } from '@highoutput/hds-badge';
import { Meta, StoryFn } from '@storybook/react';
import Example2Icon from '../examples/Example2Icon';

const meta: Meta = {
  title: 'Components/Badge/BadgeGroup',
  component: BadgeGroup,
};

export default meta;

const Template: StoryFn<typeof BadgeGroup> = (args) => {
  return (
    <ThemeProvider>
      <BadgeGroup {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: 'md',
  accent: 'primary',
  variant: 'default',
  title: 'Title',
  description: 'This is a description',
  descriptionFirst: false,
  icon: <Icon as={Example2Icon} />,
  onClick() {
    alert('We gotcha 👌');
  },
};
