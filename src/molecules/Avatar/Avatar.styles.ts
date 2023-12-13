import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import type { avatarVariants } from 'molecules/Avatar/index';

const nameStyles = cva(['text-lg', 'font-bold'], {
  variants: {
    theme: {
      Light: ['text-gray-900'],
      Dark: ['text-white'],
    },
  },
});

const testimonialNameStyles = cva(['text-md', 'font-bold'], {
  variants: {
    theme: {
      Light: ['text-gray-900'],
      Dark: ['text-white'],
    },
  },
});

const textStyles = cva(['text-md'], {
  variants: {
    theme: {
      Light: ['text-gray-700'],
      Dark: ['text-primary-50'],
    },
  },
});

const testimonialTextStyles = cva(['text-sm'], {
  variants: {
    theme: {
      Light: ['text-gray-700'],
      Dark: ['text-gray-200'],
    },
  },
});

export const nameClassName = (theme: string | undefined, variant: avatarVariants) =>
  variant === 'testimonial'
    ? twMerge(testimonialNameStyles({ theme: theme === 'Light' ? 'Light' : 'Dark' }))
    : twMerge(nameStyles({ theme: theme === 'Light' ? 'Light' : 'Dark' }));

export const textClassName = (theme: string | undefined, variant: avatarVariants) =>
  variant === 'testimonial'
    ? twMerge(testimonialTextStyles({ theme: theme === 'Light' ? 'Light' : 'Dark' }))
    : twMerge(textStyles({ theme: theme === 'Light' ? 'Light' : 'Dark' }));
