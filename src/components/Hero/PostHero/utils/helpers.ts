import calculateReadTime from 'utils/_tests_/calculateReadTime';
import { DOMAIN } from 'utils/parseUrl';

import type { IconIds } from 'molecules/Icon';
import type { PostUnion } from 'types';
import type { RichText } from 'utils/richTextParser';

interface PostDetail {
  icon: IconIds;
  label: string;
  value: string;
}

interface Breadcrumb {
  label?: string;
  link?: string;
}

type PostType =
  | 'ContentfulTemplateBlogPost'
  | 'ContentfulTemplateNewsPost'
  | 'ContentfulTemplateCaseStudy'
  | 'ContentfulTemplateResourceCenter';

interface BasePathConfig {
  label: string;
  path: string;
  isSpecial?: boolean;
}

const BASE_PATHS: Record<PostType, BasePathConfig> = {
  ContentfulTemplateBlogPost: {
    label: 'Blog',
    path: 'blog',
  },
  ContentfulTemplateNewsPost: {
    label: 'News',
    path: 'news',
  },
  ContentfulTemplateCaseStudy: {
    label: 'Case Studies',
    path: 'case-studies',
  },
  ContentfulTemplateResourceCenter: {
    label: 'Resources',
    path: 'resources',
    isSpecial: true,
  },
};

export const generateBreadcrumbs = (post: PostUnion): Breadcrumb[] => {
  const { __typename, slug, title } = post;

  if (!__typename || !(__typename in BASE_PATHS)) {
    return [];
  }

  const basePath = BASE_PATHS[__typename as PostType];
  const breadcrumbs: Breadcrumb[] = [
    {
      label: basePath.label,
      link: `https://www.${DOMAIN}/${basePath.path}`,
    },
  ];

  if (__typename === 'ContentfulTemplateResourceCenter') {
    const resourceType = post.type;
    breadcrumbs.push({
      label: resourceType as string,
      link: `https://www.${DOMAIN}/${basePath.path}/${resourceType?.toLowerCase()}`,
    });
  }

  breadcrumbs.push({
    label: title as string,
    link: `https://www.${DOMAIN}/${basePath.path}${
      __typename === 'ContentfulTemplateResourceCenter' ? `/${post.type?.toLowerCase()}` : ''
    }/${slug}`,
  });

  return breadcrumbs;
};

export const extractPostDetails = (post: PostUnion) => {
  const { author, body, publishDate } = post;
  const readTime = calculateReadTime(body as RichText);

  const postDetails = [
    {
      icon: 'access-time',
      label: 'Read Time',
      value: `${readTime} Minutes`,
    },
    {
      icon: 'edit',
      label: 'Author',
      value: author?.fullName,
    },
    {
      icon: 'calendar-today',
      label: 'Published',
      value: publishDate,
    },
  ] as PostDetail[];

  return postDetails;
};
