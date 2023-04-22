export const parameters = {
  actions: {
    argTypesRegex: '^on.*',
  },
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Contribution Guide',
        'System Design',
        'Components',
        'Templates',
        'Releases',
      ],
    },
  },
};
