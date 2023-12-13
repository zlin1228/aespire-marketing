/* eslint-disable tailwindcss/no-arbitrary-value */
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import HeaderLink from 'components/Header/components/HeaderLink';
import { mobileMenuButtonStyles } from 'components/Header/styles/MobileMenu.styles';
import {
  mobileMenuListLabelStyles,
  mobileMenuListStyles,
  mobileSubMenuListStyles,
} from 'components/Header/styles/MobileMenuList.styles';

import type { ContentfulItemMenu } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

interface MobileMenuListProps {
  activeMobileMenu: ContentfulItemMenu | null;
  menuStack: ContentfulItemMenu[];
  setMobileSubMenu: (menu: ContentfulItemMenu) => void;
}

const MobileMenuList: FC<MobileMenuListProps> = ({ activeMobileMenu, menuStack, setMobileSubMenu }) => {
  const listLayout = activeMobileMenu?.links && activeMobileMenu?.links?.length > 5 ? 'grid' : 'column';

  return (
    <ul className={twMerge(mobileMenuListStyles({ layout: listLayout }))}>
      {activeMobileMenu?.links?.map(link => {
        if (!link) {
          return null;
        }

        switch (link.__typename) {
          case 'ContentfulItemMenu':
            return (
              <>
                <li key={link.id} className="flex w-full items-center justify-between">
                  <button
                    type="button"
                    className="w-full py-2 text-left"
                    onClick={() => setMobileSubMenu(link as ContentfulItemMenu)}
                    disabled={menuStack && menuStack.length >= 2}
                  >
                    <div className="flex items-center justify-between">
                      <span className={twMerge(mobileMenuListLabelStyles())}>{link.label}</span>
                      {menuStack && menuStack.length < 2 && (
                        <Icon icon="chevron-right" size={24} className="fill-gray-900" />
                      )}
                    </div>
                    <span className="text-sm font-normal text-gray-700">{link.description}</span>
                  </button>
                  <div className="whitespace-nowrap">
                    {link.menuButton && (
                      <Button {...(link.menuButton as ButtonProps)} className={twMerge(mobileMenuButtonStyles())} />
                    )}
                  </div>
                </li>
                <ul
                  className={twMerge(
                    mobileSubMenuListStyles({ layout: link?.links && link?.links?.length > 5 ? 'grid' : 'column' }),
                  )}
                >
                  {link.links?.map(item => {
                    if (!item || item.__typename !== 'ContentfulItemLink') {
                      return null;
                    }

                    return (
                      <li key={link.id} className="h-fit">
                        <HeaderLink {...item} />
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          case 'ContentfulItemLink':
            return (
              <li key={link.id} className="h-fit">
                <HeaderLink {...link} />
              </li>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default MobileMenuList;
