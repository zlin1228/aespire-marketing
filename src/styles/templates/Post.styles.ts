import { cva } from 'class-variance-authority';

export const contentStyles = cva([
  'flex',
  'flex-col-reverse',
  'gap-8',
  'xl:grid',
  'xl:grid-cols-[310px_1fr]',
  'xl:gap-[104px]',
]);

export const sidebarStyles = cva(['flex', 'flex-col', 'gap-8', 'xl:gap-10']);

export const richTextStyles = cva([
  'flex',
  'flex-col',
  'gap-8',
  '[&>li]:text-lg',
  '[&>ul]:text-lg',
  '[&>ul]:text-gray-700',
  '[&>p]:text-lg',
  '[&>p]:text-gray-700',
]);
