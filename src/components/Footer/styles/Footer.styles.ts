import { cva } from 'class-variance-authority';

export const footerContainerStyles = cva(['flex', 'flex-col', 'gap-12']);

export const footerHeader = cva(['flex', 'justify-between', 'items-start', 'xl:flex-row', 'flex-col', 'gap-12']);

export const simpleFooterStyles = cva(['flex', 'items-center', 'justify-center']);

export const footerFormContainer = cva([
  'footer-form-container',
  'p-4',
  'bg-blue-800',
  'text-md',
  'font-semibold',
  'text-white',
  'w-full',
  'xl:w-[384px]',
  'flex',
  'flex-col',
  'gap-4',
]);
