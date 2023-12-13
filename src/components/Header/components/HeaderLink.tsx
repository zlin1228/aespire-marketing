/* eslint-disable tailwindcss/no-arbitrary-value */
import Button from 'molecules/Button';
import Image from 'molecules/Image';

import { contentfulProps } from 'utils/emptyTypes';

import type { ContentfulItemLink } from 'graphqlTypes';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';

interface HeaderLinkProps extends ContentfulItemLink {
  className?: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ id, link, label, description, icon, className, badge }) => (
  <Button
    key={id}
    href={{
      href: link,
      ...contentfulProps,
    }}
    className={`flex  flex-col gap-[6px] p-2 text-sm font-semibold transition-colors hover:bg-blue-50 focus:bg-blue-50 focus:outline-none ${className}`}
  >
    <div className="flex items-center gap-2">
      <Image image={icon as StaticImage} alt={label || ''} />
      {label && <p>{label}</p>}
      {badge && <div className="bg-yellow-400 px-2 py-1 text-[10px] font-semibold text-gray-900">{badge}</div>}
    </div>
    {description && <p className="hidden pl-[25px] text-sm font-normal text-gray-700 md:flex">{description}</p>}
  </Button>
);

export default HeaderLink;
