import { create } from '@storybook/theming';
import HOV from '../public/hov_logo_black.png';

export default create({
  base: 'light',

  colorPrimary: '#7070DD',
  colorSecondary: '#7070DD',

  appBg: '#FAFAFA',
  appContentBg: '#FAFAFA',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  textColor: '#0F0F0F',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: '#0F0F0F',
  barSelectedColor: '#7070DD',
  barBg: '#FAFAFA',

  inputBg: '#FAFAFA',
  inputBorder: 'silver',
  inputTextColor: '#0F0F0F',
  inputBorderRadius: 4,

  brandImage: HOV,
  brandTitle: 'HDS',
  brandUrl: 'https://hds-highoutput.vercel.app/?path=/story/getting-started--page',
  brandTarget: '_self',
});
