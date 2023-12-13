import { graphql } from 'gatsby';
import useStaticFooter from 'hooks/useStaticFooter';
import useStaticHeader from 'hooks/useStaticHeader';
import { useRef } from 'react';
import { contentStyles, richTextStyles, sidebarStyles } from 'styles/templates/Post.styles';
import { twMerge } from 'tailwind-merge';

import ScrollToTop from 'molecules/ScrollToTop';
import Section from 'molecules/Section';
import SocialShare from 'molecules/SocialShare';
import Subscribe from 'molecules/Subscribe';

import { formatPostsForCardDeck } from 'components/CardDeck/utils/helpers';
import CardDeckCarousel from 'components/CardDeck/variants/Carousel';
import DemoCard from 'components/Cards/DemoCard';
import { generateUrl, isResourceCenter } from 'components/Cards/utils/helpers';
import ConversionPanel from 'components/ConversionPanel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PostHero from 'components/Hero/PostHero';
import TableOfContents from 'components/TableOfContents';

import richTextParser from 'utils/richTextParser/richTextParser';

import type { ConversionPanelProps } from 'components/ConversionPanel';
import type { FooterProps } from 'components/Footer';
import type { HeaderProps } from 'components/Header';
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
import type { RichText } from 'utils/richTextParser/richTextParser';

interface PostDataProps {
  blogPostData: ContentfulTemplateBlogPost;
  recentBlogPosts: ContentfulTemplateBlogPostConnection;
  newsPostData: ContentfulTemplateNewsPost;
  recentNewsPosts: ContentfulTemplateNewsPostConnection;
  caseStudiesPostData: ContentfulTemplateCaseStudy;
  recentCaseStudiesPosts: ContentfulTemplateCaseStudyConnection;
  resourceCenterPostData: ContentfulTemplateResourceCenter;
  recentResourceCenterPosts: ContentfulTemplateResourceCenterConnection;
  conversionPanelSection: ContentfulLayoutSection;
}

const Post: FC<PageProps<PostDataProps>> = ({
  data: {
    blogPostData,
    caseStudiesPostData,
    conversionPanelSection,
    newsPostData,
    recentBlogPosts,
    recentCaseStudiesPosts,
    recentNewsPosts,
    recentResourceCenterPosts,
    resourceCenterPostData,
  },
}) => {
  const postRef = useRef<HTMLDivElement | null>(null);
  const { header } = useStaticHeader();
  const { footer } = useStaticFooter();

  const post = blogPostData || newsPostData || caseStudiesPostData || resourceCenterPostData;
  const recentPosts = recentBlogPosts || recentNewsPosts || recentCaseStudiesPosts || recentResourceCenterPosts;

  const formattedPosts = formatPostsForCardDeck(recentPosts);
  const pathname = generateUrl({
    __typename: post.__typename,
    slug: post.slug,
    type: isResourceCenter(post) ? post.type : undefined,
  });

  return (
    <div>
      {header && <Header {...(header as HeaderProps)} />}
      <main>
        <PostHero post={post} />
        <Section>
          <div className="relative -translate-y-4" ref={postRef}>
            <ScrollToTop contentRef={postRef} />
            <div className={twMerge(contentStyles())}>
              <aside className={twMerge(sidebarStyles())}>
                <div className="hidden h-fit xl:flex">
                  <TableOfContents richText={post.body as RichText} />
                </div>
                {pathname && <SocialShare label="Share" pathname={pathname} />}
                <Subscribe />
              </aside>
              <article className="flex flex-col gap-8">
                <div className="xl:hidden">
                  <TableOfContents richText={post.body as RichText} />
                </div>
                <div className={twMerge(richTextStyles())}>{richTextParser(post.body as RichText)}</div>
                <DemoCard
                  heading="Learn how Aspire software powers ServiceMaster Clean's growth"
                  subheading="Aspire is here to help you achieve your goals. Tell us what you're looking for and we'll match you with a solution that meets your needs."
                  button={{
                    hierarchy: 'primary',
                    label: 'Book Demo',
                    href: 'https://www.youraspire.com/demo',
                  }}
                />
              </article>
            </div>
          </div>
        </Section>
        <CardDeckCarousel
          background="primary25"
          cardDeckHeading={{
            contained: false,
            fullWidth: true,
            eyebrow: 'Resources',
            heading: 'The latest articles from Aspire Software',
            headingSize: 'md',
            subheading: 'Practical advice and tools to help you run your field service business.',
          }}
          cards={formattedPosts}
        />
        <ConversionPanel
          {...(conversionPanelSection['component'] as ConversionPanelProps)}
          {...(conversionPanelSection as SectionProps)}
        />
      </main>
      {footer && <Footer {...(footer as FooterProps)} background="blue900" padding="small" contained />}
    </div>
  );
};

export default Post;

export const postQuery = graphql`
  query templatePostQuery(
    $slug: String!
    $queryBlog: Boolean!
    $queryNews: Boolean!
    $queryCaseStudy: Boolean!
    $queryResourceCenter: Boolean!
  ) {
    blogPostData: contentfulTemplateBlogPost(slug: { eq: $slug }) @include(if: $queryBlog) {
      ...contentfulTemplateBlogPost
    }
    recentBlogPosts: allContentfulTemplateBlogPost(
      limit: 12
      filter: { slug: { ne: $slug } }
      sort: { publishDate: DESC }
    ) @include(if: $queryBlog) {
      nodes {
        ...contentfulTemplateBlogPost
      }
    }
    newsPostData: contentfulTemplateNewsPost(slug: { eq: $slug }) @include(if: $queryNews) {
      ...contentfulTemplateNewsPost
    }
    recentNewsPosts: allContentfulTemplateNewsPost(
      limit: 12
      filter: { slug: { ne: $slug } }
      sort: { publishDate: DESC }
    ) @include(if: $queryNews) {
      nodes {
        ...contentfulTemplateNewsPost
      }
    }
    caseStudiesPostData: contentfulTemplateCaseStudy(slug: { eq: $slug }) @include(if: $queryCaseStudy) {
      ...contentfulTemplateCaseStudy
    }
    recentCaseStudiesPosts: allContentfulTemplateCaseStudy(
      limit: 12
      filter: { slug: { ne: $slug } }
      sort: { publishDate: DESC }
    ) @include(if: $queryCaseStudy) {
      nodes {
        ...contentfulTemplateCaseStudy
      }
    }
    resourceCenterPostData: contentfulTemplateResourceCenter(slug: { eq: $slug }) @include(if: $queryResourceCenter) {
      ...contentfulTemplateResourceCenter
    }
    recentResourceCenterPosts: allContentfulTemplateResourceCenter(
      limit: 12
      filter: { slug: { ne: $slug } }
      sort: { publishDate: DESC }
    ) @include(if: $queryResourceCenter) {
      nodes {
        ...contentfulTemplateResourceCenter
      }
    }
    conversionPanelSection: contentfulLayoutSection(contentful_id: { eq: "5yWQySom6xGLPak03YIxm9" }) {
      ...contentfulLayoutSection
    }
  }
`;
