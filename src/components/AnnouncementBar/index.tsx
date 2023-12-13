import { useAnnouncement } from 'context/AnnouncementContext';
import { useMedia } from 'react-use';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import announcementBarStyles, {
  announcementBarButtonContainer,
  announcementBarClose,
  announcementBarCloseIcon,
  announcementBarContainer,
  announcementBarHeading,
  announcementBarIcon,
  announcementBarSubhead,
} from 'components/AnnouncementBar/AnnouncementBar.styles';

import getTheme from 'utils/getTheme';
import richTextParser from 'utils/richTextParser/richTextParser';

import screens from 'theme/spacing/screens';

import type { VariantProps } from 'class-variance-authority';
import type { ContentfulComponentAnnouncementBar } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export type AnnouncementBarProps = Omit<ContentfulComponentAnnouncementBar, 'children' | 'contentful_id' | 'id'>;

const AnnouncementBar: FC<AnnouncementBarProps> = ({ icon, heading, subhead, ctas, background = 'blue500' }) => {
  const { setIsAnnouncementOpen, isAnnouncementOpen } = useAnnouncement();

  const isTablet = useMedia(`(max-width: ${screens.lg})`, false);
  const bg = (background as VariantProps<typeof announcementBarStyles>['background']) || 'blue500';
  const theme = getTheme(bg);

  if (!isAnnouncementOpen) {
    return null;
  }

  return (
    <div className={twMerge(announcementBarStyles({ background: bg }))}>
      <div className={twMerge(announcementBarContainer())}>
        {icon && !isTablet && (
          <Icon
            icon={icon as IconIds}
            className={twMerge(announcementBarIcon({ background: bg }))}
            size={48}
            aria-hidden={true}
          />
        )}
        <div className="flex items-start md:items-center">
          {heading && <p className={twMerge(announcementBarHeading({ theme }))}>{heading}</p>}
          <button
            className={twMerge(announcementBarClose())}
            onClick={() => {
              setIsAnnouncementOpen && setIsAnnouncementOpen(false);
            }}
            tabIndex={0}
          >
            <Icon icon="x" className={twMerge(announcementBarCloseIcon({ theme }))} size={24} />
          </button>
        </div>
        {subhead && (
          <div className={twMerge(announcementBarSubhead({ theme }))}>
            {richTextParser(subhead as RichText, undefined, theme)}
          </div>
        )}
        <div className={twMerge(announcementBarButtonContainer())}>
          {ctas && ctas.map(button => button && <Button key={button?.internalName} {...(button as ButtonProps)} />)}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
