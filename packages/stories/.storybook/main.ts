import type { StorybookConfig } from '@storybook/react-vite';
import { join, resolve } from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/stories/vite.config.ts',
      },
    },
  },
  staticDirs: [resolve(__dirname, '../public')],
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          ...packages.map((packageName) => {
            const importPath =
              packageName === 'hds'
                ? '@highoutput/<name>' /* eg. @highoutput/hds */
                : '@highoutput/hds-<name>'; /* eg. @highoutput/hds-alerts */

            return {
              find: importPath.replace('<name>', packageName),
              replacement: join(process.cwd(), `packages/${packageName}/src/index.ts`),
            };
          }),
          ...shared.map((packageName) => ({
            find: `shared/${packageName}`,
            replacement: join(
              process.cwd(),
              `packages/shared/${packageName}/src/index.ts`,
            ),
          })),
        ],
      },
    });
  },
};

const shared = ['utils'];

const packages = [
  'alerts',
  'auth',
  'avatar',
  'badge',
  'breadcrumbs',
  'carousel',
  'checkbox-group',
  'contact-us',
  'cta',
  'date-picker',
  'empty-state',
  'file-upload',
  'forms',
  'hds',
  'icons',
  'loading-indicator',
  'metrics',
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

export default config;
