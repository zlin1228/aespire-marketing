import { twMerge } from 'tailwind-merge';

import Icon from 'molecules/Icon';

import { topBarContainer, topBarWrapper } from 'components/Header/styles/TopBar.styles';

const TopBar = () => (
  <div className={twMerge(topBarContainer())}>
    <div className={twMerge(topBarWrapper())}>
      <a
        href="https://cloud.youraspire.com/login"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-md font-semibold text-white transition-opacity hover:opacity-70"
      >
        Sign In
        <Icon icon="login" size={24} className="fill-white" />
      </a>
    </div>
  </div>
);

export default TopBar;
