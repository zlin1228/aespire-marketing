/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-arbitrary-value */
import { useAnnouncement } from 'context/AnnouncementContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { type ContentfulComponentHeader } from 'graphqlTypes';
import { type FC, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';
import Image from 'molecules/Image';

import AnnouncementBar, { type AnnouncementBarProps } from 'components/AnnouncementBar';
import HeaderCtas from 'components/Header/components/HeaderCtas';
import MobileCtas from 'components/Header/components/MobileCtas';
import MobileMenu from 'components/Header/components/MobileMenu';
import Navigation from 'components/Header/components/Navigation';
import TopBar from 'components/Header/components/TopBar';
import { bottomBarWrapper, headerStyles, mobileNavWrapper } from 'components/Header/styles/index.styles';

import screens from 'theme/spacing/screens';

import 'components/Header/styles/header.css';

import type { ContentfulItemMenu } from 'graphqlTypes';
import type { StaticImage } from 'molecules/Image';

export type HeaderProps = Omit<
  ContentfulComponentHeader,
  'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'
>;

const Header: FC<HeaderProps> = ({ announcementBar, ctas, logo, menus }) => {
  const { setIsAnnouncementOpen } = useAnnouncement();
  const isDesktop = useMedia(`(min-width: ${screens.xl})`, false);

  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);
  const [menuStack, setMenuStack] = useState<ContentfulItemMenu[]>([]);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const setMobileSubMenu = (menu: ContentfulItemMenu) => {
    setMenuStack(prevStack => [...prevStack, menu]);
  };

  useEffect(() => {
    if (mobileMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuActive]);

  useEffect(() => {
    if (announcementBar) {
      setIsAnnouncementOpen && setIsAnnouncementOpen(true);
    }
  }, [announcementBar]);

  return (
    <header className={twMerge(headerStyles())}>
      {announcementBar && isDesktop && <AnnouncementBar {...(announcementBar as AnnouncementBarProps)} />}
      {isDesktop && <TopBar />}
      <div className="h-full border-b border-gray-100 bg-white py-4">
        <div className={twMerge(bottomBarWrapper())}>
          <div className="flex h-full lg:gap-20 xl:gap-48">
            <AnimatePresence initial={false}>
              {menuStack.length > 0 && (
                <motion.button
                  type="button"
                  className="flex h-fit items-center gap-1 p-0 text-md font-semibold"
                  onClick={() => {
                    setMenuStack(prev => prev.slice(0, -1));
                  }}
                  initial={{ transform: 'translateX(50%)', opacity: 0 }}
                  animate={{ transform: 'translateX(0%)', opacity: 1 }}
                  exit={{ transform: 'translateX(50%)', opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon icon="chevron-left" size={24} className="fill-gray-900" />
                  Back
                </motion.button>
              )}
              {menuStack.length === 0 && (
                <motion.div
                  initial={{ transform: 'translateX(-50%)', opacity: 0 }}
                  animate={{ transform: 'translateX(0%)', opacity: 1 }}
                  exit={{ transform: 'translateX(-50%)', opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/" className="h-full w-full">
                    <Image image={logo as StaticImage} alt="Aspire" className="w-[78px] lg:w-[88px]" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            {isDesktop && (
              <Navigation
                menus={menus}
                activeDropdownIndex={activeDropdownIndex}
                setActiveDropdownIndex={setActiveDropdownIndex}
              />
            )}
          </div>
          <HeaderCtas
            ctas={ctas}
            mobileMenuActive={mobileMenuActive}
            setMobileMenuActive={setMobileMenuActive}
            setMenuStack={setMenuStack}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {!isDesktop && mobileMenuActive && (
          <motion.div
            className="absolute inset-0 top-[73px] -z-[1] h-[calc(100dvh_-_73px)] w-screen bg-white"
            initial={{ transform: 'translateY(-100%)' }}
            animate={{ transform: 'translateY(0%)' }}
            exit={{ transform: 'translateY(-100%)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full w-full flex-col justify-between">
              <div className="h-full w-full">
                <AnimatePresence initial={false}>
                  {menuStack.length === 0 && (
                    <motion.div
                      className={twMerge(mobileNavWrapper())}
                      initial={{ transform: 'translateX(-100%)' }}
                      animate={{ transform: 'translateX(0%)' }}
                      exit={{ transform: 'translateX(-100%)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {menus?.map(menu => {
                        if (!menu) {
                          return null;
                        }

                        const { id, label } = menu;

                        return (
                          <button
                            key={id}
                            type="button"
                            className="flex items-center justify-between gap-1 border-b-[1px] border-gray-200 py-4 text-left text-md font-bold text-gray-900"
                            onClick={() => setMenuStack(prev => [...prev, menu])}
                          >
                            {label}
                            <Icon icon="chevron-right" size={24} className="fill-gray-900" />
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                  {menuStack.map((menu, index) => (
                    <MobileMenu
                      key={menu.id}
                      initial={{ transform: 'translateX(100%)' }}
                      animate={{ transform: 'translateX(0%)' }}
                      exit={{
                        transform: index === menuStack.length - 1 ? 'translateX(100%)' : 'translateX(-100%)',
                      }}
                      transition={{ duration: 0.3 }}
                      ctas={ctas}
                      mobileMenu={menu}
                      menuStack={menuStack}
                      setMobileSubMenu={setMobileSubMenu}
                    />
                  ))}
                </AnimatePresence>
              </div>
              <MobileCtas ctas={ctas} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
