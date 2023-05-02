// @ts-check

const { composePlugins, withNx } = require('@nx/next');

const packages = [
  'alerts',
  'auth',
  'avatar',
  'badge',
  'breadcrumbs',
  'carousel',
  'checkbox-group',
  'contact-us',
  'date-picker',
  'forms',
  'hds',
  'icons',
  'modal',
  'pagination',
  'slideout-menu',
  'stepper',
  'tab',
  'table',
  'tag',
  'toast',
  'tooltip',
];

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  transpilePackages: ['@highoutput/hds', '@highoutput/hds-forms', ''],
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
