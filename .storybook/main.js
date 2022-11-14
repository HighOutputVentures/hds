module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../packages/**/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/mdx2-csf",
  ],
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
    postcss: true,
    emotionAlias: false,
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
