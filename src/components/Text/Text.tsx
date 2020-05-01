import React, { forwardRef } from 'react'
import { css, cx } from '../../emotion'
import { useTheme } from '../../hooks'
import type { FontSize, FontWeight } from '../../theme/fonts'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface TextProps extends BoxProps {
  size?: FontSize
  weight?: FontWeight
}

const baseStyles = css`
  line-height: 1.15;
`

export const Text: React.FC<TextProps> = forwardRef(
  (
    {
      as = 'span',
      children,
      className,
      m = 'none',
      size = 'medium',
      weight = 'normal',
      ...props
    }: TextProps,
    ref: React.Ref<any>
  ) => {
    const theme = useTheme()
    const [typeOffset, heightCorrection] = theme.fontOffsets[size]

    const cls = css`
      transform: translateY(${typeOffset});
      &:before {
        content: '';
        display: block;
        height: 0px;
        margin-top: -${heightCorrection};
      }
    `

    return (
      <Box
        as={as}
        className={cx(baseStyles, cls, className)}
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
