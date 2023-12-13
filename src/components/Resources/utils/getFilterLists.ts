import type { postProps } from 'components/Resources/PostListing';
import type {
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';
import type { DropdownItemProps } from 'molecules/Dropdown/DropdownItem';

const ignoreCategories = ['Janitorial', 'Landscape'];

type postsProps =
  | ContentfulTemplateBlogPost[]
  | ContentfulTemplateCaseStudy[]
  | ContentfulTemplateNewsPost[]
  | ContentfulTemplateResourceCenter[];

const getCategories = (blogs: postsProps) => {
  const categoryListItems: DropdownItemProps[] = [];
  blogs &&
    blogs.map((item: postProps) => {
      item?.tags?.map(tag => {
        if (
          tag?.name &&
          !ignoreCategories.includes(tag?.name) &&
          categoryListItems.filter(category => category?.label === tag?.name).length === 0
        ) {
          categoryListItems.push({ label: tag.name });
        }

        return;
      });

      return;
    });

  return categoryListItems;
};

export const getRecentItems = () => {
  const recentListItems: DropdownItemProps[] = [{ label: 'Newest to Oldest' }, { label: 'Oldest to Newest' }];

  return recentListItems;
};

export const getIndustryItems = () => {
  const industryListItems: DropdownItemProps[] = [{ label: 'All' }, { label: 'Janitorial' }, { label: 'Landscape' }];

  return industryListItems;
};

export default getCategories;
