import { css } from '../emotion'
import type { Theme } from '../theme/theme'

type Props = { [key: string]: any }

export type StyleConfig = {
  [key: string]: {
    name?: string
    names?: Array<string>
    transformer?: (value: any, theme?: Theme) => string
  }
}

export function partitionStyleProps(
  componentProps: Props,
  styleConfig: StyleConfig
): [Props, Props] {
  const forwardedProps: Props = {}
  const styleProps: Props = {}
  for (const key in componentProps) {
    if (styleConfig[key]) {
      styleProps[key] = componentProps[key]
    } else {
      forwardedProps[key] = componentProps[key]
    }
  }
  return [forwardedProps, styleProps]
}

function toResponsiveStyles(
  cssName: string,
  cssValue: string | Array<string> | undefined,
  theme?: Theme
): string {
  if (!cssValue) {
    return ''
  }
  if (theme && Array.isArray(cssValue)) {
    return cssValue
      .map((value, i) => {
        if (i === 0) {
          return `${cssName}: ${value};`
        }
        return `@media (min-width: ${theme.breakpoints[i - 1]}) {
        ${cssName}: ${value};
      }`
      })
      .join('')
  }
  return `${cssName}: ${cssValue};`
}

function toCssProperty(
  propertyName: string,
  propertyValue: string | Array<string>,
  styleConfig: StyleConfig,
  theme?: Theme
): string {
  const config = styleConfig[propertyName]
  const cssName = config.name || propertyName
  const transformer = config?.transformer
  let cssValue = propertyValue
  if (typeof transformer === 'function') {
    if (Array.isArray(propertyValue)) {
      cssValue = propertyValue.map((value) => transformer(value, theme))
    } else {
      cssValue = transformer(propertyValue, theme)
    }
  }
  if (config?.names) {
    return config.names
      .map((cssName) => toResponsiveStyles(cssName, cssValue, theme))
      .join('')
  }
  return toResponsiveStyles(cssName, cssValue, theme)
}

export function combineCssProperties(
  styleProps: Props,
  styleConfig: StyleConfig,
  theme?: Theme
): string {
  const cssProperties = Object.keys(styleProps)
    .map((key) => toCssProperty(key, styleProps[key], styleConfig, theme))
    .join('')
  return css`
    ${cssProperties}
  `
}
