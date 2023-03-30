import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { extendTheme, ThemeProvider } from '@highoutput/hds/src';

import SocialButton from './SocialButton';
import withButton from '../theme/button/button';

export default {
  title: 'Components/Button/SocialButton',
  component: SocialButton,
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = (args) => (
  <ThemeProvider theme={extendTheme(withButton())}>
    <SocialButton {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
