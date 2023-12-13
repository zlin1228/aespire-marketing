import { cva } from 'class-variance-authority';

const buttonStyles = cva([
  'sticky',
  'left-full',
  'top-[90%]',
  'z-10',
  'flex',
  'h-10',
  'w-10',
  'items-center',
  'justify-center',
  'border-[1px]',
  'border-solid',
  'border-gray-900',
  'bg-white',
  'p-[10px]',
  'shadow-md',
]);

export default buttonStyles;
