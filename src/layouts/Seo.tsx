import { Script, graphql, useStaticQuery } from 'gatsby';

import type { ContentfulMetaSeo } from 'graphqlTypes';
import type { FC } from 'react';

type SeoProps = Pick<
  ContentfulMetaSeo,
  'canonicalUrl' | 'indexable' | 'openGraphImage' | 'pageDescription' | 'pageTitle'
>;

const SEO: FC<SeoProps> = ({ canonicalUrl, indexable, openGraphImage, pageDescription, pageTitle }) => {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          author
          description
          facebook
          siteDescription
          siteHeadline
          siteLanguage
          siteTitle
          siteUrl
          title
          twiter
        }
      }
    }
  `);

  const {
    siteMetadata: { siteUrl, defaultTitle, defaultDescription, ogLanguage, twitter, facebook },
  } = site;

  const seo = {
    title: pageTitle || defaultTitle,
    description: pageDescription || defaultDescription,
    imgUrl: openGraphImage?.file?.url || '',
    url: canonicalUrl || siteUrl,
  };

  return (
    <>
      <title>{seo.title}</title>
      {seo.title && <meta name="title" content={seo.title} />}
      {seo.description && <meta name="description" content={seo.description} />}
      {!indexable && <meta name="robots" content="noindex, nofollow" />}
      {seo.url && <link rel="canonical" href={seo.url} />}
      {facebook && <meta property="og:site_name" content={facebook} />}
      <meta property="og:locale" content={ogLanguage} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.imgUrl} />
      <meta property="og:image:alt" content={seo.description} />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imgUrl} />
      <meta name="twitter:image:alt" content={seo.description} />
      <Script src="https://js.na.chilipiper.com/marketing.js" type="text/javascript" async />
    </>
  );
};

export default SEO;
