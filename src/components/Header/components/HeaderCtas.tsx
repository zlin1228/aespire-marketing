import { useMedia } from 'react-use';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import screens from 'theme/spacing/screens';

import type { HeaderProps } from '..';
import type { ContentfulItemMenu } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { Dispatch, FC, SetStateAction } from 'react';

interface HeaderCtasProps {
  ctas: HeaderProps['ctas'];
  mobileMenuActive: boolean;
  setMobileMenuActive: Dispatch<SetStateAction<boolean>>;
  setMenuStack: Dispatch<SetStateAction<ContentfulItemMenu[]>>;
}

const HeaderCtas: FC<HeaderCtasProps> = ({ ctas, mobileMenuActive, setMobileMenuActive, setMenuStack }) => {
  const isDesktop = useMedia(`(min-width: ${screens.xl})`, false);

  return (
    <div className="flex items-center gap-4">
      {ctas?.map(
        button => button && <Button key={button?.id} {...(button as ButtonProps)} size={isDesktop ? 'lg' : 'sm'} />,
      )}
      {!isDesktop && (
        <button
          type="button"
          className="flex"
          onClick={() => {
            setMobileMenuActive(!mobileMenuActive);
            setMenuStack([]);
          }}
        >
          <Icon icon={mobileMenuActive ? 'x' : 'hamburger'} size={24} />
        </button>
      )}
    </div>
  );
};

export default HeaderCtas;
