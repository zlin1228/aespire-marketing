import { twMerge } from 'tailwind-merge';

import { tagStyles, tagsContainerStyles } from 'components/Cards/styles/ResourceCard.styles';

import type { ResourceCardProps } from 'components/Cards/ResourceCard';
import type { FC, RefObject } from 'react';

interface ResourceCardTagsProps {
  wrapperRef: RefObject<HTMLDivElement>;
  position: number;
  tags: ResourceCardProps['tags'];
  tagPosition: 'relative' | 'absolute';
  tagBackgroundColor: ResourceCardProps['tagBackgroundColor'];
  tagTextColor: ResourceCardProps['tagTextColor'];
}

const ResourceCardTags: FC<ResourceCardTagsProps> = ({
  position,
  tagBackgroundColor,
  tagPosition,
  tagTextColor,
  tags,
  wrapperRef,
}) => (
  <div className={twMerge(tagsContainerStyles({ position: tagPosition, backgroundColor: tagBackgroundColor }))}>
    <div className="flex items-center gap-4" ref={wrapperRef} style={{ transform: `translateX(${position}px)` }}>
      {tags?.map(tag => (
        <span key={tag?.id} className={twMerge(tagStyles({ textColor: tagTextColor }))}>
          {tag?.name}
        </span>
      ))}
      {tags &&
        tags?.length > 1 &&
        tags?.map(tag => (
          <span key={`${tag?.id}-1`} className={twMerge(tagStyles({ textColor: tagTextColor }))}>
            {tag?.name}
          </span>
        ))}
    </div>
  </div>
);

export default ResourceCardTags;
