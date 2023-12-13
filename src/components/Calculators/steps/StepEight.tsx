import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import TextField from 'molecules/TextField';

import type { FC } from 'react';

export type StepEightProps = {
  eyebrow?: string;
  heading?: string;
  subheadOne?: string;
  subheadTwo?: string;
  subheadThree?: string;
  body?: string;
  disclaimer?: string;
  moveNextStep: (value: number) => void;
  movePrevStep: (value: number) => void;
  handleLabor: (value: string) => void;
  handleMaterialsPercent: (value: string) => void;
  handleSubsPercent: (value: string) => void;
  calculatedLabor: number;
  averageWage: number;
  subs: number;
  labor: number;
  materialsPercent: number;
  subsPercent: number;
};

const StepEight: FC<StepEightProps> = ({
  eyebrow,
  heading,
  subheadOne,
  subheadTwo,
  subheadThree,
  body,
  disclaimer,
  moveNextStep,
  movePrevStep,
  handleLabor,
  handleMaterialsPercent,
  handleSubsPercent,
  calculatedLabor,
  averageWage,
  subs,
  labor,
  materialsPercent,
  subsPercent,
}) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      margin: [0, 0, 0, 0],
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },
    title: {
      text: '',
      align: 'left',
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b> <br><b>${point.custom}</b>',
      style: {
        color: '#101828',
        fontSize: '14px',
        fontFamily:
          'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
      },
    },
    series: [
      {
        dataLabels: {
          style: {
            fontSize: 16,
            fontWeight: 500,
            color: '#101828',
            fontFamily:
              'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
          },
        },
        data: [
          {
            name: 'Subs costs',
            y: parseFloat(subsPercent.toString()) || 25,
            custom: subs,
          },
          {
            name: 'Labor costs',
            y: parseFloat(labor.toString()) || 50,
            custom: calculatedLabor,
          },
          {
            name: 'Materials costs',
            y: parseFloat(materialsPercent.toString()) || 25,
            custom: averageWage,
          },
        ],
      },
    ],
    colors: ['#FFD24D', '#7497C7', '#79C300'],
  };

  const mobileOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      margin: [0, 0, 0, 0],
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },
    title: {
      text: '',
      align: 'left',
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b> <br><b>${point.custom}</b>',
      style: {
        color: '#101828',
        fontSize: '12px',
        fontFamily:
          'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
      },
    },
    series: [
      {
        dataLabels: {
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b><br><b>${point.custom}</b>',
          style: {
            fontSize: 12,
            fontWeight: 500,
            color: '#344054',
            fontFamily:
              'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
          },
        },
        data: [
          {
            name: 'Subs costs',
            y: parseFloat(subsPercent.toString()) || 25,
            custom: subs,
          },
          {
            name: 'Labor costs',
            y: parseFloat(labor.toString()) || 50,
            custom: calculatedLabor,
          },
          {
            name: 'Materials costs',
            y: parseFloat(materialsPercent.toString()) || 25,
            custom: averageWage,
          },
        ],
      },
    ],
    colors: ['#FFD24D', '#7497C7', '#79C300'],
  };

  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-8 sm:max-w-[624px] sm:border sm:border-gray-100 sm:bg-white sm:p-6 sm:shadow-xl md:px-12 md:py-8">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          {eyebrow && <p className="hidden w-fit text-xs font-bold uppercase text-gray-500 sm:block">{eyebrow}</p>}
          {heading && <p className="text-display-xs-mobile font-bold text-gray-900">{heading}</p>}
          {body && <p className="text-md text-gray-700">{body}</p>}
          <div className="mt-6 flex w-full flex-col gap-6 text-left">
            {subheadOne && <p className="text-md font-bold text-gray-900">{subheadOne}</p>}
            <div className="mb-6 grid grid-cols-2 gap-4 text-left sm:gap-8">
              <TextField
                placeholder="0"
                type="number"
                className="w-full"
                endIcon="help-circle"
                label="Percentage*"
                defaultValue={labor as unknown as string}
                isPercentage
                onChange={e => handleLabor(e.target.value)}
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-gray-700">Cost</span>
                <p className="text-xl font-semibold text-gray-900 sm:text-display-sm">$ {calculatedLabor}</p>
              </div>
            </div>
            {subheadTwo && <p className="text-md font-bold text-gray-900">{subheadTwo}</p>}
            <div className="mb-6 grid grid-cols-2 gap-4 text-left sm:gap-8">
              <TextField
                placeholder="0"
                type="number"
                className="w-full"
                endIcon="help-circle"
                label="Percentage*"
                defaultValue={materialsPercent as unknown as string}
                isPercentage
                onChange={e => handleMaterialsPercent(e.target.value)}
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-gray-700">Cost</span>
                <p className="text-xl font-semibold text-gray-900 sm:text-display-sm">$ {averageWage}</p>
              </div>
            </div>
            {subheadThree && <p className="text-md font-bold text-gray-900">{subheadThree}</p>}
            <div className="mb-6 grid grid-cols-2 gap-4 text-left sm:gap-8">
              <TextField
                placeholder="0"
                type="number"
                className="w-full"
                endIcon="help-circle"
                label="Percentage*"
                defaultValue={subsPercent as unknown as string}
                isPercentage
                onChange={e => handleSubsPercent(e.target.value)}
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-gray-700">Cost</span>
                <p className="text-xl font-semibold text-gray-900 sm:text-display-sm">$ {subs}</p>
              </div>
            </div>
          </div>

          <button
            className="hidden w-full bg-gray-900 p-3 text-md font-semibold text-white sm:block"
            onClick={() => moveNextStep(9)}
          >
            Next
          </button>
          <button
            className="hidden w-fit bg-white text-md font-semibold text-gray-900 sm:block"
            onClick={() => movePrevStep(7)}
          >
            Back
          </button>
          <div className="block w-full max-w-full lg:hidden">
            <HighchartsReact highcharts={Highcharts} options={mobileOptions} />
          </div>
          {disclaimer && <p className="text-sm text-gray-500">{disclaimer}</p>}
        </div>
      </div>
      <div className="hidden w-full max-w-full lg:block">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default StepEight;
