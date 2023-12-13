import type {
  ContentfulTemplateBlogPost,
  ContentfulTemplateBlogPostConnection,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateCaseStudyConnection,
  ContentfulTemplateNewsPost,
  ContentfulTemplateNewsPostConnection,
  ContentfulTemplateResourceCenter,
  ContentfulTemplateResourceCenterConnection,
} from 'graphqlTypes';

export type PostUnion =
  | ContentfulTemplateBlogPost
  | ContentfulTemplateNewsPost
  | ContentfulTemplateCaseStudy
  | ContentfulTemplateResourceCenter;

export type PostConnectionUnion =
  | Omit<ContentfulTemplateBlogPostConnection, '__typename'>
  | Omit<ContentfulTemplateNewsPostConnection, '__typename'>
  | Omit<ContentfulTemplateCaseStudyConnection, '__typename'>
  | Omit<ContentfulTemplateResourceCenterConnection, '__typename'>;
