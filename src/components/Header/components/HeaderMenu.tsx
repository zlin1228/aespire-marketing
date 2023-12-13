import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import HeaderMenuColumn from 'components/Header/components/HeaderMenuColumn';
import HeaderSubMenu from 'components/Header/components/HeaderSubMenu';
import { menuContainerStyles } from 'components/Header/styles/HeaderMenu.styles';
import { handleMouseOver } from 'components/Header/utils/functions';

import type { ContentfulItemMenu } from 'graphqlTypes';
import type { Dispatch, FC } from 'react';

export interface HeaderMenuProps
  extends Omit<ContentfulItemMenu, 'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'> {
  index: number;
  hasSubMenu: boolean;
  setActiveDropdownIndex: Dispatch<React.SetStateAction<number | null>>;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ index, label, links, menuButton, hasSubMenu, setActiveDropdownIndex }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(0);

  const subMenus = links?.filter(link => link?.__typename === 'ContentfulItemMenu');

  return (
    <div
      className={twMerge(menuContainerStyles({ hasSubMenu }))}
      onMouseEnter={() => handleMouseOver(index, setActiveDropdownIndex)}
      onMouseLeave={() => setActiveDropdownIndex(null)}
    >
      <div className="flex w-full">
        <HeaderMenuColumn
          links={links}
          label={label}
          menuButton={menuButton}
          activeSubMenu={activeSubMenu}
          setActiveSubMenu={setActiveSubMenu}
        />
        <div className="pt-6">
          <div className="flex w-full shadow-lg">
            {subMenus?.map((subMenu, idx) => {
              if (idx !== activeSubMenu || subMenu?.__typename !== 'ContentfulItemMenu') {
                return null;
              }

              const { links: subMenuColumn } = subMenu;

              return subMenuColumn?.map(column => {
                if (!column || column?.__typename !== 'ContentfulItemMenu') {
                  return null;
                }

                return <HeaderSubMenu key={column.id} {...column} />;
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
