import { twMerge } from 'tailwind-merge';

import Image from 'molecules/Image';

import { containerStyles, imageStyles } from 'components/Trustbar/styles/TrustbarStatic.styles';

import type { TrustbarVariantProps } from '..';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';

const TrustbarStatic: FC<TrustbarVariantProps> = ({ logos }) => (
  <div className={twMerge(containerStyles())}>
    {logos?.map(logo => (
      <div key={logo?.id} className="flex-1 md:flex-none">
        <Image image={logo as StaticImage} alt={logo?.title || 'Logo'} className={twMerge(imageStyles())} />
      </div>
    ))}
  </div>
);

export default TrustbarStatic;
