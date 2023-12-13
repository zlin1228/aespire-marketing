import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Section from 'molecules/Section';

import Carousel from 'components/SingleInstance/ResourceCenter/components/Carousel';
import StickyHeader from 'components/SingleInstance/ResourceCenter/components/StickyHeader';
import { carouselWrapperStyles, containerStyles } from 'components/SingleInstance/ResourceCenter/styles/index.styles';
import useCarouselSections from 'components/SingleInstance/ResourceCenter/utils/useCarouselSections';

import type {
  ResourceCenterProps,
  ResourceCenterStaticQueryProps,
} from 'components/SingleInstance/ResourceCenter/types';
import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';

const ResourceCenterQuery = graphql`
  query ResourceCenterQuery {
    allContentfulTemplateBlogPost(sort: { publishDate: DESC }) {
      nodes {
        ...contentfulTemplateBlogPost
      }
    }
    allContentfulTemplateCaseStudy(sort: { publishDate: DESC }) {
      nodes {
        ...contentfulTemplateCaseStudy
      }
    }
    allContentfulTemplateNewsPost(sort: { publishDate: DESC }) {
      nodes {
        ...contentfulTemplateNewsPost
      }
    }
    tools: allContentfulTemplateResourceCenter(sort: { publishDate: DESC }, filter: { type: { eq: "Tool" } }) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    guides: allContentfulTemplateResourceCenter(sort: { publishDate: DESC }, filter: { type: { eq: "Guide" } }) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    templates: allContentfulTemplateResourceCenter(sort: { publishDate: DESC }, filter: { type: { eq: "Template" } }) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    allContentfulTaxonomyTag(filter: { name: { in: ["Janitorial", "Landscape"] } }) {
      nodes {
        id
        name
      }
    }
  }
`;

const ResourceCenter: FC<ResourceCenterProps> = () => {
  const [activeFilter, setActiveFilter] = useState('Industry');

  const {
    allContentfulTemplateBlogPost,
    allContentfulTemplateCaseStudy,
    allContentfulTemplateNewsPost,
    tools,
    guides,
    templates,
    allContentfulTaxonomyTag,
  } = useStaticQuery<ResourceCenterStaticQueryProps>(ResourceCenterQuery);

  const activeCarousels = useCarouselSections({
    activeFilter,
    allContentfulTaxonomyTag,
    allContentfulTemplateBlogPost,
    allContentfulTemplateCaseStudy,
    allContentfulTemplateNewsPost,
    tools,
    guides,
    templates,
  });

  return (
    <Section padding="large" fullWidth contained={false} containerClass="!max-w-full !p-0">
      <StickyHeader
        activeCarousels={activeCarousels}
        activeFilter={activeFilter}
        allContentfulTaxonomyTag={allContentfulTaxonomyTag}
        setActiveFilter={setActiveFilter}
      />
      <div className={twMerge(containerStyles())}>
        <div className={twMerge(carouselWrapperStyles())}>
          {activeCarousels.map(section => {
            if (section.cards?.length === 0) {
              return null;
            }

            const lastCarousel = activeCarousels[activeCarousels.length - 1];
            const showDivider = section.id !== lastCarousel.id;

            return (
              <Carousel
                key={section.id}
                id={section.id}
                cards={section.cards?.slice(0, 10)}
                icon={section.icon as IconIds}
                label={section.label}
                showDivider={showDivider}
                url={section.url}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ResourceCenter;
