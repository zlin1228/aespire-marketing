/* eslint-disable @typescript-eslint/no-var-requires */
const { default: backgroundImages } = require('./src/theme/colors/backgroundImages');
const { default: colors } = require('./src/theme/colors/colors');
const { default: gradients } = require('./src/theme/colors/gradients');
const { default: blurs } = require('./src/theme/shadows/blurs');
const { default: boxShadow } = require('./src/theme/shadows/boxShadow');
const { default: screens } = require('./src/theme/spacing/screens');
const { default: spacing, maxWidth } = require('./src/theme/spacing/spacing');
const { fontFamily, fontSize } = require('./src/theme/typography/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors,
    gradients,
    fontFamily,
    fontSize,
    boxShadow,
    blurs,
    screens,
    extend: {
      spacing,
      maxWidth,
      content: {
        check: 'url("/static/icons/forms/check.svg")',
        radio: 'url("/static/icons/forms/radio.svg")',
      },
      backgroundImage: {
        ...gradients,
        // ...backgroundImages,
      },
    },
  },
  plugins: [],
};
