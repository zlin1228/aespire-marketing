import { cva } from 'class-variance-authority';

export const containerStyles = cva(['flex', 'flex-col', 'gap-6', 'px-3', 'sm:px-14', 'lg:px-6'], {
  variants: {
    cursor: {
      grab: 'cursor-grab',
      auto: 'cursor-auto',
    },
  },
});
