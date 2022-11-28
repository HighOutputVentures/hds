import "../globals/overrides.css";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  viewMode: "docs",
  options: {
    storySort: {
      order: [
        "Getting Started",
        "Contribution Guide",
        "System Design",
        "Provider and Hooks",
        "Layouts",
        "Components",
        "Utilities",
        "Releases",
      ],
    },
  },
};
