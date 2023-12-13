import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';

import HeaderLink from 'components/Header/components/HeaderLink';
import { subMenuButtonStyles, subMenuLabelStyles, subMenuStyles } from 'components/Header/styles/HeaderSubMenu.styles';

import type { ContentfulItemMenu } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

const HeaderSubMenu: FC<ContentfulItemMenu> = ({ id, label, links, menuButton }) => (
  <div key={id} className={twMerge(subMenuStyles())}>
    <div className="flex w-full items-center justify-between">
      <p className={twMerge(subMenuLabelStyles())}>{label}</p>
      {menuButton && <Button {...(menuButton as ButtonProps)} className={twMerge(subMenuButtonStyles())} />}
    </div>
    <ul className="flex flex-col gap-5">
      {links?.map(columnLink => {
        if (!columnLink || columnLink?.__typename !== 'ContentfulItemLink') {
          return null;
        }

        return (
          <li key={columnLink.id}>
            <HeaderLink {...columnLink} className="min-w-[280px] max-w-[440px]" />
          </li>
        );
      })}
    </ul>
  </div>
);

export default HeaderSubMenu;
