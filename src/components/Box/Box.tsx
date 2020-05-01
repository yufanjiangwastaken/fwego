import React, { forwardRef } from 'react'
import { css, cx } from '../../emotion'
import { useTheme } from '../../hooks'
import { partitionStyleProps, combineCssProperties } from '../../utils'
import type { StyleConfig } from '../../utils'
import type {
  FontSize,
  FontSizes,
  FontWeight,
  FontWeights
} from '../../theme/fonts'
import type { Space, Spaces } from '../../theme/spaces'
import type { Theme } from '../../theme/theme'

type Size = string | number
type ResponsiveSize = Size | Array<Size>
type ResponsiveSpace = Space | Array<Space>
type ResponsiveFontSize = FontSize | Array<FontSize>

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

function toSizeUnit(propertyValue: string | number): string {
  if (
    typeof propertyValue === 'number' &&
    propertyValue >= 0 &&
    propertyValue <= 1
  ) {
    return propertyValue * 100 + '%'
  }
  if (typeof propertyValue === 'string' && isNaN(Number(propertyValue))) {
    return propertyValue
  }
  return propertyValue + 'px'
}

function sizeTransformer(propertyValue: Size): string {
  return toSizeUnit(propertyValue)
}

function toSpaceUnit(space: Space | string, spaces: Spaces): string {
  if (space === 'none') {
    return '0px'
  }
  // TODO @ben fix
  // @ts-ignore
  return spaces[space] || toSizeUnit(space)
}

function spaceTransformer(
  propertyValue: Space | string,
  theme?: Theme
): string {
  return toSpaceUnit(propertyValue, theme?.spaces)
}

function toFontSizeUnit(fontSize: FontSize, fontSizes: FontSizes): string {
  return fontSizes[fontSize]
}

function fontSizeTransformer(propertyValue: FontSize, theme?: Theme): string {
  return toFontSizeUnit(propertyValue, theme?.fontSizes)
}

function toFontWeightUnit(
  fontWeight: FontWeight,
  fontWeights: FontWeights
): string {
  return fontWeights[fontWeight]
}

function fontWeightTransformer(
  propertyValue: FontWeight,
  theme?: Theme
): string {
  return toFontWeightUnit(propertyValue, theme?.fontWeights)
}

function isValidColor(color: string): boolean {
  const s = new Option().style
  s.color = color
  return s.color === color
}

function colorTransformer(propertyValue: string, theme?: Theme): string {
  const themeColor = propertyValue && theme?.colors?.[propertyValue]
  return themeColor || (isValidColor(propertyValue) ? propertyValue : undefined)
}

const styleConfig: StyleConfig = {
  backgroundImage: {
    name: 'background-image'
  },
  bg: {
    name: 'background',
    transformer: colorTransformer
  },
  borderRadius: {
    name: 'border-radius',
    transformer: sizeTransformer
  },
  boxShadow: {
    name: 'box-shadow'
  },
  color: {
    name: 'color',
    transformer: colorTransformer
  },
  display: {
    name: 'display'
  },
  fontSize: {
    name: 'font-size',
    transformer: fontSizeTransformer
  },
  fontWeight: {
    name: 'font-weight',
    transformer: fontWeightTransformer
  },
  height: {
    name: 'height',
    transformer: sizeTransformer
  },
  m: {
    name: 'margin',
    transformer: spaceTransformer
  },
  mx: {
    names: ['margin-left', 'margin-right'],
    transformer: spaceTransformer
  },
  my: {
    names: ['margin-top', 'margin-bottom'],
    transformer: spaceTransformer
  },
  mt: {
    name: 'margin-top',
    transformer: spaceTransformer
  },
  mr: {
    name: 'margin-right',
    transformer: spaceTransformer
  },
  mb: {
    name: 'margin-bottom',
    transformer: spaceTransformer
  },
  ml: {
    name: 'margin-left',
    transformer: spaceTransformer
  },
  minHeight: {
    name: 'min-height',
    transformer: sizeTransformer
  },
  minWidth: {
    name: 'min-width',
    transformer: sizeTransformer
  },
  p: {
    name: 'padding',
    transformer: spaceTransformer
  },
  px: {
    names: ['padding-left', 'padding-right'],
    transformer: spaceTransformer
  },
  py: {
    names: ['padding-top', 'padding-bottom'],
    transformer: spaceTransformer
  },
  pt: {
    name: 'padding-top',
    transformer: spaceTransformer
  },
  pr: {
    name: 'padding-right',
    transformer: spaceTransformer
  },
  pb: {
    name: 'padding-bottom',
    transformer: spaceTransformer
  },
  pl: {
    name: 'padding-left',
    transformer: spaceTransformer
  },
  position: {
    name: 'position'
  },
  width: {
    name: 'width',
    transformer: sizeTransformer
  }
}

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
