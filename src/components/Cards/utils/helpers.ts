import type { ResourceCardProps } from 'components/Cards/ResourceCard';
import type { ContentfulTemplateResourceCenter, Maybe } from 'graphqlTypes';

export const isResourceCenter = (props: ResourceCardProps): props is ContentfulTemplateResourceCenter =>
  props.__typename === 'ContentfulTemplateResourceCenter';

export const generateUrl = ({
  __typename,
  slug,
  type,
}: {
  __typename?: string;
  slug?: Maybe<string | undefined>;
  type?: Maybe<string | undefined>;
}) => {
  switch (__typename) {
    case 'ContentfulTemplateBlogPost':
      return `/blog/${slug}`;
    case 'ContentfulTemplateCaseStudy':
      return `/case-studies/${slug}`;
    case 'ContentfulTemplateNewsPost':
      return `/news/${slug}`;
    case 'ContentfulTemplateResourceCenter':
      switch (type) {
        case 'Guide':
          return `/resources/guide/${slug}`;
        case 'Template':
          return `/resources/template/${slug}`;
        case 'Tool':
          return `/resources/tool/${slug}`;
        default:
          return `/${slug}`;
      }
    default:
      return `/${slug}`;
  }
};
