import dotenv from 'dotenv';

import type { GatsbyConfig } from 'gatsby';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Aspire',
    author: 'Webstacks',
    siteTitle: 'Aspire',
    siteHeadline: 'Aspire: Field Service Management Software',
    siteUrl: 'https://www.youraspire.com/',
    siteDescription:
      'Highly-rated field service management software, including an end-to-end platform for large-scale companies & landscape scheduling software for growing contractors.',
    siteLanguage: 'en',
    facebook: 'YourAspireSoftware',
    twiter: '@Your_Aspire',
  },
  trailingSlash: 'never',
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'preview.contentful.com',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5ZMVKVB',
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true,
      },
    },
  ],
};

export default config;
