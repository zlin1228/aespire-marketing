import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';

import type { FooterProps } from '..';
import type { FC } from 'react';

export const footerDisclaimer = cva([
  'border-t-[1px]',
  'border-blue-800',
  'pt-8',
  'flex',
  'flex-col',
  'md:flex-row',
  'md:items-center',
  'gap-4',
  'md:justify-between',
  'xl:justify-start',
]);

interface FooterDisclaimerProps {
  disclaimerMenu: FooterProps['disclaimerMenu'];
}

const FooterDisclaimer: FC<FooterDisclaimerProps> = ({ disclaimerMenu }) => {
  if (!disclaimerMenu) {
    return null;
  }

  return (
    <div className={twMerge(footerDisclaimer())}>
      {disclaimerMenu?.label && <p className="text-md font-normal text-gray-200">{disclaimerMenu.label}</p>}
      <ul className="flex items-center gap-4">
        {disclaimerMenu?.links?.map(link => {
          if (!link || link.__typename !== 'ContentfulItemLink') {
            return null;
          }

          return (
            <li key={link.id}>
              <Button className="text-md font-semibold text-white">{link.label}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterDisclaimer;
