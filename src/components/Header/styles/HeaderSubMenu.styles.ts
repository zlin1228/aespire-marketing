import { cva } from 'class-variance-authority';

export const subMenuStyles = cva(['flex', 'h-auto', 'w-max', 'flex-col', 'gap-4', 'bg-white', 'p-8']);

export const subMenuLabelStyles = cva(['text-md', 'font-bold', 'text-gray-700']);

export const subMenuButtonStyles = cva([
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
