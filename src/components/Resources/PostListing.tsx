import { useEffect, useState } from 'react';
import { useSearchParam } from 'react-use';

import Dropdown from 'molecules/Dropdown';
import Section from 'molecules/Section';

import ResourceCard from 'components/Cards/ResourceCard';
import Pagination, { scrollTo } from 'components/Resources/Pagination';
import Sidebar from 'components/Resources/Sidebar';
import filterPostsFunc from 'components/Resources/utils/filterPostsFunc';
import getCategories, { getIndustryItems, getRecentItems } from 'components/Resources/utils/getFilterLists';

import { setSearchParam } from 'utils/functions';

import type { VariantProps } from 'class-variance-authority';
import type { headingContent } from 'components/Heading/Heading.styles';
import type headingStyles from 'components/Heading/Heading.styles';
import type {
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { SectionProps } from 'molecules/Section';
import type { ElementType, FC } from 'react';

export interface HeadingProps extends VariantProps<typeof headingStyles>, SectionProps {
  eyebrow?: string;
  heading?: string;
  headingAs?: ElementType;
  headingSize?: VariantProps<typeof headingContent>['size'];
  subheading?: string;
  buttons?: ButtonProps[];
}

export type postProps =
  | ContentfulTemplateBlogPost
  | ContentfulTemplateNewsPost
  | ContentfulTemplateCaseStudy
  | ContentfulTemplateResourceCenter;

const PostListing: FC<HeadingProps> = ({ padding = 'large', posts, currentPageNumber, resourceType }) => {
  const searchParam = useSearchParam('query') || '';
  const categoryParam = useSearchParam('category');
  const categoryFilters = categoryParam?.split(',') || [];
  const orderParam = useSearchParam('order') || '';

  const [categories, setCategories] = useState<string[]>(categoryFilters || []);
  const [query, setQuery] = useState(searchParam || '');
  const [order, setOrder] = useState(orderParam || '');

  const blogs = posts?.nodes || [];
  const industryListItems = getIndustryItems();
  const filters: postProps[] = filterPostsFunc(blogs, query, categories, order);
  const countsPerPage = 8;
  const totalCounts = filters?.length || 0;
  const totalPage = Math.ceil(totalCounts / countsPerPage);
  const recentListItems = getRecentItems();
  const categoryListItems = getCategories(blogs);

  const orderFunction = (value: number) => {
    setSearchParam('order', value === 1 ? 'desc' : '');
    setOrder(value === 1 ? 'desc' : '');
  };
  const handleTagFiltersChange = (newFilter: string) => {
    const params = new URLSearchParams(document.location.search);
    const categoryArray = params.get('category');
    const categoryItems = categoryArray?.split(',') || [];

    if (categoryItems.includes(newFilter)) {
      setSearchParam('category', categoryItems.filter(tagFilter => tagFilter !== newFilter).join(','));
      setCategories(categoryItems.filter(tagFilter => tagFilter !== newFilter));
    } else {
      setSearchParam('category', [...categoryItems, newFilter].join(','));
      setCategories([...categoryItems, newFilter]);
    }
  };
  const handleInputChange = (newFilter: string) => {
    setSearchParam('query', newFilter);
    setQuery(newFilter);
  };
  const dropdownFilterValue = (value: number) => {
    const params = new URLSearchParams(document.location.search);
    const categoryArray = params.get('category');
    const categoryItems = categoryArray?.split(',') || [];
    const category = industryListItems[value]?.label || '';
    const removedArray = categoryItems.filter(item => !['Janitorial', 'Landscape'].includes(item));
    switch (category) {
      case 'Janitorial':
      case 'Landscape':
        setSearchParam('category', [...removedArray, category].join(','));
        setCategories([...removedArray, category]);

        return;
      default:
        setSearchParam('category', removedArray.join(','));
        setCategories(removedArray);
    }
  };
  const clearFilterCategories = () => {
    setSearchParam('category', '');
    setSearchParam('query', '');
    setCategories([]);
    setQuery('');
  };

  useEffect(() => {
    currentPageNumber > 1 && scrollTo(`${resourceType}-listing`, 120);
  }, [currentPageNumber]);

  return (
    <Section background="none" padding={padding}>
      <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-12">
        <Sidebar
          categoryListItems={categoryListItems}
          handleTagFiltersChange={handleTagFiltersChange}
          handleInputChange={handleInputChange}
          dropdownFilterValue={dropdownFilterValue}
          clearFilterCategories={clearFilterCategories}
          categories={categories}
          query={query}
        />
        <div id={`${resourceType}-listing`} className="flex w-full flex-col items-center gap-12 lg:max-w-[800px]">
          <div className="flex w-full flex-col items-center justify-between gap-4 border-b border-gray-300 pb-4 sm:flex-row">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold text-black">
                {query ? 'Viewing all Related Posts' : 'Viewing all Posts'}
              </p>
              {categories.length > 0 && (
                <div className="flex max-w-md flex-wrap items-center gap-3 text-sm font-semibold text-gray-700">
                  {categories.map((category, idx) => (
                    <div key={category} className="flex items-center gap-3">
                      {idx > 0 && <div className="h-1 w-1 bg-primary-600" />}
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="h-fit w-full sm:max-w-xs">
              <Dropdown
                label={recentListItems[0]?.label || ''}
                items={recentListItems}
                type="filter"
                onChange={idx => orderFunction(idx)}
              />
            </div>
          </div>
          {filters.length > 0 ? (
            <div className="flex w-full flex-col gap-8 sm:grid sm:grid-cols-2">
              {filters
                .slice((currentPageNumber - 1) * countsPerPage, currentPageNumber * countsPerPage)
                .map((blog: postProps) => (
                  <ResourceCard key={blog?.id} {...blog} />
                ))}
            </div>
          ) : (
            <div className="flex w-full flex-col">
              <p className="text-center text-xl">No results found</p>
            </div>
          )}
          {totalPage > 1 && (
            <Pagination
              total={totalCounts}
              currentPage={currentPageNumber || 1}
              countPerpage={countsPerPage}
              toId={`${resourceType}-listing`}
              baseUrl={`/${resourceType}`}
              resourceType={resourceType}
              space={120}
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default PostListing;
