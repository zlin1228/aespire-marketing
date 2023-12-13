import type { FooterProps } from '..';

interface SortFooterMenus {
  menus: FooterProps['menus'];
  contactMenu: FooterProps['contactMenu'];
  socialsMenu: FooterProps['socialsMenu'];
}

export const sortFooterMenus = ({ menus, contactMenu, socialsMenu }: SortFooterMenus) => {
  if (!menus) {
    return [];
  }

  return [
    {
      columns: menus.slice(0, 2).map(menu => ({ layout: 'standard', ...menu })),
    },
    ...menus.slice(2).map(menu => ({ columns: [{ layout: 'standard', ...menu }] })),

    {
      columns: [
        contactMenu && {
          layout: 'standard',
          ...contactMenu,
        },
        socialsMenu && {
          layout: 'social',
          ...socialsMenu,
        },
      ],
    },
  ];
};
