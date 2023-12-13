import type { postProps } from 'components/Resources/PostListing';

const filterPostsFunc = (blogs: postProps[], keywords: string, mainItems: string[], recentOrder: string) => {
  let posts: postProps[] = blogs;

  if (keywords) {
    posts = posts.filter((item: postProps) => item?.title?.toLowerCase()?.includes(keywords?.toLowerCase()));
  }
  if (mainItems && mainItems.length > 0) {
    posts = posts.filter((item: postProps) => {
      const includesArray = item?.tags?.filter(tag => mainItems.includes(tag?.name || ''));
      if (includesArray && includesArray.length > 0) {
        return item;
      }

      return;
    });
  }
  if (recentOrder === 'desc') {
    posts = posts.sort((objA, objB) => Number(new Date(objA.publishDate)) - Number(new Date(objB.publishDate)));
  }
  if (recentOrder === '') {
    posts = posts.sort((objA, objB) => Number(new Date(objB.publishDate)) - Number(new Date(objA.publishDate)));
  }

  return posts;
};

export default filterPostsFunc;
