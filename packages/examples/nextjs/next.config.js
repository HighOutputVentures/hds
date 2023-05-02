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

const transpilePackages = packages.map((packageName) => {
  const prefix = '@highoutput/hds';

  if (packageName === 'hds') {
    return prefix;
  } else {
    return `${prefix}-${packageName}`;
  }
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  transpilePackages,
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
