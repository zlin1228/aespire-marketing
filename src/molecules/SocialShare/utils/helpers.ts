import type { IconIds } from 'molecules/Icon';

interface SocialData {
  name: string;
  url: string;
  icon: IconIds;
  ariaLabel: string;
  className: string;
}

export const socialData = (pathname: string) =>
  [
    {
      name: 'x',
      url: `http://www.twitter.com/intent/tweet?url=https://www.youraspire.com${pathname}&via=Aspire`,
      icon: 'twitter-x',
      ariaLabel: 'Share on Facebook',
      className: 'fill-green-500 hover:fill-green-700 transition',
    },
    {
      name: 'facebook',
      url: `http://www.facebook.com/sharer/sharer.php?u=https://www.youraspire.com${pathname}`,
      icon: 'facebook',
      ariaLabel: 'Share on X',
      className: 'fill-green-500 hover:fill-green-700 transition',
    },
    {
      name: 'linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https://www.youraspire.com${pathname}`,
      icon: 'linkedin',
      ariaLabel: 'Share on LinkedIn',
      className: 'fill-green-500 hover:fill-green-700 transition',
    },
    {
      name: 'copy',
      url: `https://www.youraspire.com.com${pathname}`,
      icon: 'link-03',
      ariaLabel: 'Copy to Clipboard',
      className: 'fill-transparent stroke-green-500 hover:stroke-green-700 transition',
    },
  ] as SocialData[];

export const openSocialLink = (url: string) => {
  const left = (window.innerWidth - 570) / 2;
  const top = (window.innerHeight - 570) / 2;
  const params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;
  window.open(url, 'NewWindow', params);
};
