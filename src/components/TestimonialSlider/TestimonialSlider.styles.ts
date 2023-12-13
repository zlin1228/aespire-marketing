import { cva } from 'class-variance-authority';

import LightBackground from 'components/TestimonialSlider/assets/background-gray.png';
import GreenBackground from 'components/TestimonialSlider/assets/background-green.png';

const backgroundMap: Record<string, string> = {
  Dark: GreenBackground,
  Light: LightBackground,
};

export const getBackground = (background?: string) => backgroundMap[background || 'Dark'];

const testimonialSliderStyles = cva(['flex', 'flex-col', 'gap-6'], {
  variants: {
    cursor: {
      grab: 'cursor-grab',
      auto: 'cursor-auto',
    },
  },
});

export const testimonialCardWrapper = cva(['sm:pl-0']);

export const testimonialCard = cva(['min-h-[420px]', 'flex', 'flex-col', 'justify-between', 'pt-6', 'px-6', 'pb-10']);

export const testimonialCardRow = cva(['flex'], {
  variants: {
    type: {
      content: ['flex-col', 'gap-5'],
      top: ['flex-row', 'justify-between'],
      stars: ['flex-row', 'w-fit'],
      author: [],
    },
  },
});

export const testimonialCardDate = cva(['text-md', 'font-semibold'], {
  variants: {
    theme: {
      light: ['text-blue-600'],
      dark: ['text-primary-100'],
    },
  },
});

export const testimonialCardContent = cva(['text-xl', 'font-normal'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});

export const testimonialCardContentContainer = cva(['relative', 'w-fit', 'h-fit']);

export const testimonialCardQuote = cva([], {
  variants: {
    type: {
      before: ['absolute', 'top-2', '-left-4'],
      after: ['inline', 'rotate-180', '-translate-y-1', 'translate-x-1'],
    },
    theme: {
      light: ['fill-gray-900'],
      dark: ['fill-white'],
    },
  },
});

export const testimonialButtonStyles = cva([
  'flex',
  'h-10',
  'w-10',
  'items-center',
  'justify-center',
  'bg-gray-900',
  'transition',
  'hover:bg-gray-300',
  'sm:h-11',
  'sm:w-11',
  'xl:h-14',
  'xl:w-14',
]);

export const testimonialButtonIconStyles = cva(['fill-white'], {
  variants: {
    icon: {
      prev: ['-translate-x-[2px]'],
      next: ['translate-x-[2px]'],
    },
  },
});

export const testimonialDotStyles = cva(['h-2', 'w-2', 'bg-gray-300', 'transition', 'group-hover:bg-primary-600'], {
  variants: {
    states: {
      active: ['bg-primary-600'],
    },
  },
});

export default testimonialSliderStyles;
