import { useAnnouncement } from 'context/AnnouncementContext';
import { useRef } from 'react';
import { Link } from 'react-scroll';
import { twMerge } from 'tailwind-merge';

import Dropdown from 'molecules/Dropdown';

import {
  buttonStyles,
  stickyBarContainerStyles,
  stickyBarWrapperStyles,
} from 'components/SingleInstance/ResourceCenter/styles/StickyHeader.styles';
import { scrollToSection } from 'components/SingleInstance/ResourceCenter/utils/helpers';
import useIsSticky from 'components/SingleInstance/ResourceCenter/utils/useIsSticky';

import type { ResourceCenterCarsouelProps } from 'components/SingleInstance/ResourceCenter/types';
import type { ContentfulTaxonomyTagConnection } from 'graphqlTypes';
import type { Dispatch, FC, SetStateAction } from 'react';

interface CarouselControlsProps {
  activeCarousels: ResourceCenterCarsouelProps[];
  allContentfulTaxonomyTag: ContentfulTaxonomyTagConnection;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

const StickyHeader: FC<CarouselControlsProps> = ({
  activeCarousels,
  allContentfulTaxonomyTag,
  activeFilter,
  setActiveFilter,
}) => {
  const stickyBarRef = useRef<HTMLDivElement>(null);

  const isSticky = useIsSticky(stickyBarRef);
  const { isAnnouncementOpen } = useAnnouncement();

  const dropdownTags = [
    {
      label: 'Industry',
    },
    ...allContentfulTaxonomyTag.nodes.map(tag => ({
      label: tag.name,
    })),
  ];

  return (
    <div
      ref={stickyBarRef}
      className={twMerge(stickyBarContainerStyles({ hasAnnouncemnetBar: isAnnouncementOpen, isScrolled: isSticky }))}
    >
      <div className={twMerge(stickyBarWrapperStyles())}>
        <div className="hidden h-fit items-center xl:flex">
          {activeCarousels.map(section => {
            if (section.cards?.length === 0 || activeCarousels.length === 1) {
              return null;
            }

            return (
              <Link
                key={section.id}
                to={section.id}
                spy
                smooth
                duration={600}
                offset={-250}
                activeClass="active"
                className={`${twMerge(buttonStyles())} resource-center-sticky-btn`}
              >
                {section.label}
              </Link>
            );
          })}
        </div>
        <div className="xl:hidden">
          <Dropdown
            label="Jump to: Blog"
            type="input"
            items={activeCarousels}
            onChange={idx => scrollToSection(activeCarousels[idx].id)}
          />
        </div>
        <div className="flex min-w-[280px] flex-col gap-[6px]">
          <p className="hidden text-sm font-semibold text-gray-700 xl:block">Filter resource by:</p>
          <Dropdown
            type="input"
            label={activeFilter}
            items={dropdownTags}
            onChange={idx => setActiveFilter(dropdownTags[idx]?.label || 'All')}
          />
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
