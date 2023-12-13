import { cva } from 'class-variance-authority';

const formContainer = cva(['form-wrapper', 'relative', 'p-8', 'flex', 'flex-col', 'gap-4', 'max-w-sm', 'bg-white']);

export const formIconContainer = cva(['bg-primary-600', 'p-3', 'w-fit', 'h-auto']);
export const formIcon = cva(['stroke-white']);

export const formContent = cva([], {
  variants: {
    type: {
      heading: ['text-display-xs', 'font-extrabold', 'text-gray-900'],
      subheading: ['md:text-lg', 'sm:text-md', 'font-normal', 'text-gray-700'],
    },
  },
});

export const formBar = cva(['absolute', 'bottom-0', 'left-0', 'right-0', 'h-2', 'w-full', 'bg-primary-600']);
export default formContainer;
