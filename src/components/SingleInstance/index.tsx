import Calculators from 'components/Calculators';
import ResourceCenter from 'components/SingleInstance/ResourceCenter';

import type {
  ContentfulComponentSingleInstance,
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';
import type { FC } from 'react';

export interface SingleInstanceTypes extends ContentfulComponentSingleInstance {
  posts?:
    | ContentfulTemplateBlogPost
    | ContentfulTemplateCaseStudy
    | ContentfulTemplateNewsPost
    | ContentfulTemplateResourceCenter;
  currentPageNumber?: number;
  resourceType?: string;
}

const SingleInstance: FC<SingleInstanceTypes> = props => {
  const { type } = props;

  const renderComponent = () => {
    switch (type) {
      case 'Resource Center':
        return <ResourceCenter {...props} />;
      case 'ROI Calculator':
        return <Calculators {...props} />;
      default:
        return null;
    }
  };

  return <div className="w-full">{renderComponent()}</div>;
};

export default SingleInstance;
