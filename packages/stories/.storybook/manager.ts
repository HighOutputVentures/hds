import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandUrl: 'https://hds-highoutput.vercel.app/?path=/story/getting-started--page',
  brandImage: '/hov_logo_black.png',
  brandTitle: 'HDS',
  brandTarget: '_self',

  colorPrimary: '#7224BF',
  colorSecondary: '#7224BF',

  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#F0F0F0',
  appBorderRadius: 4,

  fontBase: "'Inter', sans-serif",
  fontCode: "'Fira Code', monospace",

  textColor: '#0F0F0F',
  textInverseColor: '#FCFCFC',

  barBg: '#FCFCFC',
  barTextColor: '#0F0F0F',
  barSelectedColor: '#7224BF',

  inputBg: '#FFFFFF',
  inputBorder: '#F0F0F0',
  inputTextColor: '#0F0F0F',
  inputBorderRadius: 4,

  buttonBg: '#FFFFFF',
  buttonBorder: '#F0F0F0',
});

addons.setConfig({ theme });
