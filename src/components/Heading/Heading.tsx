import React, { forwardRef } from 'react'
import { Text } from '../Text/Text'
import type { TextProps } from '../Text/Text'
import type { FontSize } from '../../theme/fonts'

type Level = '1' | '2' | '3' | '4' | '5' | '6'
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends TextProps {
  level?: Level
}

const headingConfig: {
  [key in Level]: {
    as: HeadingLevel
    size: FontSize
  }
} = {
  1: {
    as: 'h1',
    size: 'xxxlarge'
  },
  2: {
    as: 'h2',
    size: 'xxlarge'
  },
  3: {
    as: 'h3',
    size: 'xlarge'
  },
  4: {
    as: 'h4',
    size: 'large'
  },
  5: {
    as: 'h5',
    size: 'medium'
  },
  6: {
    as: 'h6',
    size: 'small'
  }
}

export const Heading: React.FC<HeadingProps> = forwardRef(
  (
    { children, level = '1', weight = 'normal', ...props }: HeadingProps,
    ref: React.Ref<any>
  ) => {
    const { as, size } = headingConfig[level]
    return (
      <Text as={as} size={size} weight={weight} ref={ref} {...props}>
        {children}
      </Text>
    )
  }
)

Heading.displayName = 'FWHeading'
