import type {
  ContentfulComponentCardDeck,
  ContentfulComponentSingleInstance,
  ContentfulTaxonomyTagConnection,
  ContentfulTemplateBlogPostConnection,
  ContentfulTemplateCaseStudyConnection,
  ContentfulTemplateNewsPostConnection,
  ContentfulTemplateResourceCenterConnection,
} from 'graphqlTypes';
import type { IconIds } from 'molecules/Icon';

export interface ResourceCenterStaticQueryProps {
  allContentfulTemplateBlogPost: ContentfulTemplateBlogPostConnection;
  allContentfulTemplateCaseStudy: ContentfulTemplateCaseStudyConnection;
  allContentfulTemplateNewsPost: ContentfulTemplateNewsPostConnection;
  tools: ContentfulTemplateResourceCenterConnection;
  guides: ContentfulTemplateResourceCenterConnection;
  templates: ContentfulTemplateResourceCenterConnection;
  allContentfulTaxonomyTag: ContentfulTaxonomyTagConnection;
}

export interface ResourceCenterCarsouelProps {
  id: string;
  cards: ContentfulComponentCardDeck['cards'];
  icon: IconIds;
  label: string;
  showDivider?: boolean;
  url: string;
}

export type ResourceCenterProps = ContentfulComponentSingleInstance;
