import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import FooterLink from 'components/Footer/components/FooterLink';

import type { ContentfulItemMenu } from 'graphqlTypes';
import type { FC } from 'react';

const listStyles = cva(['flex', 'gap-6'], {
  variants: {
    layout: {
      standard: ['flex-col'],
      social: ['flex-row'],
    },
  },
});

export interface FooterGroupProps extends ContentfulItemMenu {
  layout: string;
}

const FooterGroup: FC<FooterGroupProps> = ({ label, links, layout }) => (
  <div className="flex flex-col gap-6">
    {label && <p className="text-md font-semibold uppercase text-gray-400">{label}</p>}
    <ul className={twMerge(listStyles({ layout: layout as 'standard' | 'social' }))}>
      {links?.map(link => {
        if (!link || link.__typename !== 'ContentfulItemLink') {
          return null;
        }

        return <FooterLink key={link.label} {...link} />;
      })}
    </ul>
  </div>
);

export default FooterGroup;
