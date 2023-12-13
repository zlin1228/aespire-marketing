import ComponentForm from 'components/Form';

import type { FC } from 'react';

export type StepTenProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  disclaimer?: string;
  moveNextStep: (value: number) => void;
  movePrevStep: (value: number) => void;
};

const StepTen: FC<StepTenProps> = ({ eyebrow, heading, body, disclaimer, movePrevStep }) => (
  <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-[592px] sm:border sm:border-gray-100 sm:bg-white sm:p-6 sm:shadow-xl md:px-12 md:py-8">
    <div className="flex w-full flex-col items-center gap-4 text-center">
      {eyebrow && <p className="hidden w-fit text-xs font-bold uppercase text-gray-500 sm:block">{eyebrow}</p>}
      {heading && <p className="text-display-xs-mobile font-bold text-gray-900">{heading}</p>}
      {body && <p className="text-md text-gray-700">{body}</p>}
      <div className="w-full text-left">
        <ComponentForm formId="0a8d23c0-5eec-4e94-8bc1-8268b1bcb764" />
      </div>
      <button className="w-fit text-md font-semibold text-gray-900 sm:bg-white" onClick={() => movePrevStep(9)}>
        Back
      </button>
      {disclaimer && <p className="text-sm text-gray-500">{disclaimer}</p>}
    </div>
  </div>
);

export default StepTen;
