import { type FC, useState } from 'react';

import Badge from 'molecules/Badge';
import Icon from 'molecules/Icon';
import { openSocialLink, socialData } from 'molecules/SocialShare/utils/helpers';

import copyToClipboard from 'utils/copyToClipboard';

interface SocialShareProps {
  label: string;
  pathname: string;
}

const SocialShare: FC<SocialShareProps> = ({ label = 'Share', pathname }) => {
  const [copied, setCopied] = useState(false);
  const social = socialData(pathname);

  const handleCopyToClipboard = (url: string) => {
    copyToClipboard(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-extrabold text-moss-900 xl:text-xl xl:font-bold">{label}</p>
      <div className="flex items-center gap-6">
        {social.map(({ name, icon, url, ariaLabel, className }) => {
          const copyButton = name === 'copy';
          const clickHandler = copyButton ? () => handleCopyToClipboard(url) : () => openSocialLink(url);

          return (
            <div key={name} className="relative h-fit">
              {copyButton && copied && (
                <Badge
                  key={name}
                  label="Link Copied"
                  size="sm"
                  hierarchy="darkGray"
                  className="absolute left-9 top-0 whitespace-nowrap"
                />
              )}
              <button type="button" aria-label={ariaLabel} onClick={() => clickHandler()}>
                <Icon icon={icon} size={24} className={className} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialShare;
