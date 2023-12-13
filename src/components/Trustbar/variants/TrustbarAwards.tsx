import { twMerge } from 'tailwind-merge';

import Image from 'molecules/Image';

import { containerStyles } from 'components/Trustbar/styles/TrustbarAwards.styles';

import type { TrustbarVariantProps } from '..';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';

const TrustbarAwards: FC<TrustbarVariantProps> = ({ logos }) => (
  <div className={twMerge(containerStyles())}>
    {logos?.map(logo => (
      <div key={logo?.id} className="flex w-fit">
        <Image image={logo as StaticImage} alt={logo?.title || 'Logo'} className="w-36 object-cover" />
      </div>
    ))}
  </div>
);

export default TrustbarAwards;
