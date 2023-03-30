import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ThemeProvider, extendTheme } from '@highoutput/hds/src';
import Button from './Button';
import withButton from '../theme/button/withButton';

export default {
  title: 'Components/Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={extendTheme(withButton())}>
    <Button {...args}>Submit</Button>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
