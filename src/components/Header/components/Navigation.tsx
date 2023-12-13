import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import HeaderMenu from 'components/Header/components/HeaderMenu';
import { navItemStyles } from 'components/Header/styles/Navigation.styles';
import { handleMouseOver } from 'components/Header/utils/functions';

import { contentfulProps } from 'utils/emptyTypes';

import type { HeaderProps } from '..';
import type { Dispatch, FC, SetStateAction } from 'react';

interface NavigationProps {
  menus: HeaderProps['menus'];
  activeDropdownIndex: number | null;
  setActiveDropdownIndex: Dispatch<SetStateAction<number | null>>;
}

const Navigation: FC<NavigationProps> = ({ menus, activeDropdownIndex, setActiveDropdownIndex }) => (
  <nav className="flex">
    <ul className="flex h-full gap-10">
      {menus?.map((menu, index) => {
        if (!menu) {
          return null;
        }

        const { id, label, link, links } = menu;

        const hasSubMenu =
          (links && links?.filter(item => item?.__typename === 'ContentfulItemMenu')?.length > 0) || index === 0;

        return (
          <li key={id} className={`h-full ${!hasSubMenu ? 'xl:relative' : ''}`}>
            {link ? (
              <Button
                href={{
                  href: link,
                  ...contentfulProps,
                }}
                className={twMerge(navItemStyles({ active: activeDropdownIndex === index }))}
                onMouseEnter={() => handleMouseOver(index, setActiveDropdownIndex)}
                onMouseLeave={() => setActiveDropdownIndex(null)}
              >
                {label}
                {links?.length && <Icon icon="chevron-down" size={24} className="fill-gray-900" />}
              </Button>
            ) : (
              <button
                type="button"
                className={twMerge(navItemStyles({ active: activeDropdownIndex === index }))}
                onMouseEnter={() => handleMouseOver(index, setActiveDropdownIndex)}
                onMouseLeave={() => setActiveDropdownIndex(null)}
              >
                {label}
                {links?.length && <Icon icon="chevron-down" size={24} className="fill-gray-900" />}
              </button>
            )}
            {activeDropdownIndex === index && (
              <HeaderMenu
                {...menu}
                index={index}
                hasSubMenu={hasSubMenu}
                setActiveDropdownIndex={setActiveDropdownIndex}
              />
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Navigation;
