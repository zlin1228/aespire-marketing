import { nameClassName, textClassName } from 'molecules/Avatar/Avatar.styles';
import Image from 'molecules/Image';

import type { ImageProps } from 'molecules/Image';
import type { FC } from 'react';

type MaybeString = string | null | undefined;

export type avatarVariants = 'quote' | 'testimonial';

interface AvatarProps {
  image?: ImageProps | undefined;
  name?: MaybeString;
  role?: MaybeString;
  company?: MaybeString;
  variant?: avatarVariants;
  theme?: string;
}

const Avatar: FC<AvatarProps> = ({ company, image, name, role, theme, variant = 'quote' }) => (
  <div className="flex items-center gap-4">
    {image?.image && <Image {...image} className="h-12 w-12" />}
    <div className="flex flex-col">
      {name && <p className={nameClassName(theme, variant)}>{name}</p>}
      <p className={textClassName(theme, variant)}>
        {role && <span>{role || 'Role Unknown'}</span>}
        {role && company && ' at '}
        {company && <span>{company || 'Company Unknown'}</span>}
      </p>
    </div>
  </div>
);

export default Avatar;
