import { create } from '@storybook/theming';
import HOV from '../public/hov_logo_black.png';

export default create({
  base: 'light',
  brandImage: HOV,
  brandTitle: 'HDS',
  brandUrl: 'https://hds-highoutput.vercel.app/?path=/story/getting-started--page',
  brandTarget: '_self',

  colorPrimary: '#7224BF',
  colorSecondary: '#7224BF',

  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#F0F0F0',
  appBorderRadius: 4,

  fontBase: "'Inter', sans-serif",
  fontCode: "'Fira Code', monospace",

  textColor: '#0F0F0F',
  textInverseColor: '#FCFCFC',

  barTextColor: '#0F0F0F',
  barSelectedColor: '#7224BF',
  barBg: '#FAFAFA',

  inputBg: '#FAFAFA',
  inputBorder: 'silver',
  inputTextColor: '#0F0F0F',
  inputBorderRadius: 4,
});
