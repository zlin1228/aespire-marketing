import { cva } from 'class-variance-authority';

const formStyles = cva(['flex', 'flex-col', 'gap-4', 'w-full', 'max-w-full']);

export const headingContent = cva(['font-extrabold', 'text-display-xs-tablet', 'lg:text-display-xs', 'text-gray-900']);

export const headingSubhead = cva(['font-normal', 'text-gray-700', 'text-md']);

export default formStyles;
