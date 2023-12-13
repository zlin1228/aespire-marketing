import path from 'path';

import type { GatsbyNode } from 'gatsby';
import type {
  ContentfulTemplateBlogPostConnection,
  ContentfulTemplateCaseStudyConnection,
  ContentfulTemplateNewsPostConnection,
  ContentfulTemplatePageConnection,
  ContentfulTemplateResourceCenterConnection,
} from 'graphqlTypes';

const postCounts = 8;

interface AllPageData {
  allContentfulTemplatePage: ContentfulTemplatePageConnection;
  allContentfulTemplateBlogPost: ContentfulTemplateBlogPostConnection;
  allContentfulTemplateNewsPost: ContentfulTemplateNewsPostConnection;
  allContentfulTemplateCaseStudy: ContentfulTemplateCaseStudyConnection;
  allContentfulTemplateResourceCenter: ContentfulTemplateResourceCenterConnection;
}

interface AllBlogData {
  data: {
    allContentfulTemplateBlogPost: ContentfulTemplateBlogPostConnection;
  };
}

interface AllCaseStudyData {
  data: {
    allContentfulTemplateCaseStudy: ContentfulTemplateCaseStudyConnection;
  };
}

interface AllNewsData {
  data: {
    allContentfulTemplateNewsPost: ContentfulTemplateNewsPostConnection;
  };
}

interface AllResourceCenterData {
  data: {
    allContentfulTemplateResourceCenter: ContentfulTemplateResourceCenterConnection;
  };
}

export const onCreateWebpackConfig: GatsbyNode['sourceNodes'] = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve('./src'), 'node_modules'],
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data: pageData } = await graphql<AllPageData>(`
    {
      allContentfulTemplatePage {
        nodes {
          __typename
          id
          contentful_id
          internalName
          slug
        }
      }
    }
  `);

  const { data: blogData } = (await graphql<AllPageData>(`
    {
      allContentfulTemplateBlogPost {
        nodes {
          __typename
          id
          contentful_id
          internalName
          slug
        }
      }
    }
  `)) as AllBlogData;

  const { data: newsData } = (await graphql<AllPageData>(`
    {
      allContentfulTemplateNewsPost {
        nodes {
          __typename
          id
          contentful_id
          internalName
          slug
        }
      }
    }
  `)) as AllNewsData;

  const { data: caseStudyData } = (await graphql<AllPageData>(`
    {
      allContentfulTemplateCaseStudy {
        nodes {
          __typename
          id
          contentful_id
          internalName
          slug
        }
      }
    }
  `)) as AllCaseStudyData;

  const { data: resourceCenterData } = (await graphql<AllPageData>(`
    {
      allContentfulTemplateResourceCenter {
        nodes {
          __typename
          id
          contentful_id
          internalName
          slug
          type
        }
      }
    }
  `)) as AllResourceCenterData;

  pageData?.allContentfulTemplatePage.nodes.forEach(node => {
    const { slug, id, updatedAt } = node;
    if (!slug) {
      return;
    }

    const pagePath = slug[0] === '/' ? slug : `/${slug}`;
    const resouceListings = ['blog', 'case-studies', 'news', 'tools', 'templates', 'guides'];

    if (resouceListings.includes(slug)) {
      createPage({
        ownerNodeId: id,
        path: pagePath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug,
          updatedAt,
          noIndex: false,
          pageNumber: 1,
          queryBlog: slug === 'blog',
          queryNews: slug === 'news',
          queryCaseStudy: slug === 'case-studies',
          queryResourceTemplate: slug === 'templates',
          queryResourceGuide: slug === 'guides',
          queryResourceTool: slug === 'tools',
        },
      });
    } else {
      createPage({
        ownerNodeId: id,
        path: pagePath,
        component: path.resolve('./src/templates/Page.tsx'),
        context: {
          slug,
          updatedAt,
        },
      });
    }
  });

  const blogPosts = blogData.allContentfulTemplateBlogPost.nodes;

  blogData?.allContentfulTemplateBlogPost.nodes.forEach(node => {
    const { slug, id, updatedAt } = node;
    if (!slug) {
      return;
    }

    const pagePath = slug[0] === '/' ? `/blog${slug}` : `/blog/${slug}`;

    createPage({
      ownerNodeId: id,
      path: pagePath,
      component: path.resolve('./src/templates/Post.tsx'),
      context: {
        slug,
        updatedAt,
        queryBlog: true,
        queryNews: false,
        queryCaseStudy: false,
        queryResourceCenter: false,
      },
    });
  });

  Array(Math.ceil((blogPosts?.length || 1) / postCounts))
    .fill(null)
    .forEach((_, index) => {
      const blogPath = `/blog/page/${index + 1}`;
      actions.createPage({
        path: blogPath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug: 'blog',
          pageNumber: index + 1,
          noIndex: false,
          queryBlog: true,
          queryNews: false,
          queryCaseStudy: false,
          queryResourceTemplate: false,
          queryResourceGuide: false,
          queryResourceTool: false,
        },
      });
    });

  const newsPosts = newsData.allContentfulTemplateNewsPost.nodes;

  newsData?.allContentfulTemplateNewsPost.nodes.forEach(node => {
    const { slug, id, updatedAt } = node;
    if (!slug) {
      return;
    }

    const pagePath = slug[0] === '/' ? `/news${slug}` : `/news/${slug}`;

    createPage({
      ownerNodeId: id,
      path: pagePath,
      component: path.resolve('./src/templates/Post.tsx'),
      context: {
        slug,
        updatedAt,
        queryBlog: false,
        queryNews: true,
        queryCaseStudy: false,
        queryResourceCenter: false,
      },
    });
  });

  Array(Math.ceil((newsPosts?.length || 1) / postCounts))
    .fill(null)
    .forEach((_, index) => {
      const newsPath = `/news/page/${index + 1}`;
      actions.createPage({
        path: newsPath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug: 'news',
          pageNumber: index + 1,
          noIndex: false,
          queryBlog: false,
          queryNews: true,
          queryCaseStudy: false,
          queryResourceTemplate: false,
          queryResourceGuide: false,
          queryResourceTool: false,
        },
      });
    });

  const caseStudyPosts = caseStudyData.allContentfulTemplateCaseStudy.nodes;

  caseStudyData?.allContentfulTemplateCaseStudy.nodes.forEach(node => {
    const { slug, id, updatedAt } = node;
    if (!slug) {
      return;
    }

    const pagePath = slug[0] === '/' ? `/case-studies${slug}` : `/case-studies/${slug}`;

    createPage({
      ownerNodeId: id,
      path: pagePath,
      component: path.resolve('./src/templates/Post.tsx'),
      context: {
        slug,
        updatedAt,
        queryBlog: false,
        queryNews: false,
        queryCaseStudy: true,
        queryResourceCenter: false,
      },
    });
  });

  Array(Math.ceil((caseStudyPosts?.length || 1) / postCounts))
    .fill(null)
    .forEach((_, index) => {
      const caseStudyPath = `/case-studies/page/${index + 1}`;
      actions.createPage({
        path: caseStudyPath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug: 'case-studies',
          pageNumber: index + 1,
          noIndex: false,
          queryBlog: false,
          queryNews: false,
          queryCaseStudy: true,
          queryResourceTemplate: false,
          queryResourceGuide: false,
          queryResourceTool: false,
        },
      });
    });

  const resourceTemplatePosts = resourceCenterData.allContentfulTemplateResourceCenter.nodes?.filter(
    item => item?.type === 'Template',
  );
  const resourceGuidePosts = resourceCenterData.allContentfulTemplateResourceCenter.nodes?.filter(
    item => item?.type === 'Guide',
  );
  const resourceToolPosts = resourceCenterData.allContentfulTemplateResourceCenter.nodes?.filter(
    item => item?.type === 'Tool',
  );

  resourceCenterData?.allContentfulTemplateResourceCenter.nodes.forEach(node => {
    const { slug, id, updatedAt, type } = node;
    if (!slug) {
      return;
    }

    const pagePath =
      slug[0] === '/' ? `/resources/${type?.toLowerCase()}${slug}` : `/resources/${type?.toLowerCase()}/${slug}`;

    createPage({
      ownerNodeId: id,
      path: pagePath,
      component: path.resolve('./src/templates/Post.tsx'),
      context: {
        slug,
        updatedAt,
        queryBlog: false,
        queryNews: false,
        queryCaseStudy: false,
        queryResourceCenter: true,
      },
    });
  });

  Array(Math.ceil((resourceTemplatePosts?.length || 1) / postCounts))
    .fill(null)
    .forEach((_, index) => {
      const resourceCenterPath = `/templates/page/${index + 1}`;
      actions.createPage({
        path: resourceCenterPath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug: 'templates',
          pageNumber: index + 1,
          noIndex: false,
          queryBlog: false,
          queryNews: false,
          queryCaseStudy: false,
          queryResourceTemplate: true,
          queryResourceGuide: false,
          queryResourceTool: false,
        },
      });
    });

  Array(Math.ceil((resourceGuidePosts?.length || 1) / postCounts))
    .fill(null)
    .forEach((_, index) => {
      const resourceCenterPath = `/guides/page/${index + 1}`;
      actions.createPage({
        path: resourceCenterPath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug: 'guides',
          pageNumber: index + 1,
          noIndex: false,
          queryBlog: false,
          queryNews: false,
          queryCaseStudy: false,
          queryResourceTemplate: false,
          queryResourceGuide: true,
          queryResourceTool: false,
        },
      });
    });

  Array(Math.ceil((resourceToolPosts?.length || 1) / postCounts))
    .fill(null)
    .forEach((_, index) => {
      const resourceCenterPath = `/tools/page/${index + 1}`;
      actions.createPage({
        path: resourceCenterPath,
        component: path.resolve('./src/templates/PostListing.tsx'),
        context: {
          slug: 'tools',
          pageNumber: index + 1,
          noIndex: false,
          queryBlog: false,
          queryNews: false,
          queryCaseStudy: false,
          queryResourceTemplate: false,
          queryResourceGuide: false,
          queryResourceTool: true,
        },
      });
    });
};
