import { motion } from 'framer-motion';
import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';

import HeaderLink from 'components/Header/components/HeaderLink';
import {
  listStyles,
  menuButtonStyles,
  menuColumnStyles,
  menuColumnWrapperStyles,
  menuLabelStyles,
} from 'components/Header/styles/HeaderMenuColumn.styles';
import { getLayout, getMenuType } from 'components/Header/utils/functions';

import type { ContentfulItemMenu } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { Dispatch, SetStateAction } from 'react';

interface HeaderMenuColumnProps
  extends Omit<ContentfulItemMenu, 'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'> {
  activeSubMenu: number | null;
  setActiveSubMenu: Dispatch<SetStateAction<number | null>>;
}

const HeaderMenuColumn: FC<HeaderMenuColumnProps> = ({
  __typename,
  links,
  label,
  menuButton,
  activeSubMenu,
  setActiveSubMenu,
}) => {
  const layout = getLayout(links, __typename);
  const menuType = getMenuType(links);

  return (
    <div className={twMerge(menuColumnStyles())}>
      <div className={twMerge(menuColumnWrapperStyles({ menuType }))}>
        {menuType === 'links' && (
          <div className="flex w-full items-center justify-between">
            <p className={twMerge(menuLabelStyles())}>{label}</p>
            {menuButton && <Button {...(menuButton as ButtonProps)} className={twMerge(menuButtonStyles())} />}
          </div>
        )}
        <ul className={twMerge(listStyles({ layout }))}>
          {links?.map((item, index) => {
            if (!item) {
              return null;
            }

            switch (item?.__typename) {
              case 'ContentfulItemLink':
                return (
                  <li key={item.id} className="min-w-[176px]">
                    <HeaderLink {...item} />
                  </li>
                );
              case 'ContentfulItemMenu':
                return (
                  <div key={item.id} className="relative">
                    <button
                      className="relative z-10 flex w-full max-w-[340px] flex-col items-start gap-[10px] bg-transparent px-5 py-[30px] text-left"
                      onClick={() => setActiveSubMenu(index)}
                    >
                      {index === activeSubMenu ? (
                        <motion.div
                          className="header-sub-menu-psuedo-el absolute inset-0 -z-10 bg-white shadow-sm"
                          layoutId="background"
                        />
                      ) : null}
                      <p className="text-md font-semibold text-gray-900">{item.label}</p>
                      <p className="text-sm font-normal text-gray-700">{item.description}</p>
                    </button>
                  </div>
                );
              default:
                return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenuColumn;
