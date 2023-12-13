import TextField from 'molecules/TextField';

import type { FC } from 'react';

export type StepOneProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  disclaimer?: string;
  handleIncomeValue: (value: string) => void;
  moveNextStep: (value: number) => void;
  incomeValue?: string;
};

const StepOne: FC<StepOneProps> = ({
  eyebrow,
  heading,
  body,
  disclaimer,
  handleIncomeValue,
  moveNextStep,
  incomeValue,
}) => (
  <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-[592px] sm:border sm:border-gray-100 sm:bg-white sm:p-6 sm:shadow-xl md:px-12 md:py-8">
    <div className="flex w-full flex-col items-center gap-4 text-center">
      {eyebrow && <p className="hidden w-fit text-xs font-bold uppercase text-gray-500 sm:block">{eyebrow}</p>}
      {heading && <p className="text-display-xs-mobile font-bold text-gray-900">{heading}</p>}
      {body && <p className="text-md text-gray-700">{body}</p>}
      <TextField
        placeholder="0"
        type="number"
        icon="dollar"
        className="w-full"
        endIcon="help-circle"
        defaultValue={incomeValue}
        onChange={e => handleIncomeValue(e.target.value)}
      />
      <button
        className="hidden w-full bg-gray-900 p-3 text-md font-semibold text-white sm:block"
        onClick={() => moveNextStep(2)}
      >
        Next
      </button>
      {disclaimer && <p className="text-sm text-gray-500">{disclaimer}</p>}
    </div>
  </div>
);

export default StepOne;
