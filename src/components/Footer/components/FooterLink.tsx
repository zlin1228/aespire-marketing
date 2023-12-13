import Badge from 'molecules/Badge';
import Button from 'molecules/Button';
import Image from 'molecules/Image';

import { contentfulProps } from 'utils/emptyTypes';

import type { ContentfulItemLink } from 'graphqlTypes';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';

const FooterLink: FC<ContentfulItemLink> = ({ badge, icon, link, label }) => (
  <li>
    <Button
      href={{
        href: link,
        ...contentfulProps,
      }}
      className="flex items-center gap-4 p-0 text-md font-normal text-white transition-colors hover:text-primary-200"
    >
      {icon && <Image image={icon as StaticImage} alt={label || ''} className="h-6 w-6" />}
      {label}
      {badge && <Badge label={badge} size="sm" hierarchy="blue" />}
    </Button>
  </li>
);

export default FooterLink;
