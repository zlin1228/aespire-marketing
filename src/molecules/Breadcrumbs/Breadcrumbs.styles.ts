import { cva } from 'class-variance-authority';

const breadcrumbsStyles = cva(['flex', 'gap-2', 'items-center', 'z-40', 'relative']);

export const breadcrumbsLink = cva(['text-sm', 'font-semibold'], {
  variants: {
    type: {
      lightStandard: ['text-gray-900', 'fill-gray-900'],
      darkStandard: ['text-white', 'fill-white'],
      lightActive: ['text-primary-700', 'fill-primary-700', 'cursor-default'],
      darkActive: ['text-primary-100', 'fill-primary-100', 'cursor-default'],
    },
  },
});

export const breadcrumbsChevron = cva([], {
  variants: {
    isDarkTheme: {
      true: ['fill-gray-400'],
      false: ['fill-gray-500'],
    },
  },
});
export default breadcrumbsStyles;
