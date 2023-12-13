import { graphql } from 'gatsby';
import useStaticFooter from 'hooks/useStaticFooter';
import useStaticHeader from 'hooks/useStaticHeader';

import ConversionPanel from 'components/ConversionPanel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import PostListing from 'components/Resources/PostListing';

import type { ConversionPanelProps } from 'components/ConversionPanel';
import type { FooterProps } from 'components/Footer';
import type { HeaderProps } from 'components/Header';
import type { HeroProps } from 'components/Hero';
import type { PageProps } from 'gatsby';
import type {
  ContentfulLayoutSection,
  ContentfulTemplateBlogPost,
  ContentfulTemplateBlogPostConnection,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateCaseStudyConnection,
  ContentfulTemplateNewsPost,
  ContentfulTemplateNewsPostConnection,
  ContentfulTemplateResourceCenter,
  ContentfulTemplateResourceCenterConnection,
} from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

interface PostDataProps {
  blogPostData: ContentfulTemplateBlogPost;
  recentBlogPosts: ContentfulTemplateBlogPostConnection;
  newsPostData: ContentfulTemplateNewsPost;
  recentNewsPosts: ContentfulTemplateNewsPostConnection;
  caseStudiesPostData: ContentfulTemplateCaseStudy;
  recentCaseStudiesPosts: ContentfulTemplateCaseStudyConnection;
  resourceTemplatePostData: ContentfulTemplateResourceCenter;
  resourceGuidePostData: ContentfulTemplateResourceCenter;
  resourceToolPostData: ContentfulTemplateResourceCenter;
  recentResourceCenterPosts: ContentfulTemplateResourceCenterConnection;
  conversionPanelSection: ContentfulLayoutSection;
  blogHeroSection: ContentfulLayoutSection;
  newsHeroSection: ContentfulLayoutSection;
  caseStudyHeroSection: ContentfulLayoutSection;
  resourceTemplateHeroSection: ContentfulLayoutSection;
  resourceToolHeroSection: ContentfulLayoutSection;
  resourceGuideHeroSection: ContentfulLayoutSection;
}

type pageContextProps = {
  pageNumber: number;
  slug: string;
};

const Post: FC<PageProps<PostDataProps>> = ({
  data: {
    blogPostData,
    caseStudiesPostData,
    newsPostData,
    resourceTemplatePostData,
    resourceToolPostData,
    resourceGuidePostData,
    conversionPanelSection,
    blogHeroSection,
    newsHeroSection,
    caseStudyHeroSection,
    resourceTemplateHeroSection,
    resourceGuideHeroSection,
    resourceToolHeroSection,
  },
  pageContext,
}) => {
  const { header } = useStaticHeader();
  const { footer } = useStaticFooter();
  const posts =
    blogPostData ||
    newsPostData ||
    caseStudiesPostData ||
    resourceTemplatePostData ||
    resourceToolPostData ||
    resourceGuidePostData;
  const currentPageNumber = (pageContext as pageContextProps)?.pageNumber || 0;
  const resourceType = (pageContext as pageContextProps)?.slug || 'blog';

  return (
    <div>
      {header && <Header {...(header as HeaderProps)} background="white" />}
      <main>
        {blogHeroSection && (
          <Hero {...(blogHeroSection['component'] as HeroProps)} {...(blogHeroSection as SectionProps)} />
        )}
        {newsHeroSection && (
          <Hero {...(newsHeroSection['component'] as HeroProps)} {...(newsHeroSection as SectionProps)} />
        )}
        {caseStudyHeroSection && (
          <Hero {...(caseStudyHeroSection['component'] as HeroProps)} {...(caseStudyHeroSection as SectionProps)} />
        )}
        {resourceTemplateHeroSection && (
          <Hero
            {...(resourceTemplateHeroSection['component'] as HeroProps)}
            {...(resourceTemplateHeroSection as SectionProps)}
          />
        )}
        {resourceToolHeroSection && (
          <Hero
            {...(resourceToolHeroSection['component'] as HeroProps)}
            {...(resourceToolHeroSection as SectionProps)}
          />
        )}
        {resourceGuideHeroSection && (
          <Hero
            {...(resourceGuideHeroSection['component'] as HeroProps)}
            {...(resourceGuideHeroSection as SectionProps)}
          />
        )}
        <PostListing posts={posts} currentPageNumber={currentPageNumber} resourceType={resourceType} />
        {conversionPanelSection && (
          <ConversionPanel
            {...(conversionPanelSection['component'] as ConversionPanelProps)}
            {...(conversionPanelSection as SectionProps)}
          />
        )}
      </main>
      {footer && <Footer {...(footer as FooterProps)} background="blue900" padding="small" contained />}
    </div>
  );
};

export default Post;

export const postQuery = graphql`
  query templatePostListingQuery(
    $queryBlog: Boolean!
    $queryNews: Boolean!
    $queryCaseStudy: Boolean!
    $queryResourceTemplate: Boolean!
    $queryResourceGuide: Boolean!
    $queryResourceTool: Boolean!
  ) {
    blogPostData: allContentfulTemplateBlogPost(sort: { publishDate: DESC }) @include(if: $queryBlog) {
      nodes {
        ...contentfulTemplateBlogPost
      }
    }
    newsPostData: allContentfulTemplateNewsPost(sort: { publishDate: DESC }) @include(if: $queryNews) {
      nodes {
        ...contentfulTemplateNewsPost
      }
    }
    caseStudiesPostData: allContentfulTemplateCaseStudy(sort: { publishDate: DESC }) @include(if: $queryCaseStudy) {
      nodes {
        ...contentfulTemplateCaseStudy
      }
    }
    resourceTemplatePostData: allContentfulTemplateResourceCenter(
      sort: { publishDate: DESC }
      filter: { type: { eq: "Template" } }
    ) @include(if: $queryResourceTemplate) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    resourceGuidePostData: allContentfulTemplateResourceCenter(
      sort: { publishDate: DESC }
      filter: { type: { eq: "Guide" } }
    ) @include(if: $queryResourceGuide) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    resourceToolPostData: allContentfulTemplateResourceCenter(
      sort: { publishDate: DESC }
      filter: { type: { eq: "Tool" } }
    ) @include(if: $queryResourceTool) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    blogHeroSection: contentfulLayoutSection(contentful_id: { eq: "6IOk1CiHOFUpNP8Vy4nbYv" }) @include(if: $queryBlog) {
      ...contentfulLayoutSection
    }
    newsHeroSection: contentfulLayoutSection(contentful_id: { eq: "2UXmA7fSeOjk5ecFXix3HO" }) @include(if: $queryNews) {
      ...contentfulLayoutSection
    }
    caseStudyHeroSection: contentfulLayoutSection(contentful_id: { eq: "6kAh074KnuitShWqNRLCx" })
      @include(if: $queryCaseStudy) {
      ...contentfulLayoutSection
    }
    resourceTemplateHeroSection: contentfulLayoutSection(contentful_id: { eq: "4LuFbhwp2itHFTy42r9QeC" })
      @include(if: $queryResourceTemplate) {
      ...contentfulLayoutSection
    }
    resourceGuideHeroSection: contentfulLayoutSection(contentful_id: { eq: "5aKRxvH0t1tXJGrkW21AYV" })
      @include(if: $queryResourceGuide) {
      ...contentfulLayoutSection
    }
    resourceToolHeroSection: contentfulLayoutSection(contentful_id: { eq: "6LLiDpBwPa308rB4H2Vrop" })
      @include(if: $queryResourceTool) {
      ...contentfulLayoutSection
    }
    conversionPanelSection: contentfulLayoutSection(contentful_id: { eq: "4KXA4lFTbrhPADmbxqr6Si" }) {
      ...contentfulLayoutSection
    }
  }
`;
