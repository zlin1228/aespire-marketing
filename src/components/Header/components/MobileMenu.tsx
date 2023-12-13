/* eslint-disable tailwindcss/no-arbitrary-value */
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';

import MobileMenuList from 'components/Header/components/MobileMenuList';
import {
  mobileMenuButtonStyles,
  mobileMenuContainer,
  mobileMenuLabelStyles,
  mobileMenuLabelWrapperStyles,
  mobileMenuWrapper,
} from 'components/Header/styles/MobileMenu.styles';

import type { HeaderProps } from '..';
import type { AnimationProps } from 'framer-motion';
import type { ContentfulItemMenu } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

interface MobileMenuProps extends HeaderProps {
  initial: AnimationProps['initial'];
  animate: AnimationProps['animate'];
  exit: AnimationProps['exit'];
  transition: AnimationProps['transition'];
  mobileMenu: ContentfulItemMenu | null;
  menuStack: ContentfulItemMenu[];
  setMobileSubMenu: (menu: ContentfulItemMenu) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
  initial,
  animate,
  exit,
  transition,
  mobileMenu,
  menuStack,
  setMobileSubMenu,
}) => (
  <motion.div
    key={mobileMenu?.id}
    initial={initial}
    animate={animate}
    exit={exit}
    transition={transition}
    className="fixed left-0 top-0 flex h-[calc(100dvh-223px)] w-screen flex-col md:h-[calc(100dvh-187px)]"
  >
    <div className={twMerge(mobileMenuContainer())}>
      <div className={twMerge(mobileMenuWrapper())}>
        <div className={twMerge(mobileMenuLabelStyles())}>
          <div className={twMerge(mobileMenuLabelWrapperStyles())}>
            {mobileMenu?.label}
            {mobileMenu?.menuButton && (
              <Button {...(mobileMenu.menuButton as ButtonProps)} className={twMerge(mobileMenuButtonStyles())} />
            )}
          </div>
        </div>
        <MobileMenuList activeMobileMenu={mobileMenu} menuStack={menuStack} setMobileSubMenu={setMobileSubMenu} />
      </div>
    </div>
  </motion.div>
);

export default MobileMenu;
