export const fontFamily = {
  Montserrat: [
    'Montserrat',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
  ],
};

const desktopFontSize = {
  'display-2xl': [
    '4.5rem',
    {
      lineHeight: '1.25',
      letterSpacing: '-0.02em',
    },
  ],
  'display-xl': [
    '3.75rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'display-lg': [
    '3rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'display-md': [
    '2.25rem',
    {
      lineHeight: '1.22',
      letterSpacing: '-0.02em',
    },
  ],
  'display-sm': ['1.875rem', '1.26'],
  'display-xs': ['1.5rem', '1.33'],
  eyebrow: [
    '1rem',
    {
      lineHeight: '1.2',
      letterSpacing: '0.2rem',
    },
  ],
  'eyebrow-mobile': [
    '0.75rem',
    {
      lineHeight: '1',
      letterSpacing: '0.15rem',
    },
  ],
  xl: ['1.25rem', '1.5'],
  lg: ['1.125rem', '1.55'],
  md: ['1rem', '1.5'],
  sm: ['0.875rem', '1.42'],
  xs: ['0.75rem', '1.5'],
};

const tabletFontSize = {
  'display-2xl-tablet': [
    '4rem',
    {
      lineHeight: '1.25',
      letterSpacing: '-0.02em',
    },
  ],
  'display-xl-tablet': [
    '3.125rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'display-lg-tablet': [
    '2.5rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'display-md-tablet': [
    '2rem',
    {
      lineHeight: '1.22',
      letterSpacing: '-0.02em',
    },
  ],
  'display-sm-tablet': ['1.625rem', '1.26'],
  'display-xs-tablet': ['1.375rem', '1.33'],
};

const mobileFontSize = {
  'display-2xl-mobile': [
    '3rem',
    {
      lineHeight: '1.25',
      letterSpacing: '-0.02em',
    },
  ],
  'display-xl-mobile': [
    '2.5rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'display-lg-mobile': [
    '2.188rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'display-md-mobile': [
    '1.875rem',
    {
      lineHeight: '1.22',
      letterSpacing: '-0.02em',
    },
  ],
  'display-sm-mobile': ['1.563rem', '1.26'],
  'display-xs-mobile': ['1.25rem', '1.33'],
};

const richTextFontSize = {
  'rtc-h1': [
    '3.052rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'rtc-h2': [
    '2rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'rtc-h3': [
    '1.728rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'rtc-h4': [
    '1.44rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
  ],
  'rtc-h5': ['1.2rem', '1.26'],
  'rtc-h6': ['1rem', '1.33'],
};

export const fontSize = {
  ...desktopFontSize,
  ...tabletFontSize,
  ...mobileFontSize,
  ...richTextFontSize,
};
