import { cva } from 'class-variance-authority';

const sidebarStyles = cva(['flex', 'flex-col', 'gap-4', 'w-full', 'lg:max-w-[312px]', 'lg:min-w-[312px]']);

export const sidebarStickyStyles = cva(['flex', 'flex-col', 'gap-4', 'w-full', 'sticky', 'top-28']);

export default sidebarStyles;
