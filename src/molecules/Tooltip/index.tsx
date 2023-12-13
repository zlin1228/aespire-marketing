import twMerge from 'twMerge';

import Icon from 'molecules/Icon';
import tooltipVariants, {
  caretVariants,
  contentVariants,
  helpIcon,
  tooltipContainer,
} from 'molecules/Tooltip/Tooltip.styles';

import type { VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  hasCaret: boolean;
  heading: string;
  subheading: string;
}

const Tooltip: FC<TooltipProps> = ({
  hasCaret = true,
  direction = 'top',
  alignment = 'none',
  heading,
  subheading,
  ...props
}) => {
  const tooltipAlignment = direction && ['top', 'bottom'].includes(direction) ? alignment : 'none';

  return (
    <div className={twMerge(tooltipContainer())}>
      <Icon icon="help" size={16} className={twMerge(helpIcon())} />
      <div className={twMerge(tooltipVariants({ direction, alignment: tooltipAlignment }))} {...props}>
        <p className={twMerge(contentVariants({ text: 'heading' }))}>{heading}</p>
        <p className={twMerge(contentVariants({ text: 'subheading' }))}>{subheading}</p>
        {hasCaret && (
          <Icon
            icon="tooltip-caret"
            size={16}
            className={twMerge(caretVariants({ alignment: tooltipAlignment, direction }))}
          />
        )}
      </div>
    </div>
  );
};

export default Tooltip;
