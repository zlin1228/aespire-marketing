import Button from 'molecules/Button';

import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

interface DemoCardProps {
  heading?: string;
  subheading?: string;
  button?: ButtonProps;
}

const DemoCard: FC<DemoCardProps> = ({ heading, subheading, button }) => (
  <div className="flex flex-col items-stretch gap-6 bg-texture-green bg-cover bg-no-repeat p-4 md:items-start md:gap-10 md:p-6 xl:p-10">
    <div className="flex flex-col gap-4">
      {heading && (
        <p className="text-display-xs-mobile font-extrabold text-white md:text-display-xs-tablet xl:text-display-xs">
          {heading}
        </p>
      )}
      {subheading && <p className="text-lg text-white">{subheading}</p>}
    </div>
    {button && <Button {...button} />}
  </div>
);

export default DemoCard;
