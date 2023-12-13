import { cva } from 'class-variance-authority';

export const containerStyles = cva(['quote-slider', 'flex', 'flex-col', 'gap-6'], {
  variants: {
    cursor: {
      grab: 'cursor-grab',
      auto: 'cursor-auto',
    },
  },
});
