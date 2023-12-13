import { cva } from 'class-variance-authority';

import type getTheme from 'utils/getTheme';

const overlayLeftDarkGradient = 'linear-gradient(90deg, #00342F 27.6%, rgba(0, 52, 47, 0) 100%)';
const overlayRightDarkGradient = 'linear-gradient(270deg, #00342F 27.6%, rgba(0, 52, 47, 0) 100%)';
const overlayLeftLightGradient = 'linear-gradient(90deg, #FEFBF4 27.6%, rgba(254, 251, 244, 0) 100%)';
const overlayRightLightGradient = 'linear-gradient(270deg, #FEFBF4 27.6%, rgba(254, 251, 244, 0) 100%)';

export const containerStyles = cva(['relative', 'flex', 'items-center', 'justify-center', 'overflow-hidden']);

export const wrapperStyles = cva(['relative', 'flex', 'items-center', 'gap-8']);

export const overlayLeftStyles = cva(['absolute', 'inset-y-0', 'z-10', 'h-full', 'w-11', 'left-0', 'right-auto'], {
  variants: {
    theme: {
      light: ['bg-trustbar-overlay-left-light'],
      dark: ['bg-trustbar-overlay-left-dark'],
    },
  },
});

export const overlayRightStyles = cva(['absolute', 'inset-y-0', 'z-10', 'h-full', 'w-11', 'right-0', 'left-auto'], {
  variants: {
    theme: {
      light: ['bg-trustbar-overlay-right-light'],
      dark: ['bg-trustbar-overlay-right-dark'],
    },
  },
});

export const imageStyles = cva(['h-10', 'w-full', 'min-w-[120px]', 'object-contain']);

export const overlayLeftGradient = (theme: ReturnType<typeof getTheme>) =>
  theme === 'dark' ? overlayLeftDarkGradient : overlayLeftLightGradient;

export const overlayRightGradient = (theme: ReturnType<typeof getTheme>) =>
  theme === 'dark' ? overlayRightDarkGradient : overlayRightLightGradient;
