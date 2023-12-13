import { Link } from 'gatsby';
import { type FC, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Image from 'molecules/Image';

import { imageStyles, tagStyles, tagsContainerStyles } from 'components/Cards/styles/ResourceCard.styles';
import { generateUrl, isResourceCenter } from 'components/Cards/utils/helpers';

import calculateReadTime from 'utils/_tests_/calculateReadTime';
import { contentfulProps } from 'utils/emptyTypes';
import richTextParser from 'utils/richTextParser/richTextParser';

import type {
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';
import type { ImageData, StaticImage } from 'molecules/Image';
import type { RichText } from 'utils/richTextParser/richTextParser';

export type UnionResources =
  | ContentfulTemplateBlogPost
  | ContentfulTemplateCaseStudy
  | ContentfulTemplateNewsPost
  | ContentfulTemplateResourceCenter;

export interface AdditionalResourceProps {
  test?: string;
}

export type ResourceCardProps = Omit<UnionResources, 'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'> &
  AdditionalResourceProps;

const ResourceCard: FC<ResourceCardProps> = ({
  author,
  body,
  featuredImage,
  publishDate,
  summary,
  tags,
  title,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(0);
  const [tagsWidth, setTagsWidth] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      setTagsWidth(wrapperRef.current.scrollWidth);
    }
  }, [tags]);

  useEffect(() => {
    const animateWrapper = () => {
      setPosition(prevPosition => {
        if (-prevPosition >= tagsWidth) {
          return 0;
        }

        return prevPosition - 1;
      });
    };

    const animationInterval = setInterval(animateWrapper, 50);

    return () => clearInterval(animationInterval);
  }, [tags, tagsWidth]);

  const url = generateUrl({
    __typename: props.__typename,
    slug: props.slug,
    type: isResourceCenter(props) ? props.type : undefined,
  });

  return (
    <div className="relative z-10 flex flex-col bg-yellow-25 md:flex-row">
      {url && <Link to={url} className="absolute inset-0 z-10" />}
      <div className="relative w-full md:w-[50%] xl:w-[592px]">
        <div className={twMerge(tagsContainerStyles({ position: 'absolute', backgroundColor: 'green-600' }))}>
          <div className="flex items-center gap-4" ref={wrapperRef} style={{ transform: `translateX(${position}px)` }}>
            {tags?.map(tag => (
              <span key={tag?.id} className={twMerge(tagStyles())}>
                {tag?.name}
              </span>
            ))}
            {tags?.map(tag => (
              <span key={`${tag?.id}-1`} className={twMerge(tagStyles())}>
                {tag?.name}
              </span>
            ))}
          </div>
        </div>
        {featuredImage && (
          <Image
            image={featuredImage as StaticImage}
            alt={title || 'Card Image'}
            className={`${twMerge(imageStyles())} !h-full object-center`}
          />
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-4 p-4 sm:p-6 md:max-w-[50%] lg:p-8 xl:max-w-[624px]">
        <div className="flex flex-col gap-4">
          {body && (
            <span className="text-sm font-semibold text-gray-700">{calculateReadTime(body as RichText)} min read</span>
          )}
          {title && (
            <p className="text-xl font-bold text-gray-900 md:text-display-xs-tablet lg:text-display-xs">{title}</p>
          )}
          {summary && <div className="text-md text-gray-700 md:text-lg">{richTextParser(summary as RichText, 14)}</div>}
        </div>
        {author && (
          <div className="flex items-center gap-4">
            {author?.headshot && (
              <Image
                image={author?.headshot as ImageData}
                alt={author?.fullName || ''}
                className="min-height-[48px] h-[48px] w-[48px] min-w-[48px] rounded-full border-[3px] border-gray-700"
              />
            )}
            {author?.fullName && (
              <div className="flex flex-col">
                <p className="text-md font-bold text-gray-900">{author?.fullName}</p>
                {publishDate && <span className="text-md text-gray-700">{publishDate}</span>}
              </div>
            )}
          </div>
        )}
        {url && (
          <Button
            hierarchy="link"
            size="lg"
            href={{
              href: `https://youraspire.com${url}`,
              ...contentfulProps,
            }}
            label="Learn more"
            endIcon="arrow-right"
          />
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
