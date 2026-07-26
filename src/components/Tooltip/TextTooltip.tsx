// Heavily inspired by https://joshwcomeau.com/

import classNames from 'classnames';
import Tooltip, { type TooltipProps } from './Tooltip';
import type { ReactNode } from 'react';

type TextTooltipProps = Omit<TooltipProps, 'children'> & {
  children: ReactNode;
  className?: string | null;
};

const TextTooltip = ({
  children,
  className,
  ...props
}: TextTooltipProps) => {
  return (
    <Tooltip {...props}>
      <span
        className={classNames(
          'cursor-pointer border-b border-dashed border-gray-600 dark:border-gray-500',
          className
        )}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default TextTooltip;
