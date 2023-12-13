import Badge from 'molecules/Badge';
import Breadcrumbs from 'molecules/Breadcrumbs';
import Icon from 'molecules/Icon';
import Image from 'molecules/Image';
import Section from 'molecules/Section';

import { extractPostDetails, generateBreadcrumbs } from 'components/Hero/PostHero/utils/helpers';

import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';
import type { PostUnion } from 'types';

interface PostHeroProps {
  post: PostUnion;
}

const PostHero: FC<PostHeroProps> = ({ post }) => {
  const { title, tags, featuredImage } = post;

  const postDetails = extractPostDetails(post);
  const breadcrumbs = generateBreadcrumbs(post);

  return (
    <Section background="textureLight" padding="small">
      <div className="flex flex-col gap-8 md:gap-12 xl:gap-16">
        <Breadcrumbs breadcrumbs={breadcrumbs} isDarkTheme={false} />
        <div className="flex flex-col items-center gap-8 sm:gap-12 xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="flex flex-col gap-8 xl:gap-12">
            <div className="flex flex-col items-center gap-6 xl:items-start">
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 xl:justify-start">
                  {tags?.map(
                    tag => tag?.name && <Badge key={tag?.id} label={tag?.name} size="lg" hierarchy="primary" />,
                  )}
                </div>
              )}
              {title && (
                <h1 className="text-center text-display-md-mobile font-extrabold text-gray-900 md:text-display-md-tablet xl:text-left xl:text-display-md">
                  {title}
                </h1>
              )}
            </div>
            <div className="mx-auto flex w-max flex-col items-center gap-4 md:flex-row md:gap-12 xl:mx-0">
              {postDetails.map(({ icon, label, value }) => (
                <div key={value} className="flex items-center gap-3">
                  <Icon size={32} icon={icon} className="hidden fill-primary-600 md:block" />
                  <p className="flex flex-col">
                    <span className="text-center text-md text-gray-700 md:text-left">{label}</span>
                    <span className="text-center text-md font-bold text-gray-900 md:text-left">{value}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          {featuredImage && (
            <Image
              image={featuredImage as StaticImage}
              alt={title || 'Card Image'}
              className="aspect-video object-cover"
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default PostHero;
