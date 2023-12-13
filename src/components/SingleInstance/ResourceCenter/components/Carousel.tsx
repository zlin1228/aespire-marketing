import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import CardDeckCarousel from 'components/CardDeck/variants/Carousel';

import { contentfulProps } from 'utils/emptyTypes';

import type { ResourceCenterCarsouelProps } from 'components/SingleInstance/ResourceCenter/types';
import type { FC } from 'react';

const Carousel: FC<ResourceCenterCarsouelProps> = ({ id, cards, icon, label, showDivider, url }) => (
  <div id={id}>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between xl:gap-0">
        <div className="mx-auto flex w-fit items-center gap-3 p-2 md:mx-0">
          <Icon icon={icon} size={24} className="fill-green-500" />
          <p className="text-eyebrow font-extrabold uppercase">{label}</p>
        </div>
        <Button
          href={{
            href: url,
            ...contentfulProps,
          }}
          hierarchy="secondary"
        >
          View All
          <Icon icon="arrow-right" size={20} className="fill-gray-900" />
        </Button>
      </div>
      <CardDeckCarousel cards={cards} padding="none" {...contentfulProps} />
    </div>
    {showDivider && <div className="mb-10 mt-16 block h-[1px] w-full bg-gray-200" />}
  </div>
);

export default Carousel;
