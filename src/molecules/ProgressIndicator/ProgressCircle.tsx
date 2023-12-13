import colors from 'theme/colors/colors';

import type { ComponentPropsWithoutRef, FC } from 'react';

type NativeSVGProps = ComponentPropsWithoutRef<'svg'>;

interface ProgressCircleProps extends NativeSVGProps {
  radius: number;
  progressStroke: number;
  progress: number;
  isSemiCircle?: boolean;
}
const ProgressCircle: FC<ProgressCircleProps> = ({ radius, progressStroke, progress, isSemiCircle, ...props }) => {
  const normalizedRadius = radius - progressStroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const adjustedWidth = isSemiCircle ? radius : radius * 2;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={adjustedWidth} {...props}>
      <circle
        stroke={colors.gray[200]}
        fill="transparent"
        strokeWidth={progressStroke}
        strokeDasharray={circumference + ' ' + circumference}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={colors.primary[600]}
        fill="transparent"
        strokeWidth={progressStroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default ProgressCircle;
