import { cva } from 'class-variance-authority';

export const menuColumnStyles = cva(['pt-6']);

export const menuColumnWrapperStyles = cva(
  ['flex', 'h-full', 'w-max', 'flex-col', 'gap-4', 'bg-white', 'p-8', 'shadow-lg'],
  {
    variants: {
      menuType: {
        links: ['bg-white'],
        menu: ['bg-gray-50', 'p-[10px]'],
      },
    },
  },
);

export const menuLabelStyles = cva(['text-md', 'font-bold', 'text-gray-700']);

export const menuButtonStyles = cva([
  'border-[1px]',
  'border-gray-400',
  'bg-white',
  'px-4',
  'py-[6px]',
  'text-sm',
  'font-semibold',
  'text-gray-500',
  'transition-all',
  'hover:bg-blue-50',
]);

export const listStyles = cva(['h-auto', 'm-0', 'p-0'], {
  variants: {
    layout: {
      stacked: ['flex', 'flex-col', 'gap-3'],
      sideBySide: ['grid', 'grid-cols-2', 'gap-x-8', 'gap-y-3'],
    },
  },
});
