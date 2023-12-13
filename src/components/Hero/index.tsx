import { useWindowSize } from '@react-hookz/web';
import { useMedia } from 'react-use';
import twMerge from 'twMerge';

import Breadcrumbs from 'molecules/Breadcrumbs';
import Button from 'molecules/Button';
import Image from 'molecules/Image';
import Rating from 'molecules/Rating';
import Section from 'molecules/Section';

import CardDeck from 'components/CardDeck/variants/CardDeck';
import FeaturedResourceCard from 'components/Cards/FeaturedResourceCard';
import ResourceCard from 'components/Cards/ResourceCard';
import ComponentForm from 'components/Form';
import { buttonContainer, headingContent, headingEyebrow, headingSubhead } from 'components/Heading/Heading.styles';
import {
  containerStyles,
  contentStyles,
  formStyles,
  imageContainerStyles,
  imageStyles,
  resourcesGridStyles,
  textStyles,
  videoEmbedStyles,
  wrapperStyles,
} from 'components/Hero/Hero.styles';
import {
  primaryResourceCardLayout,
  setResourceCardTagColors,
  showPrimaryResourceCardSummary,
  showResourceCardImage,
  showResourceCardInfoBar,
  showResourceCardSummary,
} from 'components/Hero/utils/resourcesUtils';

import { contentfulProps } from 'utils/emptyTypes';
import getBreadcrumbLinks from 'utils/getBreadcrumbLinks';
import getTheme from 'utils/getTheme';
import getVideoId from 'utils/getVideoId';
import { DOMAIN } from 'utils/parseUrl';
import richTextParser from 'utils/richTextParser/richTextParser';

import screens from 'theme/spacing/screens';

import type { CardDeckProps } from 'components/CardDeck';
import type { ContentfulComponentHero } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { ImageData } from 'molecules/Image';
import type { SectionProps, backgroundType } from 'molecules/Section';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export type HeroProps = Omit<ContentfulComponentHero, 'children'> & SectionProps;
export type alignmentType = 'Center Aligned' | 'Left Aligned';

const Hero: FC<HeroProps> = ({
  alignment,
  background,
  backgroundImage,
  cardDeck,
  contained,
  padding,
  breadcrumbsOverride,
  buttons,
  content,
  eyebrow,
  featuredResources,
  hasBreadcrumbs,
  heading,
  isFullHeightImage,
  rating,
  reference,
  sectionIdLink,
}) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const isNotFoundPage = sectionIdLink === 'not-found-hero-section';
  const isMobile = useMedia(`(max-width: ${screens.xs})`, false);
  const { width } = useWindowSize();

  const links = getBreadcrumbLinks(url);
  const crumbs = breadcrumbsOverride
    ? breadcrumbsOverride.map(link => ({ label: link?.label || '', link: link?.link || `https://${DOMAIN}` }))
    : links.map(link => ({ label: '', link }));

  const heroBg = (backgroundImage ? 'gray900' : background) as backgroundType;

  const theme = getTheme(heroBg || 'white');
  const resourceCardTagColors = setResourceCardTagColors(featuredResources?.[0] || null);
  const isListingPage = featuredResources?.length === 1;
  const isResource = featuredResources && featuredResources.length > 0;

  return (
    <div>
      <Section
        id={sectionIdLink}
        background={heroBg}
        padding={padding}
        contained={contained}
        fullWidth
        containerClass="!max-w-full"
      >
        <div className={`${twMerge(containerStyles())} !pb-0`}>
          {hasBreadcrumbs && <Breadcrumbs breadcrumbs={crumbs} isDarkTheme={theme === 'dark'} />}
          <div
            className={`${twMerge(
              wrapperStyles({ alignment: alignment as alignmentType, isNotFoundPage, isFullHeightImage }),
            )} ${isMobile && 'flex-col-reverse'}`}
          >
            <div className={twMerge(contentStyles({ alignment: alignment as alignmentType, isNotFoundPage }))}>
              <div className={twMerge(textStyles({ alignment: alignment as alignmentType }))}>
                {eyebrow && <p className={twMerge(headingEyebrow({ theme }))}>{eyebrow}</p>}
                {heading && (
                  <h1 className={twMerge(headingContent({ theme, size: 'lg', isNotFoundPage }))}>{heading}</h1>
                )}
                {content && (
                  <div className={twMerge(headingSubhead({ theme, isNotFoundPage }))}>
                    {richTextParser(content as RichText, undefined, theme)}
                  </div>
                )}
                {isResource && (
                  <div className="hs-subscribe-form mx-auto flex w-full max-w-lg justify-center">
                    <ComponentForm
                      formId="4071ec80-df56-48e2-ac0e-f1fa7e60b2c8"
                      isSubscribe
                      isInline
                      {...contentfulProps}
                    />
                  </div>
                )}
                {buttons && (
                  <div className={twMerge(buttonContainer({ isNotFoundPage }))}>
                    {buttons.map(button => button && <Button {...(button as ButtonProps)} key={button.internalName} />)}
                  </div>
                )}
              </div>
              {rating && <Rating {...rating} alignment={alignment as alignmentType} />}
            </div>
            {reference && reference?.__typename === 'ContentfulItemMediaAsset' && (
              <div
                className={twMerge(
                  imageContainerStyles({ alignment: alignment as alignmentType, isNotFoundPage, isFullHeightImage }),
                )}
              >
                {reference?.youtubeEmbedLink && (
                  <iframe
                    className={twMerge(videoEmbedStyles())}
                    src={`https://www.youtube.com/embed/${getVideoId(reference?.youtubeEmbedLink)}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    aria-label="embed video"
                  />
                )}
                {reference?.image && (
                  <>
                    <Image
                      image={reference?.image as ImageData}
                      alt={reference?.title || ''}
                      className={twMerge(imageStyles({ isFullHeightImage }))}
                    />
                    {isFullHeightImage && (
                      <Image
                        image={reference?.image as ImageData}
                        alt={reference?.title || ''}
                        className={twMerge(imageStyles({ isFullHeightImage: false, hidden: true }))}
                      />
                    )}
                  </>
                )}
              </div>
            )}
            {reference && reference?.__typename === 'ContentfulComponentForm' && (
              <div className={twMerge(formStyles())}>
                <ComponentForm {...reference} sectionID={reference?.id} />
              </div>
            )}
          </div>
          {isListingPage ? (
            <FeaturedResourceCard {...featuredResources[0]} />
          ) : (
            <>
              {featuredResources && featuredResources?.length > 0 && (
                <div className={twMerge(resourcesGridStyles())}>
                  <div>
                    <ResourceCard
                      theme="primary-700"
                      layout={primaryResourceCardLayout(width)}
                      tagBackgroundColor={resourceCardTagColors?.background}
                      tagTextColor={resourceCardTagColors?.color}
                      showSummary={showPrimaryResourceCardSummary(width)}
                      showButton={false}
                      padding="sm"
                      {...featuredResources?.[0]}
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    {featuredResources?.slice(1).map(resource => {
                      const resourceTagColors = resource && setResourceCardTagColors(resource);

                      return (
                        <ResourceCard
                          key={resource?.id}
                          theme="primary-700"
                          layout="horizontal"
                          tagBackgroundColor={resourceTagColors?.background}
                          tagTextColor={resourceTagColors?.color}
                          showImage={showResourceCardImage(width)}
                          showInfoBar={showResourceCardInfoBar(width)}
                          showSummary={showResourceCardSummary(width)}
                          showButton={false}
                          {...resource}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {backgroundImage && (
          <div className="relative inset-0 aspect-video h-full w-full bg-no-repeat xl:absolute">
            <div className="absolute inset-0 z-10 h-full w-full bg-hero-overlay-mobile xl:bg-hero-overlay" />
            <Image
              image={backgroundImage?.image as ImageData}
              alt={backgroundImage?.title || ''}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {isResource && <div className="absolute bottom-0 left-[calc(50%-50vw)] h-[25%] w-screen bg-white" />}
      </Section>
      {cardDeck && (
        <div className="z-10 -translate-y-10 px-4">
          <CardDeck {...cardDeck} variant={'Contained' as CardDeckProps['variant']} />
        </div>
      )}
    </div>
  );
};

export default Hero;
