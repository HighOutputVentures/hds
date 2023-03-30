import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { extendTheme, ThemeProvider } from '@highoutput/hds/src';
import CloseButton from './CloseButton';
import withButton from '../theme/button/button';

export default {
  title: 'Components/Button/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <ThemeProvider theme={extendTheme(withButton())}>
    <CloseButton {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
