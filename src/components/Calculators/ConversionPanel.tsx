import Button from 'molecules/Button';

import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

export type ConversionPanelProps = {
  heading?: string;
  body?: string;
  button?: ButtonProps;
};

const ConversionPanel: FC<ConversionPanelProps> = ({ heading, body, button }) => (
  <div className="flex flex-col items-center gap-6 border-t-4 border-green-500 bg-white p-6 text-center sm:p-8">
    {heading && <h4 className="mx-auto max-w-3xl text-xl font-bold text-black">{heading}</h4>}
    {body && <p className="mx-auto hidden max-w-3xl text-md text-black sm:block">{body}</p>}
    {button && <Button {...button} />}
  </div>
);

export default ConversionPanel;
