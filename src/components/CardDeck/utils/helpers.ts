/* eslint-disable no-case-declarations */
import { contentfulProps } from 'utils/emptyTypes';

import type {
  ContentfulComponentCardDeck,
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';
import type { PostConnectionUnion } from 'types';

export const formatPostsForCardDeck = (
  posts: PostConnectionUnion,
  activeFilter?: string,
  tagsOverride?: { name: string }[],
): ContentfulComponentCardDeck['cards'] => {
  const formattedPosts = posts.nodes.map(post => {
    const { author, body, featuredImage, publishDate, slug, summary, tags, title } = post;

    const formattedPost = {
      author,
      body,
      featuredImage,
      publishDate,
      slug,
      summary,
      tags: tagsOverride || tags,
      title,
    };

    switch (post.__typename) {
      case 'ContentfulTemplateBlogPost':
        return {
          __typename: 'ContentfulTemplateBlogPost',
          tagTextColor: 'white',
          tagBackgroundColor: 'primary-600',
          ...formattedPost,
          ...contentfulProps,
        } as ContentfulTemplateBlogPost;

      case 'ContentfulTemplateNewsPost':
        return {
          __typename: 'ContentfulTemplateNewsPost',
          tagTextColor: 'blue-600',
          tagBackgroundColor: 'blue-50',
          ...formattedPost,
          ...contentfulProps,
        } as ContentfulTemplateNewsPost;

      case 'ContentfulTemplateCaseStudy':
        return {
          __typename: 'ContentfulTemplateCaseStudy',
          tagTextColor: 'white',
          tagBackgroundColor: 'gray-900',
          ...formattedPost,
          ...contentfulProps,
        } as ContentfulTemplateCaseStudy;

      case 'ContentfulTemplateResourceCenter':
        let tagTextColor = 'white';
        let tagBackgroundColor = 'gray-900';

        if (post.type === 'Tool') {
          tagTextColor = 'gray-900';
          tagBackgroundColor = 'yellow-400';
        } else if (post.type === 'Guide') {
          tagTextColor = 'gray-700';
          tagBackgroundColor = 'gray-100';
        } else {
          tagTextColor = 'green-700';
          tagBackgroundColor = 'green-25';
        }

        return {
          __typename: 'ContentfulTemplateResourceCenter',
          tagTextColor,
          tagBackgroundColor,
          ...formattedPost,
          ...contentfulProps,
        } as ContentfulTemplateResourceCenter;
      default:
        throw new Error(`Unknown type: ${post.__typename}`);
    }
  });

  if (activeFilter === 'Industry') {
    return formattedPosts;
  }

  const filteredPosts = formattedPosts.filter(post => {
    if (post.tags) {
      const tagNames = post.tags.map(tag => tag?.name);

      return tagNames.includes(activeFilter);
    }

    return false;
  });

  return filteredPosts;
};

export const swiperSettings = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  breakpoints: {
    568: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  },
};

export const getNumberOfDots = (
  slidesPerGroup: number,
  slidesPerView: number | string,
  totalSlides?: number,
): number => {
  if (!totalSlides) {
    return 0;
  }

  if (slidesPerView === 'auto') {
    return Math.ceil(totalSlides / slidesPerGroup);
  }

  return Math.ceil(totalSlides / (slidesPerView as number));
};

export const setGridValue = (value: number): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 => {
  const defaultGridValue = 3 as const;
  const minGridValue = 0 as const;
  const maxGridValue = 10 as const;

  if (value >= minGridValue && value <= maxGridValue) {
    return value as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  } else {
    return defaultGridValue;
  }
};
