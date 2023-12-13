import { cva } from 'class-variance-authority';

const announcementBarStyles = cva(['w-full', 'h-fit', 'py-3', 'flex', 'justify-center', 'items-center'], {
  variants: {
    background: {
      blue500: ['bg-blue-500'],
      gray900: ['bg-gray-900'],
      gray200: ['bg-gray-200'],
    },
  },
});

export const announcementBarContainer = cva([
  'relative',
  'sm:max-w-sm',
  'md:max-w-md',
  'lg:max-w-lg',
  'xl:max-w-xl',
  'px-4',
  'sm:px-8',
  'flex',
  'flex-col',
  'md:flex-row',
  'gap-4',
  'md:items-center',
]);

export const announcementBarIcon = cva(['p-2'], {
  variants: {
    background: {
      blue500: ['fill-white', 'bg-blue-600'],
      gray900: ['fill-white', 'bg-gray-700'],
      gray200: ['fill-gray-600', 'bg-white'],
    },
  },
});

export const announcementBarClose = cva(['md:absolute', '-right-4', 'md:-right-8', 'lg:-right-16']);

export const announcementBarCloseIcon = cva([], {
  variants: {
    theme: {
      light: ['fill-gray-900'],
      dark: ['fill-white'],
    },
  },
});

export const announcementBarHeading = cva(['text-md', 'font-bold'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});

export const announcementBarSubhead = cva(['text-md', 'font-normal'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-gray-25', '[&_a]:text-white', '[&_a]:underline'],
    },
  },
});
export const announcementBarButtonContainer = cva(['flex', 'flex-col', 'md:flex-row', 'h-min']);

export default announcementBarStyles;
