import breakpoints from './breakpoints'
import { fontOffsets, fontSizes, fontWeights } from './fonts'
import spaces from './spaces'

export type Theme = { [key: string]: any }

const theme: Theme = {
  breakpoints: breakpoints,
  fontOffsets: fontOffsets,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  spaces: spaces
}

export default theme
