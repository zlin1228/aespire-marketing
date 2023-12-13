import { cva } from 'class-variance-authority';

export const cardStyles = cva(['relative', 'transition-colors'], {
  variants: {
    layout: {
      horizontal: ['xl:min-h-[157px]', 'grid', 'grid-cols-[280px_1fr]', 'items-center'],
      vertical: ['flex', 'flex-col', 'gap-6', 'h-full'],
    },
    theme: {
      light: ['bg-white'],
      'primary-700': ['bg-primary-700', 'hover:bg-primary-600'],
    },
    showImage: {
      true: [],
      false: ['!flex'],
    },
  },
});

export const tagsContainerStyles = cva(
  ['w-fit', 'max-w-[100px]', 'overflow-scroll', 'bg-primary-600', 'px-[10px]', 'py-[2px]', 'no-scrollbar'],
  {
    variants: {
      backgroundColor: {
        'primary-600': ['bg-primary-600'],
        'gray-100': ['bg-gray-100'],
        'gray-900': ['bg-gray-900'],
        'blue-50': ['bg-blue-50'],
        'green-25': ['bg-green-25'],
        'green-600': ['bg-green-600'],
        'yellow-400': ['bg-yellow-400'],
      },
      position: {
        absolute: ['absolute', '-left-3', 'top-4'],
        relative: ['relative'],
      },
    },
  },
);

export const tagStyles = cva(['text-sm', 'font-semibold', 'text-white', 'whitespace-nowrap'], {
  variants: {
    textColor: {
      white: ['text-white'],
      'gray-700': ['text-gray-700'],
      'gray-900': ['text-gray-900'],
      'blue-600': ['text-blue-600'],
      'green-700': ['text-green-700'],
    },
  },
});

export const imageStyles = cva(['object-cover', 'aspect-video', 'w-full']);

export const cardBodyStyles = cva(
  ['w-full', 'flex', 'flex-col', 'items-start', 'justify-between', 'h-full', 'gap-2', 'md:gap-8'],
  {
    variants: {
      layout: {
        horizontal: ['justify-center', 'px-6', 'p-b-4'],
        vertical: [],
      },
      padding: {
        none: [],
        sm: ['px-4', 'pb-4'],
      },
      showImage: {
        true: [],
        false: ['py-4'],
      },
    },
  },
);

export const cardTextStyles = cva(['flex', 'flex-col'], {
  variants: {
    layout: {
      horizontal: ['gap-2'],
      vertical: ['gap-4'],
    },
  },
});

export const infoTextStyles = cva(
  ['flex', 'items-center', 'gap-3', 'overflow-auto', 'text-sm', 'font-semibold', 'xl:text-sm'],
  {
    variants: {
      theme: {
        light: ['text-gray-700'],
        'primary-700': ['text-gray-200'],
      },
    },
  },
);

export const spacerStyles = cva(['block', 'w-1', 'min-w-[4px]', 'h-1', 'min-h-[4px]'], {
  variants: {
    theme: {
      light: ['bg-green-600'],
      'primary-700': ['bg-primary-200'],
    },
  },
});

export const titleStyles = cva(['text-lg', 'font-bold', 'text-gray-900', 'sm:text-xl'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      'primary-700': ['text-white'],
    },
  },
});

export const summaryStyles = cva(['[&>*]:text-gray-700', '[&>*]:text-md'], {
  variants: {
    theme: {
      light: ['[&>*]:text-gray-700'],
      'primary-700': ['[&>*]:text-gray-200'],
    },
  },
});
