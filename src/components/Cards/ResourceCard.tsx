import { Link } from 'gatsby';
import { type FC, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Image from 'molecules/Image';

import ResourceCardTags from 'components/Cards/components/ResourceCardTags';
import {
  cardBodyStyles,
  cardStyles,
  cardTextStyles,
  imageStyles,
  infoTextStyles,
  spacerStyles,
  summaryStyles,
  titleStyles,
} from 'components/Cards/styles/ResourceCard.styles';
import { generateUrl, isResourceCenter } from 'components/Cards/utils/helpers';

import calculateReadTime from 'utils/_tests_/calculateReadTime';
import { contentfulProps } from 'utils/emptyTypes';
import richTextParser from 'utils/richTextParser/richTextParser';

import type { VariantProps } from 'class-variance-authority';
import type { tagStyles, tagsContainerStyles } from 'components/Cards/styles/ResourceCard.styles';
import type {
  ContentfulTemplateBlogPost,
  ContentfulTemplateCaseStudy,
  ContentfulTemplateNewsPost,
  ContentfulTemplateResourceCenter,
} from 'graphqlTypes';
import type { StaticImage } from 'molecules/Image';
import type { RichText } from 'utils/richTextParser/richTextParser';

export type UnionResources =
  | ContentfulTemplateBlogPost
  | ContentfulTemplateCaseStudy
  | ContentfulTemplateNewsPost
  | ContentfulTemplateResourceCenter;

export interface AdditionalResourceProps {
  layout?: VariantProps<typeof cardStyles>['layout'];
  theme?: VariantProps<typeof cardStyles>['theme'];
  tagBackgroundColor?: VariantProps<typeof tagsContainerStyles>['backgroundColor'] | undefined;
  tagTextColor?: VariantProps<typeof tagStyles>['textColor'] | undefined;
  padding?: VariantProps<typeof cardBodyStyles>['padding'];
  showSummary?: boolean;
  showImage?: boolean;
  showButton?: boolean;
  showInfoBar?: boolean;
}

export type ResourceCardProps = Omit<UnionResources, 'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'> &
  AdditionalResourceProps;

const ResourceCard: FC<ResourceCardProps> = ({
  author,
  body,
  featuredImage,
  showButton = true,
  showImage = true,
  showInfoBar = true,
  showSummary = true,
  layout = 'vertical',
  padding = 'none',
  publishDate,
  summary,
  tags,
  tagTextColor = 'white',
  tagBackgroundColor = 'primary-600',
  title,
  theme = 'light',
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

    if (tags?.length === 1) {
      return;
    }

    const animationInterval = setInterval(animateWrapper, 50);

    return () => clearInterval(animationInterval);
  }, [tags, tagsWidth]);

  const url = generateUrl({
    __typename: props.__typename,
    slug: props.slug,
    type: isResourceCenter(props) ? props.type : undefined,
  });

  const image = featuredImage || {
    file: {
      url: '/images/aspire-fallback-image.png',
    },
  };

  return (
    <div className={twMerge(cardStyles({ layout, theme, showImage }))}>
      {url && <Link to={url} className="absolute inset-0 z-10" />}
      {showImage && (
        <div className="relative w-full">
          {tags?.length && (
            <ResourceCardTags
              tagPosition="absolute"
              tagBackgroundColor={tagBackgroundColor}
              tagTextColor={tagTextColor}
              tags={tags}
              wrapperRef={wrapperRef}
              position={position}
            />
          )}
          <Image image={image as StaticImage} alt={title || 'Card Image'} className={twMerge(imageStyles())} />
        </div>
      )}
      <div className={twMerge(cardBodyStyles({ layout, padding, showImage }))}>
        <div className={twMerge(cardTextStyles({ layout }))}>
          {showInfoBar && (publishDate || body || author) && (
            <p className={twMerge(infoTextStyles({ theme }))}>
              {publishDate && <span>{publishDate}</span>}
              <span className={twMerge(spacerStyles({ theme }))} />
              {body && <span>{calculateReadTime(body as RichText)} min read</span>}
              <span className={twMerge(spacerStyles({ theme }))} />
              {author && author?.fullName && <span>{author.fullName}</span>}
            </p>
          )}
          {!showImage && tags?.length && (
            <div className="relative w-full">
              <ResourceCardTags
                tagPosition="relative"
                tagBackgroundColor={tagBackgroundColor}
                tagTextColor={tagTextColor}
                tags={tags}
                wrapperRef={wrapperRef}
                position={position}
              />
            </div>
          )}
          {title && <p className={twMerge(titleStyles({ theme }))}>{title}</p>}
          {showSummary && summary && (
            <div className={`${twMerge(summaryStyles({ theme }))} line-clamp-2`}>
              {richTextParser(summary as RichText, 14)}
            </div>
          )}
        </div>
        {showButton && url && (
          <Button
            hierarchy="link"
            size="sm"
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
