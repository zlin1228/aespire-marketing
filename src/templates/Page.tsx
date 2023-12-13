import { graphql } from 'gatsby';
import Seo from 'layouts/Seo';

import componentGenerator from 'utils/componentGenerator';

import type { PageProps } from 'gatsby';
import type { ContentfulTemplatePage } from 'graphqlTypes';
import type { FC } from 'react';

interface PageDataProps {
  pageData: ContentfulTemplatePage;
}
const Page: FC<PageProps<PageDataProps>> = ({
  data: {
    pageData: { sections, header, footer },
  },
}) => (
  <>
    {header && header['component'] && componentGenerator(header, header['component'])}
    {sections &&
      sections.map(section => section && section['component'] && componentGenerator(section, section['component']))}
    {footer && footer['component'] && componentGenerator(footer, footer['component'])}
  </>
);

export const Head: FC<PageProps<PageDataProps>> = ({
  data: {
    pageData: { seo },
  },
}) => <Seo {...seo} />;

export const pageQuery = graphql`
  query templatePageQuery($slug: String!) {
    pageData: contentfulTemplatePage(slug: { eq: $slug }) {
      ...contentfulTemplatePage
    }
  }
`;

export default Page;
