import { cva } from 'class-variance-authority';

const sectionStyles = cva(['flex', 'flex-col', 'justify-center', 'items-center', 'z-10', 'w-full'], {
  variants: {
    background: {
      white: ['bg-white'],
      black: ['bg-black'],
      primary25: ['bg-primary-25'],
      yellow25: ['bg-yellow-25'],
      gray50: ['bg-gray-50'],
      gray100: ['bg-gray-100'],
      gray200: ['bg-gray-200'],
      blue50: ['bg-blue-50'],
      primary800: ['bg-primary-800'],
      blue900: ['bg-blue-900'],
      gray900: ['bg-gray-900'],
      transparent: ['bg-transparent'],
      textureDark: ['bg-texture-dark', 'bg-no-repeat', 'bg-cover'],
      textureLight: ['bg-texture-light', 'bg-no-repeat', 'bg-cover'],
      textureGreen: ['bg-texture-green', 'bg-no-repeat', 'bg-cover'],
      none: [],
    },
  },
});

export const sectionWrapper = cva(
  ['container', 'px-4', 'sm:px-8', 'max-w-full', 'md:max-w-md', 'lg:max-w-full', 'xl:max-w-xl', 'relative'],
  {
    variants: {
      contained: {
        true: ['max-w-lg'],
        false: [],
      },
      fullWidth: {
        true: ['w-full', 'max-w-full'],
        false: [],
      },
      padding: {
        large: ['lg:py-24', 'md:py-18', 'py-12'],
        small: ['lg:py-12', 'md:py-8', 'py-6'],
        none: ['p-0', 'md:p-0', 'lg:p-0'],
      },
    },
  },
);

export default sectionStyles;
