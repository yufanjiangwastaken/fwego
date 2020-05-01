export interface FontSizes {
  xxxsmall: string
  xxsmall: string
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
  xxxlarge: string
}

export type FontSize = keyof FontSizes

export const fontSizes: FontSizes = {
  xxxsmall: '8px',
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '24px',
  xxlarge: '32px',
  xxxlarge: '48px'
}

export const fontOffsets: { [key in FontSize]: [string, string] } = {
  xxxsmall: ['1px', '2px'],
  xxsmall: ['1px', '3px'],
  xsmall: ['1px', '4px'],
  small: ['2px', '4px'],
  medium: ['2px', '5px'],
  large: ['3px', '6px'],
  xlarge: ['4px', '8px'],
  xxlarge: ['5px', '10px'],
  xxxlarge: ['6px', '14px']
}

// FontWeights comply with OpenType spec
// https://docs.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass
export interface FontWeights {
  thin: '100'
  extraLight: '200'
  light: '300'
  normal: '400'
  medium: '500'
  semiBold: '600'
  bold: '700'
  extraBold: '800'
  black: '900'
}

export type FontWeight = keyof FontWeights

export const fontWeights: FontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900'
}
