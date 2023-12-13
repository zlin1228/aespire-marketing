import screens from 'theme/spacing/screens';

import type { AdditionalResourceProps } from 'components/Cards/ResourceCard';
import type {
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';

const isXLWidth = (width: number) => width >= parseInt(screens.xl, 10);
const isMDWidthOrAbove = (width: number) => width >= parseInt(screens.md, 10);
const isBelowMDWidth = (width: number) => width < parseInt(screens.md, 10);

export const primaryResourceCardLayout = (width: number) =>
  isXLWidth(width) ? 'vertical' : (isMDWidthOrAbove(width) && 'horizontal') || 'vertical';
export const showPrimaryResourceCardSummary = (width: number) => !isMDWidthOrAbove(width) || isXLWidth(width);
export const showResourceCardImage = (width: number) => isMDWidthOrAbove(width);
export const showResourceCardInfoBar = (width: number) => isMDWidthOrAbove(width);
export const showResourceCardSummary = (width: number) => isBelowMDWidth(width);

export const setResourceCardTagColors = (
  resource:
    | ContentfulTemplateBlogPost
    | ContentfulTemplateCaseStudy
    | ContentfulTemplateNewsPost
    | ContentfulTemplateResourceCenter
    | null,
): {
  color: AdditionalResourceProps['tagTextColor'];
  background: AdditionalResourceProps['tagBackgroundColor'];
} => {
  switch (resource?.__typename) {
    case 'ContentfulTemplateBlogPost':
      return {
        color: 'white',
        background: 'primary-600',
      };
    case 'ContentfulTemplateCaseStudy':
      return {
        color: 'gray-700',
        background: 'gray-100',
      };
    case 'ContentfulTemplateNewsPost':
      return {
        color: 'white',
        background: 'primary-600',
      };
    case 'ContentfulTemplateResourceCenter':
      return {
        color: 'white',
        background: 'gray-900',
      };
    default:
      return {
        color: 'white',
        background: 'primary-600',
      };
  }
};
