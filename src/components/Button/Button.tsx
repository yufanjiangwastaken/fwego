import React, { forwardRef } from 'react'
import { css, cx } from '../../emotion'
import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box'

export interface ButtonProps extends BoxProps {
  ref?: React.Ref<HTMLButtonElement>
  type?: 'submit' | 'button' | 'reset'
}

const baseStyles = css`
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  font-size: inherit;
  line-height: inherit;
  text-align: center;
  text-decoration: none;
`

export const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      children,
      className,
      fontSize = 'small',
      px = 'medium',
      py = 'xsmall',
      variant = 'primary',
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Box
        as="button"
        bg={variant}
        className={cx(baseStyles, className)}
        color="white"
        fontSize={fontSize}
        px={px}
        py={py}
        ref={ref}
        type="button"
        variant={variant}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Button.displayName = 'FWButton'
