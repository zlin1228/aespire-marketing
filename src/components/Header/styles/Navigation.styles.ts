import { cva } from 'class-variance-authority';

export const navItemStyles = cva(
  ['header-nav-item', 'flex', 'h-full', 'items-center', 'gap-2', 'text-md', 'font-semibold'],
  {
    variants: {
      active: {
        true: ['active'],
        false: [],
      },
    },
  },
);
