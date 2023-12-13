import Dropdown from 'molecules/Dropdown';

import type { FC } from 'react';

export type StepFiveProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  disclaimer?: string;
  handleWorkTicket: (value: number) => void;
  moveNextStep: (value: number) => void;
  movePrevStep: (value: number) => void;
  workTicket?: number;
};

const StepFive: FC<StepFiveProps> = ({
  eyebrow,
  heading,
  body,
  disclaimer,
  handleWorkTicket,
  moveNextStep,
  movePrevStep,
  workTicket,
}) => (
  <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-[592px] sm:border sm:border-gray-100 sm:bg-white sm:p-6 sm:shadow-xl md:px-12 md:py-8">
    <div className="flex w-full flex-col items-center gap-4 text-center">
      {eyebrow && <p className="hidden w-fit text-xs font-bold uppercase text-gray-500 sm:block">{eyebrow}</p>}
      {heading && <p className="text-display-xs-mobile font-bold text-gray-900">{heading}</p>}
      {body && <p className="text-md text-gray-700">{body}</p>}
      <Dropdown
        label="Select answer"
        items={[{ label: 'Yes' }, { label: 'No' }]}
        type="filter"
        defaultValue={workTicket}
        onChange={handleWorkTicket}
      />
      <button
        className="hidden w-full bg-gray-900 p-3 text-md font-semibold text-white sm:block"
        onClick={() => moveNextStep(6)}
      >
        Next
      </button>
      <button
        className="hidden w-fit bg-white text-md font-semibold text-gray-900 sm:block"
        onClick={() => movePrevStep(4)}
      >
        Back
      </button>
      {disclaimer && <p className="text-sm text-gray-500">{disclaimer}</p>}
    </div>
  </div>
);

export default StepFive;
