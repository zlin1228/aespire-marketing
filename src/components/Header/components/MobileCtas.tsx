/* eslint-disable no-inline-styles/no-inline-styles */
import { cva } from 'class-variance-authority';
import { useMedia } from 'react-use';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';

import screens from 'theme/spacing/screens';

import type { HeaderProps } from 'components/Header';
import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

export const mobileNavCtaWrapper = cva([
  'container',
  'w-full',
  'max-w-full',
  'md:max-w-md',
  'lg:max-w-full',
  'xl:max-w-xl',
  'flex',
  'flex-col',
  'px-4',
  'sm:px-8',
  'sm:py-8',
  'py-6',
  'mx-auto',
]);

const MobileCtas: FC<{ ctas: HeaderProps['ctas'] }> = ({ ctas }) => {
  const isTablet = useMedia(`(min-width: ${screens.sm})`, false);
  const border = { border: '0px solid red' };

  return (
    <div className="sticky bottom-0 z-10 bg-texture-light bg-cover">
      <div style={border} className={twMerge(mobileNavCtaWrapper())}>
        <div style={border} className="flex flex-col items-center gap-4 sm:flex-row">
          {ctas?.map(
            button =>
              button && (
                <Button
                  key={button?.id}
                  {...(button as ButtonProps)}
                  size={isTablet ? 'md' : 'sm'}
                  style={{ width: '100%' }}
                />
              ),
          )}
          <Button
            hierarchy="secondary"
            size={isTablet ? 'md' : 'sm'}
            label="Sign In"
            endIcon="login"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCtas;
