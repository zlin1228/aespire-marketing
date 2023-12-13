import { useState } from 'react';
import { useMedia } from 'react-use';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Dropdown from 'molecules/Dropdown';
import Icon from 'molecules/Icon';
import Image from 'molecules/Image';
import Section from 'molecules/Section';

import { type HeadingProps } from 'components/Heading';
import headingStyles, {
  buttonContainer,
  dropdownTitle,
  headingContent,
  headingEyebrow,
  headingSubhead,
  switchTabIcon,
  switcherContent,
  switcherContentTitle,
  switcherTabItem,
} from 'components/OffsetSwitcher/OffsetSwitcher.styles';

import getTheme from 'utils/getTheme';
import onKeyDown from 'utils/onKeyDown';
import richTextParser from 'utils/richTextParser/richTextParser';

import screens from 'theme/spacing/screens';

import type { ContentfulComponentOffsetSwitcher } from 'graphqlTypes';
import type { DropdownItemProps } from 'molecules/Dropdown/DropdownItem';
import type { ImageData } from 'molecules/Image';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export type OffsetSwitcherProps = ContentfulComponentOffsetSwitcher & SectionProps;

const OffsetSwitcher: FC<OffsetSwitcherProps> = ({ background, offsetSwitcherHeading, references, sectionIdLink }) => {
  const theme = getTheme(background || 'white');
  const TabItem = 'div';
  const isMobile = useMedia(`(max-width: ${screens.lg})`, false);
  const [isActive, setIsActive] = useState(0);
  const listItems: DropdownItemProps[] = [];
  references &&
    references.map(item => {
      listItems.push({ label: item?.label } as DropdownItemProps);

      return;
    });

  const getContent = (props: HeadingProps) => {
    const { eyebrow, heading, headingSize, subheading, richText, buttons } = props;
    const H = offsetSwitcherHeading?.headingAs || 'h2';

    return (
      <div className={twMerge(headingStyles())}>
        {eyebrow && <p className={twMerge(headingEyebrow({ theme }))}>{eyebrow}</p>}
        {heading && <H className={twMerge(headingContent({ theme, size: headingSize }))}>{heading}</H>}
        {subheading && <p className={twMerge(headingSubhead({ theme }))}>{subheading}</p>}
        {richText && (
          <p className={twMerge(headingSubhead({ theme }))}>{richTextParser(richText as RichText, undefined, theme)}</p>
        )}
        {buttons && (
          <div className={twMerge(buttonContainer())}>
            {buttons.map(button => button && <Button {...button} key={button.internalName} />)}
          </div>
        )}
      </div>
    );
  };

  return (
    <Section id={sectionIdLink} background={background} contained={false}>
      <div className="flex flex-col justify-between gap-12">
        {offsetSwitcherHeading && getContent(offsetSwitcherHeading)}
        {references && (
          <div className="mt-0 flex w-full flex-col justify-between gap-8 md:mt-4 lg:flex-row">
            {!isMobile && (
              <div className="hidden h-fit gap-6 lg:flex lg:w-[50%] lg:flex-wrap xl:w-[520px]">
                {references.map((item, idx) => (
                  <TabItem
                    key={item?.id}
                    className={twMerge(switcherTabItem({ theme, isActive: isActive === idx ? theme : undefined }))}
                    tabIndex={0}
                    onClick={() => setIsActive(idx)}
                    onKeyDown={e => onKeyDown(e, () => setIsActive(idx))}
                  >
                    {item?.icon && (
                      <Image
                        image={item?.icon as ImageData}
                        alt={item?.icon?.title || ''}
                        className={twMerge(switchTabIcon({ theme, isActive: isActive === idx ? theme : undefined }))}
                      />
                    )}
                    {item?.label && <p className="text-lg font-bold">{item?.label}</p>}
                  </TabItem>
                ))}
              </div>
            )}
            {isMobile && listItems.length > 0 && (
              <div className="flex w-full flex-col gap-1">
                <p className={twMerge(dropdownTitle({ theme }))}>Explore our features</p>
                <Dropdown
                  label={listItems[0]?.label || ''}
                  items={listItems}
                  type="input"
                  onChange={idx => setIsActive(idx)}
                />
              </div>
            )}
            <div className="h-fit w-full max-w-full lg:max-w-[50%] xl:max-w-[624px]">
              <div className="flex w-full flex-col">
                {references.map((item, idx) => (
                  <div key={item?.id} className={twMerge(switcherContent({ theme, active: idx === isActive }))}>
                    {item?.title && (
                      <div className="flex w-full flex-wrap items-center gap-4">
                        {item?.icon && (
                          <Image
                            image={item?.icon as ImageData}
                            alt={item?.icon?.title || ''}
                            className="h-[48px] w-[48px]"
                          />
                        )}
                        {item?.title && <p className={twMerge(switcherContentTitle({ theme }))}>{item?.title}</p>}
                      </div>
                    )}
                    {item?.description && (
                      <div className="flex w-full flex-col items-start gap-4">
                        {richTextParser(item?.description as RichText, undefined, theme)}
                      </div>
                    )}
                    {item?.featuredImage && (
                      <Image
                        image={item?.featuredImage as ImageData}
                        alt={item?.featuredImage?.title || ''}
                        className="h-fit w-full"
                      />
                    )}
                    {item?.offsetBottomLists && (
                      <div className="flex w-full flex-col flex-wrap justify-between gap-4 sm:flex-row">
                        {item.offsetBottomLists.map(list => (
                          <div key={list?.id} className="flex w-full gap-3 text-md sm:w-[calc((100%-32px)/3)]">
                            {item?.icon && (
                              <Icon
                                className="mt-[2px] min-w-[20px]"
                                icon="check-green-circle"
                                size={20}
                                aria-hidden={true}
                              />
                            )}
                            {list?.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default OffsetSwitcher;
