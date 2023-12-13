import { useEffect, useState } from 'react';
import twMerge from 'twMerge';

import ProgressCircle from 'molecules/ProgressIndicator/ProgressCircle';
import ProgressIndicatorStyles, {
  headingText,
  percentText,
  progressBar,
  progressCircleSVG,
} from 'molecules/ProgressIndicator/ProgressIndicator.styles';

import type { VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

interface ProgressIndicatorProps extends VariantProps<typeof ProgressIndicatorStyles> {
  defaultProgress: number;
  heading?: string;
}

const radiusSizes = {
  xs: 64,
  sm: 104,
  md: 124,
  lg: 152,
  xl: 172,
  none: 0,
};

const strokeSizes = {
  xs: 8,
  sm: 12,
  md: 12,
  lg: 16,
  xl: 16,
  none: 0,
};

const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  type,
  size,
  defaultProgress,
  heading,
  percentLocation,
  showsPercent,
  outlinesPercent,
  ...props
}) => {
  const [progress, setProgress] = useState(0);
  const convertToPercent = (curProgress: number) => Math.min(Math.max(curProgress / 100, 0), 1);

  const percentLoc = type === 'bar' ? percentLocation : 'circleCenter';
  const adjustedSize = type === 'bar' ? 'none' : size;

  const radiusSize = size ? radiusSizes[size] : radiusSizes['sm'];
  const strokeSize = size ? strokeSizes[size] : strokeSizes['sm'];

  useEffect(() => {
    setProgress(defaultProgress);
  });

  return (
    <div
      className={twMerge(
        ProgressIndicatorStyles({ type, size: adjustedSize, outlinesPercent, percentLocation, showsPercent }),
      )}
      {...props}
    >
      {type === 'bar' && (
        <div className={twMerge(progressBar())} style={{ transform: `scaleX(${convertToPercent(progress)})` }} />
      )}
      {type && ['circle', 'semicircle'].includes(type) && (
        <ProgressCircle
          className={twMerge(progressCircleSVG({ type }))}
          radius={radiusSize}
          progressStroke={strokeSize}
          progress={progress}
          isSemiCircle={type === 'semicircle'}
        />
      )}
      {heading && type !== 'bar' && <p className={twMerge(headingText({ isXs: size === 'xs', type }))}>heading</p>}
      {showsPercent && (
        <p className={twMerge(percentText({ outlinesPercent, percentLocation: percentLoc, size: adjustedSize, type }))}>
          {progress}%
        </p>
      )}
    </div>
  );
};

export default ProgressIndicator;
