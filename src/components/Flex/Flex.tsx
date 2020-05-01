import React, { forwardRef } from 'react'
import { css, cx } from '../../emotion'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'
import { partitionStyleProps, combineCssProperties } from '../../utils'

export interface FlexProps extends BoxProps {
  alignItems?: string
  alignContent?: string
  alignSelf?: string
  flex?: number | string
  flexDirection?: string
  flexWrap?: string
  flexFlow?: string
  justifyContent?: string
  order?: string
}

const baseStyles = css`
  display: flex;
`

const styleConfig = {
  alignItems: {
    name: 'align-items'
  },
  alignContent: {
    name: 'align-content'
  },
  alignSelf: {
    name: 'align-self'
  },
  flex: {
    name: 'flex'
  },
  flexDirection: {
    name: 'flex-direction'
  },
  flexWrap: {
    name: 'flex-wrap'
  },
  flexFlow: {
    name: 'flex-flow'
  },
  justifyContent: {
    name: 'justify-content'
  },
  order: {
    name: 'order'
  }
}

export const Flex: React.FC<FlexProps> = forwardRef(
  (
    { children, className, ...props }: FlexProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [forwardedProps, styleProps] = partitionStyleProps(props, styleConfig)
    const cls = combineCssProperties(styleProps, styleConfig)

    return (
      <Box
        ref={ref}
        className={cx(baseStyles, cls, className)}
        {...forwardedProps}
      >
        {children}
      </Box>
    )
  }
)

Flex.displayName = 'FWBox'
