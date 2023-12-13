import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Icon from 'molecules/Icon';

import FooterLink from 'components/Footer/components/FooterLink';

import type { FooterProps } from '..';
import type { FC } from 'react';

interface FooterAccordionProps {
  menus: FooterProps['menus'];
}

const accordionWrapperStyles = cva(['oveflow-hidden', 'border-b-[1px]', 'border-b-blue-800'], {
  variants: {
    paddingBottom: {
      sm: ['pb-4'],
      none: ['pb-0'],
    },
  },
});

const FooterAccordion: FC<FooterAccordionProps> = ({ menus }) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  if (!menus || !menus.length) {
    return null;
  }

  return (
    <div className="first:border-t-[1px] first:border-blue-800">
      {menus.map((menu, i) => {
        if (!menu) {
          return null;
        }

        const isOpen = i === expanded;

        return (
          <motion.div
            key={menu.id}
            className={twMerge(accordionWrapperStyles({ paddingBottom: isOpen ? 'sm' : 'none' }))}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between  py-4 text-left text-md font-bold uppercase text-white"
              onClick={() => setExpanded(isOpen ? false : i)}
            >
              {menu.label}
              <Icon icon="chevron-down" size={24} className="fill-white" />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  className="flex flex-col gap-4 overflow-hidden px-2"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: 'auto', pointerEvents: 'auto' },
                    collapsed: { height: 0, pointerEvents: 'none' },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {menu.links?.map(link => {
                    if (!link || link.__typename !== 'ContentfulItemLink') {
                      return null;
                    }

                    return <FooterLink key={link.id} {...link} />;
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FooterAccordion;
