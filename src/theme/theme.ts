import breakpoints from './breakpoints'
import { fontOffsets, fontSizes, fontWeights } from './fonts'
import spaces from './spaces'

export type Theme = { [key: string]: any }

const theme: Theme = {
  breakpoints: breakpoints,
  colors: {
    primary: '#ff7061'
  },
  fontOffsets: fontOffsets,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  spaces: spaces
}

export default theme
