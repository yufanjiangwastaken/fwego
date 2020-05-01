export interface Spaces {
  xxsmall: string
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
}

export type Space = keyof Spaces | 'none'

const spaces: Spaces = {
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '48px',
  xxlarge: '96px'
}

export default spaces
