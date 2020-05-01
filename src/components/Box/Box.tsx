import React, { forwardRef } from 'react'
import { css, cx } from '../../emotion'
import { useTheme } from '../../hooks'
import { partitionStyleProps, combineCssProperties } from '../../utils'
import type { FontSize } from '../../theme/fonts'
import type { Space } from '../../theme/spaces'
import styleConfig from './config'

export type Size = string | number
export type ResponsiveSize = Size | Array<Size>
export type ResponsiveSpace = Space | Array<Space>
export type ResponsiveFontSize = FontSize | Array<FontSize>

export interface BoxProps extends React.HTMLAttributes<any> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  bg?: string
  backgroundImage?: string
  borderRadius?: string
  boxShadow?: string
  color?: string
  display?: string
  fontSize?: ResponsiveFontSize
  fontWeight?: string | number
  height?: ResponsiveSize
  m?: ResponsiveSpace
  mt?: ResponsiveSpace
  mr?: ResponsiveSpace
  mb?: ResponsiveSpace
  ml?: ResponsiveSpace
  my?: ResponsiveSpace
  mx?: ResponsiveSpace
  minHeight?: ResponsiveSpace
  minWidth?: ResponsiveSpace
  p?: ResponsiveSpace
  pt?: ResponsiveSpace
  pr?: ResponsiveSpace
  pb?: ResponsiveSpace
  pl?: ResponsiveSpace
  py?: ResponsiveSpace
  px?: ResponsiveSpace
  position?: string
  ref?: React.Ref<any>
  to?: string
  width?: ResponsiveSize
  variant?: string
}

const baseStyles = css`
  display: block;
  box-sizing: border-box;
  min-width: 0px;
`

export const Box: React.FC<BoxProps> = forwardRef(
  (
    { as = 'div', children, className, variant, ...props }: BoxProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const Component = as
    const [forwardedProps, styleProps] = partitionStyleProps(props, styleConfig)

    let stylePropsWithVariant = styleProps
    if (variant && theme?.variants?.[variant]) {
      const variantConfig = theme.variants[variant]
      stylePropsWithVariant = { ...styleProps, ...variantConfig }
    }

    const cls = combineCssProperties(stylePropsWithVariant, styleConfig, theme)

    return (
      <Component
        ref={ref}
        className={cx(baseStyles, className, cls)}
        {...forwardedProps}
      >
        {children}
      </Component>
    )
  }
)

Box.displayName = 'FWBox'
