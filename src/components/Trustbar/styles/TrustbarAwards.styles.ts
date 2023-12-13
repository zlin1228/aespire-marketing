import { cva } from 'class-variance-authority';

export const containerStyles = cva([
  'grid',
  'grid-cols-2',
  'place-items-center',
  'gap-6',
  'sm:grid-cols-3',
  'sm:gap-x-16',
  'xl:grid-cols-6',
  'xl:gap-10',
]);
