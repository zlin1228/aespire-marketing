import { cva } from 'class-variance-authority';

const paginationContainer = cva(['flex', 'gap-4']);

export const paginationDot = cva(['w-2', 'h-2', 'cursor-pointer'], {
  variants: {
    active: {
      true: ['bg-primary-600', 'cursor-auto'],
      false: ['bg-gray-300', 'hover:bg-primary-300'],
    },
  },
});

export default paginationContainer;
