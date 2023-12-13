import ComponentForm from 'components/Form';

import { contentfulProps } from 'utils/emptyTypes';

import 'molecules/Subscribe/styles/Subscribe.css';

import type { FC } from 'react';

interface SubscribeProps {
  heading?: string;
  subheading?: string;
}

const Subscribe: FC<SubscribeProps> = ({
  heading = 'Sign up for our newsletter',
  subheading = 'Request a demo to learn more about Truework, the best in class employment and income verification service.',
}) => (
  <div className="xl:-4 bg-gradient-gray/600-500 p-4 md:p-6">
    <div className="flex flex-col gap-4">
      <p className="text-display-xs-mobile font-extrabold text-white md:text-display-xs-tablet">{heading}</p>
      <p className="text-md text-white">{subheading}</p>
      <div className="hs-subscribe-form">
        <ComponentForm formId="4071ec80-df56-48e2-ac0e-f1fa7e60b2c8" {...contentfulProps} />
      </div>
    </div>
  </div>
);

export default Subscribe;
