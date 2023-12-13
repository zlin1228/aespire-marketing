import { graphql, useStaticQuery } from 'gatsby';

import type { ContentfulComponentHeader } from 'graphqlTypes';

const useStaticHeader = () => {
  const { contentfulComponentHeader } = useStaticQuery<{
    contentfulComponentHeader: ContentfulComponentHeader;
  }>(graphql`
    query HeaderQuery {
      contentfulComponentHeader(contentful_id: { eq: "6JAdJArrVNp5BooClGkilR" }) {
        ...contentfulComponentHeader
      }
    }
  `);

  return {
    header: contentfulComponentHeader,
  };
};

export default useStaticHeader;
