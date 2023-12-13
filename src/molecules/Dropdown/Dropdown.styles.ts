import { cva } from 'class-variance-authority';

const dropdownStyles = cva(
  [
    'w-full',
    'relative',
    'flex',
    'px-[14px]',
    'py-[10px]',
    'text-md',
    'font-semibold',
    'text-gray-900',
    'items-center',
    'text-left',
    'justify-between',
    'bg-white',
    'shadow-xs',
  ],
  {
    variants: {
      type: {
        menu: ['w-fit', 'border', 'border-solid', 'border-gray-900'],
        input: ['w-full', 'border', 'border-solid', 'border-gray-200'],
        filter: ['w-full', 'border', 'border-solid', 'border-gray-300', 'text-gray-500', 'font-normal'],
      },
    },
  },
);

export const dropdownChevron = cva(['mt-1', 'origin-center', 'transition-transform', 'duration-300', 'ease-in-out'], {
  variants: {
    type: {
      menu: ['fill-gray-900'],
      input: ['fill-primary-600'],
      filter: ['fill-primary-600'],
    },
    isOpen: {
      true: ['rotate-0'],
      false: ['rotate-180'],
    },
  },
});

export const popupContainerStyles = cva(
  [
    'absolute',
    'top-12',
    'left-0',
    'h-fit',
    'w-56',
    'border',
    'border-gray-200',
    'shadow-lg',
    'bg-white',
    'z-10',
    'w-full',
    'max-h-96',
    'overflow-y-auto',
  ],
  {
    variants: {
      isOpen: {
        true: ['visible', 'opacity-100'],
        false: ['hidden', 'opacity-0'],
      },
    },
  },
);

export const dropdownItemStyles = cva(
  ['flex', 'w-full', 'items-center', 'justify-start', 'text-left', 'gap-3', 'px-4', 'py-2', 'text-sm', 'font-normal'],
  {
    variants: {
      isActive: {
        true: ['bg-primary-25'],
        false: ['bg-white', 'hover:bg-primary-25'],
      },
    },
  },
);

export default dropdownStyles;
