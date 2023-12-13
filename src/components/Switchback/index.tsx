import { useState } from 'react';
import { useMedia } from 'react-use';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Image from 'molecules/Image';
import Section from 'molecules/Section';

import StatisticsItem from 'components/StatisticsPanel/components/StatisticsItem';
import containStyles, {
  buttonContainer,
  headingContent,
  headingEyebrow,
  headingEyebrowIcon,
  headingStyles,
  headingSubhead,
  switcherContent,
  switcherTab,
  switcherTabMobile,
} from 'components/Switchback/Switchback.styles';

import getTheme from 'utils/getTheme';
import getVideoId from 'utils/getVideoId';
import onKeyDown from 'utils/onKeyDown';
import richTextParser from 'utils/richTextParser/richTextParser';

import screens from 'theme/spacing/screens';

import type { VariantProps } from 'class-variance-authority';
import type { ContentfulComponentStatisticsCard, ContentfulItemSwitchbackSwitcher } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { ImageData } from 'molecules/Image';
import type { SectionProps } from 'molecules/Section';
import type { ElementType, FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export interface SwitchbackProps extends VariantProps<typeof headingStyles>, SectionProps {
  eyebrow?: string;
  heading?: string;
  headingAs?: ElementType;
  headingSize?: VariantProps<typeof headingContent>['size'];
  subheading?: string;
  buttons?: ButtonProps[];
  reverse?: boolean;
}

const Switchback: FC<SwitchbackProps> = ({
  eyebrowIcon,
  eyebrow,
  heading,
  headingAs,
  headingSize,
  subhead,
  buttons,
  background = 'white',
  padding = 'large',
  statistics,
  reference,
  reverse,
  sectionIdLink,
  switchers,
  youtubeEmbedLink,
}) => {
  const theme = getTheme(background || 'white');
  const H = headingAs || 'h2';
  const [isActive, setIsActive] = useState(0);
  const isMobile = useMedia(`(max-width: ${screens.lg})`, false);
  const TabItem = 'div';

  return (
    <Section id={sectionIdLink} background={background} padding={padding} contained={false}>
      <div className={twMerge(containStyles({ reverse }))}>
        <div className={twMerge(headingStyles())}>
          {eyebrowIcon && (
            <div className={twMerge(headingEyebrowIcon())}>
              <Image
                image={eyebrowIcon as ImageData}
                alt={eyebrowIcon?.title || ''}
                className="h-[30px] w-[30px] object-cover"
              />
            </div>
          )}
          {eyebrow && <p className={twMerge(headingEyebrow({ theme }))}>{eyebrow}</p>}
          {heading && <H className={twMerge(headingContent({ theme, size: headingSize }))}>{heading}</H>}
          {subhead && (
            <div className={twMerge(headingSubhead({ theme }))}>
              {richTextParser(subhead as RichText, undefined, theme)}
            </div>
          )}
          {statistics?.statisticsCards?.length > 0 && (
            <div className="mb-4 mt-2 flex justify-between gap-8">
              {statistics.statisticsCards.map((item: ContentfulComponentStatisticsCard) => (
                <div key={item?.id} className="w-[50%]">
                  <StatisticsItem theme={theme} alignment="Left" isReference {...item} />
                </div>
              ))}
            </div>
          )}
          {!isMobile && switchers && (
            <div className="my-4 flex w-full flex-col">
              {switchers.map((item: ContentfulItemSwitchbackSwitcher, idx: number) => (
                <TabItem
                  key={item?.id}
                  className={twMerge(switcherTab({ theme, active: idx === isActive }))}
                  tabIndex={0}
                  onClick={() => setIsActive(idx)}
                  onKeyDown={e => onKeyDown(e, () => setIsActive(idx))}
                >
                  {item?.icon && (
                    <Image
                      image={item?.icon as ImageData}
                      alt={item?.icon?.title || ''}
                      className="h-[24px] w-[24px]"
                    />
                  )}
                  {item?.label}
                </TabItem>
              ))}
            </div>
          )}
          {buttons && (
            <div className={twMerge(buttonContainer())}>
              {buttons.map(button => button && <Button {...button} key={button.internalName} />)}
            </div>
          )}
        </div>
        <div className="h-fit w-full max-w-full lg:max-w-[50%] xl:max-w-[592px]">
          {reference && (
            <Image
              image={reference as ImageData}
              alt={reference?.title || ''}
              className="h-fit w-full object-contain object-center"
            />
          )}
          {youtubeEmbedLink && (
            <iframe
              src={`https://www.youtube.com/embed/${getVideoId(youtubeEmbedLink)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              aria-label="embed video"
              className="aspect-video h-full w-full"
            />
          )}
          {isMobile && switchers && (
            <div className="mb-8 flex w-full flex-row overflow-y-scroll">
              {switchers.map((item: ContentfulItemSwitchbackSwitcher, idx: number) => (
                <TabItem
                  key={item?.id}
                  className={`${twMerge(switcherTabMobile({ theme, active: idx === isActive }))} sm:w-4/12`}
                  tabIndex={0}
                  onClick={() => setIsActive(idx)}
                  onKeyDown={e => onKeyDown(e, () => setIsActive(idx))}
                >
                  {item?.label}
                </TabItem>
              ))}
            </div>
          )}
          {switchers && (
            <div className="flex w-full flex-col">
              {switchers.map((item: ContentfulItemSwitchbackSwitcher, idx: number) => (
                <div key={item?.id} className={twMerge(switcherContent({ theme, active: idx === isActive }))}>
                  {item?.featuredImage && (
                    <Image
                      image={item?.featuredImage as ImageData}
                      alt={item?.featuredImage?.title || ''}
                      className="h-fit w-full"
                    />
                  )}
                  {item?.description && (
                    <div className={twMerge(headingSubhead({ theme }))}>
                      {richTextParser(item?.description as RichText)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Switchback;
