import ComponentForm from 'components/Form';

import { contentfulProps } from 'utils/emptyTypes';

import type { FC } from 'react';

export type SubscribeFormProps = {
  test?: boolean;
};

const SubscribeForm: FC<SubscribeFormProps> = () => (
  <div className="hidden w-full flex-col gap-4 bg-subscribeform-overlay-dark p-4 lg:flex">
    <p className="text-lg font-bold text-white">Sign up for our newsletter</p>
    <p className="text-md text-white">
      Request a demo to learn more about Aspire, the best in class employment and income verification service.
    </p>
    <div className="hs-subscribe-form">
      <ComponentForm formId="4071ec80-df56-48e2-ac0e-f1fa7e60b2c8" isSubscribe {...contentfulProps} />
    </div>
  </div>
);

export default SubscribeForm;
