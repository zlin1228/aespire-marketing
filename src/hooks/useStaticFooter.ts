import { graphql, useStaticQuery } from 'gatsby';

import type { ContentfulComponentFooter } from 'graphqlTypes';

const useStaticFooter = () => {
  const { contentfulComponentFooter } = useStaticQuery<{
    contentfulComponentFooter: ContentfulComponentFooter;
  }>(graphql`
    query FooterQuery {
      contentfulComponentFooter(contentful_id: { eq: "4EhQ90QPLE4j0xLO0Ir3w" }) {
        ...contentfulComponentFooter
      }
    }
  `);

  return {
    footer: contentfulComponentFooter,
  };
};

export default useStaticFooter;
