import React, { forwardRef } from 'react'
import { cx } from '../../emotion'
import type { FontSize, FontWeight } from '../../theme/fonts'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import useBaselineStyles from './useBaselineStyles'

export interface TextProps extends BoxProps {
  baseline?: boolean
  size?: FontSize
  weight?: FontWeight
}

export const Text: React.FC<TextProps> = forwardRef(
  (
    {
      as = 'span',
      baseline = false,
      children,
      className,
      m = 'none',
      size = 'medium',
      weight = 'normal',
      ...props
    }: TextProps,
    ref: React.Ref<any>
  ) => {
    const baselineCls = useBaselineStyles(baseline, size)

    return (
      <Box
        as={as}
        className={cx(baselineCls, className)}
        fontSize={size}
        fontWeight={weight}
        m={m}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Text.displayName = 'FWText'
