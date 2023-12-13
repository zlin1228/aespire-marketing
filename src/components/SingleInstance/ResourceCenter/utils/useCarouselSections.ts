import { useEffect, useState } from 'react';

import { formatPostsForCardDeck } from 'components/CardDeck/utils/helpers';

import type {
  ResourceCenterCarsouelProps,
  ResourceCenterStaticQueryProps,
} from 'components/SingleInstance/ResourceCenter/types';

interface UseCarouselSectionsProps extends ResourceCenterStaticQueryProps {
  activeFilter: string;
}

const useCarouselSections = ({
  activeFilter,
  allContentfulTemplateBlogPost,
  allContentfulTemplateCaseStudy,
  allContentfulTemplateNewsPost,
  tools,
  guides,
  templates,
}: UseCarouselSectionsProps): ResourceCenterCarsouelProps[] => {
  const [activeCarousels, setActiveCarousels] = useState<ResourceCenterCarsouelProps[]>([]);

  useEffect(() => {
    const blogCarousel = formatPostsForCardDeck(allContentfulTemplateBlogPost, activeFilter, [{ name: 'Blog' }]);
    const caseStudyCarousel = formatPostsForCardDeck(allContentfulTemplateCaseStudy, activeFilter, [
      { name: 'Case Study' },
    ]);
    const newsCarousel = formatPostsForCardDeck(allContentfulTemplateNewsPost, activeFilter, [{ name: 'News' }]);
    const resourceCenterToolsCarousel = formatPostsForCardDeck(tools, activeFilter, [{ name: 'Tool' }]);
    const resourceCenterGuidesCarousel = formatPostsForCardDeck(guides, activeFilter, [{ name: 'Guide' }]);
    const resourceCenterTemplatesCarousel = formatPostsForCardDeck(templates, activeFilter, [{ name: 'Template' }]);

    const carouselSections = [
      {
        id: 'blog',
        cards: blogCarousel,
        icon: 'edit-document',
        label: 'Blog',
        showDivider: true,
        url: 'https://www.youraspire.com/blog',
      },
      {
        id: 'news',
        cards: newsCarousel,
        icon: 'news-feed',
        label: 'News',
        showDivider: true,
        url: 'https://www.youraspire.com/news',
      },
      {
        id: 'case-studies',
        cards: caseStudyCarousel,
        icon: 'find-in-page',
        label: 'Case Studies',
        showDivider: true,
        url: 'https://www.youraspire.com/case-studies',
      },
      {
        id: 'guides',
        cards: resourceCenterGuidesCarousel,
        icon: 'map',
        label: 'Guides',
        showDivider: true,
        url: 'https://www.youraspire.com/guides',
      },
      {
        id: 'templates',
        cards: resourceCenterTemplatesCarousel,
        icon: 'download',
        label: 'Templates',
        showDivider: true,
        url: 'https://www.youraspire.com/templates',
      },
      {
        id: 'tools',
        cards: resourceCenterToolsCarousel,
        icon: 'build',
        label: 'Tools',
        url: 'https://www.youraspire.com/tools',
      },
    ] as ResourceCenterCarsouelProps[];

    setActiveCarousels(carouselSections);
  }, [
    activeFilter,
    allContentfulTemplateBlogPost,
    allContentfulTemplateCaseStudy,
    allContentfulTemplateNewsPost,
    tools,
    guides,
    templates,
  ]);

  return activeCarousels;
};

export default useCarouselSections;
