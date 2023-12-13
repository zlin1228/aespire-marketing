import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import type { FC } from 'react';

export type StepLastProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  disclaimer?: string;
  projectedSavings: string;
  projectedRoiInput: string;
  hoursReduced: number;
};

const StepLast: FC<StepLastProps> = ({ heading, disclaimer, projectedSavings, hoursReduced, projectedRoiInput }) => (
  <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
    <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
      <div className="flex w-full max-w-[520px] flex-col gap-8 border border-gray-100 sm:bg-white sm:p-6 sm:shadow-xl md:px-12 md:py-8">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          {heading && <p className="text-md font-bold uppercase tracking-widest text-gray-900">{heading}</p>}
          <p className="text-display-md font-bold text-green-500 md:text-display-lg lg:text-display-xl">
            {projectedSavings}
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-1">
              <p className="text-sm font-semibold uppercase text-gray-700">PROJECTED ROI</p>
              <p className="text-display-sm font-bold uppercase text-black">{projectedRoiInput}</p>
            </div>
            <div className="flex flex-col justify-between gap-1">
              <p className="text-sm font-semibold uppercase text-gray-700">HOURS REDUCED PER EMPLOYEE PER WEEK</p>
              <p className="text-display-sm font-bold uppercase text-black">{hoursReduced}</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 text-left sm:hidden sm:max-w-[416px]">
            <p className="text-center text-md font-bold uppercase tracking-widest text-gray-700 sm:text-left">
              Company Metrics
            </p>
            <div className="flex flex-col items-center justify-between border-t-[3px] border-green-500 bg-white p-6 lg:flex-row">
              <p className="text-sm font-semibold uppercase text-gray-700">GROSS REVENUE</p>
              <p className="text-display-sm font-bold text-gray-900">$487,978</p>
            </div>
            <div className="flex flex-col items-center justify-between border-t-[3px] border-green-500 bg-white p-6 lg:flex-row">
              <p className="text-sm font-semibold uppercase text-gray-700">NET PROFIT</p>
              <p className="text-display-sm font-bold text-gray-900">$47,827</p>
            </div>
            <div className="flex flex-col items-center justify-between border-t-[3px] border-green-500 bg-white p-6 lg:flex-row">
              <p className="text-sm font-semibold uppercase text-gray-700">NET PROFIT %</p>
              <p className="text-display-sm font-bold text-gray-900">97.82%</p>
            </div>
          </div>
          <Button label="Learn more about Aspire" endIcon="arrow-right" isFullWidth hierarchy="tertiary" />
          <button
            className="flex w-fit items-center gap-1 text-md font-semibold text-gray-900 sm:bg-white"
            onClick={() => location.reload()}
          >
            Restart
            <Icon icon="refresh" className="fill-green-900" size={24} aria-hidden={true} />
          </button>
        </div>
      </div>
      <div className="hidden w-full flex-col gap-6 text-left sm:flex sm:max-w-[416px]">
        <p className="text-center text-md font-bold uppercase tracking-widest text-gray-700 sm:text-left">
          Company Metrics
        </p>
        <div className="flex flex-col items-center justify-between border-t-[3px] border-green-500 bg-white p-6 lg:flex-row">
          <p className="text-sm font-semibold uppercase text-gray-700">GROSS REVENUE</p>
          <p className="text-display-sm font-bold text-gray-900">$487,978</p>
        </div>
        <div className="flex flex-col items-center justify-between border-t-[3px] border-green-500 bg-white p-6 lg:flex-row">
          <p className="text-sm font-semibold uppercase text-gray-700">NET PROFIT</p>
          <p className="text-display-sm font-bold text-gray-900">$47,827</p>
        </div>
        <div className="flex flex-col items-center justify-between border-t-[3px] border-green-500 bg-white p-6 lg:flex-row">
          <p className="text-sm font-semibold uppercase text-gray-700">NET PROFIT %</p>
          <p className="text-display-sm font-bold text-gray-900">97.82%</p>
        </div>
      </div>
    </div>
    {disclaimer && <p className="mx-auto w-full max-w-5xl text-sm text-gray-500">{disclaimer}</p>}
  </div>
);

export default StepLast;
