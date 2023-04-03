const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../packages/**/**/*.stories.@(ts|tsx|js|jsx|mdx)",
    "../stories/**/**/*.stories.@(ts|tsx|js|jsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/mdx2-csf",
    "@locofy/storybook-addon",
    "storybook-color-picker",
  ],
  staticDirs: ["../assets"],
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
    postcss: true,
    emotionAlias: false,
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": "@emotion/react",
          "emotion-theming": "@emotion/react",
          "~": path.resolve(__dirname, "../packages"),
        },
      },
    };
  },
};
