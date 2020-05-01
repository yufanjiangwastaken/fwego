import React, { forwardRef } from 'react'
import { css, cx } from '../../emotion'
import useSpace from '../../hooks/useSpace'
import type { Space } from '../../theme/spaces'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface StackProps extends BoxProps {
  space?: Space
}

export const Stack: React.FC<StackProps> = forwardRef(
  (
    { children, className, space = 'medium', ...props }: StackProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const spacing = useSpace(space)

    const cls = css`
      > * {
        display: block;
      }
      > *:not(:last-child) {
        margin-bottom: ${spacing};
      }
    `

    return (
      <Box ref={ref} className={cx(cls, className)} {...props}>
        {children}
      </Box>
    )
  }
)

Stack.displayName = 'FWStack'
