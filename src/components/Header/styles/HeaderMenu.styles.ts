import { cva } from 'class-variance-authority';

export const menuContainerStyles = cva(
  [
    'absolute',
    'top-[44px]',
    'left-1/2',
    'z-50',
    'w-fit',
    'max-w-[calc(100vw_-_10%)]',
    'translate-x-[-50%]',
    'bg-transparent',
    'flex',
  ],
  {
    variants: {
      hasSubMenu: {
        true: ['top-[53px]'],
        false: ['top-[45.5px]'],
      },
    },
  },
);
