import { cva } from 'class-variance-authority';

export const containerStyles = cva([
  'flex',
  'flex-col',
  'gap-8',
  'md:gap-14',
  'xl:gap-20',
  'lg:py-24',
  'md:py-18',
  'py-12',
  'overflow-hidden',
]);

export const carouselWrapperStyles = cva([
  'px-4',
  'sm:px-8',
  'max-w-full',
  'md:max-w-md',
  'lg:max-w-full',
  'xl:max-w-xl',
  'mx-auto',
  'relative',
]);
