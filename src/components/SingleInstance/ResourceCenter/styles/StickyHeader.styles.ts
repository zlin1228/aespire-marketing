import { cva } from 'class-variance-authority';

export const stickyBarContainerStyles = cva(
  ['sticky', 'xl:top-[148px]', 'top-[72px]', 'z-50', 'h-fit', 'py-4', 'transition-all', 'duration-75'],
  {
    variants: {
      hasAnnouncemnetBar: {
        true: ['xl:top-[220px]'],
        false: [],
      },
      isScrolled: {
        true: ['shadow-md', 'bg-gray-50'],
        false: ['shadow-none', 'bg-transparent'],
      },
    },
  },
);

export const stickyBarWrapperStyles = cva([
  'px-4',
  'sm:px-8',
  'max-w-full',
  'md:max-w-md',
  'lg:max-w-full',
  'xl:max-w-xl',
  'mx-auto',
  'relative',
  'flex',
  'flex-col',
  'gap-4',
  'xl:flex-row',
  'xl:items-end',
  'xl:justify-between',
]);

export const buttonStyles = cva([
  'px-5',
  'py-3',
  'text-gray-900',
  'transition-all',
  'duration-300',
  'hover:bg-gray-900',
  'hover:text-white',
  'text-md',
  'font-semibold',
  'cursor-pointer',
]);
