import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  babel: async _options => ({
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: 100,
          },
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: ['react-require'],
  }),
  webpackFinal: async webpackConfig => {
    // @ts-expect-error - Define exclude even if it doesn't exist
    webpackConfig.module.rules[2].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/, /core-js/];
    // @ts-expect-error - Define plugins even if it doesn't exist
    webpackConfig.module.rules[2].use[0].options.plugins.push(require.resolve('babel-plugin-remove-graphql-queries'));
    // @ts-expect-error - Define mainFields even if it doesn't exist
    webpackConfig.resolve.mainFields = ['browser', 'module', 'main'];
    if (webpackConfig.resolve) {
      webpackConfig.resolve.modules = [...(webpackConfig.resolve.modules || []), path.resolve('src/')];
    }

    return webpackConfig;
  },
};
export default config;
