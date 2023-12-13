/* eslint-disable tailwindcss/no-arbitrary-value */
import FooterGroup from 'components/Footer/components/FooterGroup';
import { sortFooterMenus } from 'components/Footer/utils/functions';

import type { FooterProps } from '..';
import type { FooterGroupProps } from 'components/Footer/components/FooterGroup';
import type { FC } from 'react';

interface FooterColumnsProps {
  menus: FooterProps['menus'];
  contactMenu: FooterProps['contactMenu'];
  socialsMenu: FooterProps['socialsMenu'];
}

const FooterColumns: FC<FooterColumnsProps> = ({ menus, contactMenu, socialsMenu }) => {
  const sortedMenus = sortFooterMenus({ menus, contactMenu, socialsMenu });

  return (
    <div className="grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 xl:grid-cols-[178px_178px_178px_178px_1fr] xl:gap-8">
      {sortedMenus.map((menu, idx) => {
        if (!menu) {
          return null;
        }

        const { columns } = menu;

        return (
          <div key={`footer-column-${idx}`} className="flex flex-col gap-18">
            {columns.map(column => {
              if (!column) {
                return null;
              }

              return <FooterGroup key={column.id} {...(column as FooterGroupProps)} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
