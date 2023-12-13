import twMerge from 'twMerge';

import breadcrumbsStyles, { breadcrumbsChevron, breadcrumbsLink } from 'molecules/Breadcrumbs/Breadcrumbs.styles';
import Icon from 'molecules/Icon';

import parseUrl, { DOMAIN } from 'utils/parseUrl';

import type { VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

interface BreadcrumbsProps {
  breadcrumbs: {
    label?: string;
    link?: string;
  }[];
  isDarkTheme: boolean;
}

const getLinkContent = (link: string) =>
  link
    .split('/')
    .slice(-1)[0]
    .split('-')
    .map(str => str && str[0].toUpperCase() + str.substring(1).toLowerCase())
    .join(' ');

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs, isDarkTheme, ...props }) => {
  const { Component: homeAs, ...homeUrlProps } = parseUrl('https://www.youraspire.com/');
  const HomeComponent = homeAs === 'div' ? 'button' : 'a';
  const homeLinkType = ((isDarkTheme ? 'dark' : 'light') + 'Standard') as VariantProps<typeof breadcrumbsLink>['type'];

  return (
    <div className={twMerge(breadcrumbsStyles())} {...props}>
      <HomeComponent className={twMerge(breadcrumbsLink({ type: homeLinkType }))} {...homeUrlProps}>
        <Icon icon="home" size={20} />
      </HomeComponent>
      {breadcrumbs &&
        breadcrumbs.map(({ label, link }, index) => {
          link = link || `https://${DOMAIN}/`;
          const { Component: as, ...urlProps } = parseUrl(link);
          const Component = as === 'div' ? 'button' : 'a';
          const linkContent = label || getLinkContent(link);

          const isLastEntry = index === breadcrumbs.length - 1;
          const linkType = ((isDarkTheme ? 'dark' : 'light') + (isLastEntry ? 'Active' : 'Standard')) as VariantProps<
            typeof breadcrumbsLink
          >['type'];

          return (
            <>
              <Icon
                className={twMerge(breadcrumbsChevron({ isDarkTheme }))}
                icon="chevron-right"
                size={16}
                aria-hidden={true}
              />
              <Component
                key={link}
                disabled={isLastEntry}
                className={twMerge(breadcrumbsLink({ type: linkType }))}
                {...urlProps}
              >
                {linkContent}
              </Component>
            </>
          );
        })}
    </div>
  );
};

export default Breadcrumbs;
