import type { FC } from 'react';

export type HeadingProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
};

const Heading: FC<HeadingProps> = ({ eyebrow, heading, body }) => (
  <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
    {eyebrow && <p className="w-fit text-md font-bold uppercase text-green-500">{eyebrow}</p>}
    {heading && (
      <h1 className="hidden text-display-xs-mobile font-bold text-gray-900 sm:block md:text-display-sm lg:text-display-md">
        {heading}
      </h1>
    )}
    {body && <p className="text-md text-gray-700 lg:text-lg">{body}</p>}
  </div>
);

export default Heading;
