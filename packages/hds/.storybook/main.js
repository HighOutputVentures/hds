module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)', '../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/mdx2-csf'
  ],
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  features: {
    emotionAlias: false,
  },
};
