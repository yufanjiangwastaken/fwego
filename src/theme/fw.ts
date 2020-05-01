import type { Theme } from './theme'

const buttonBase = {
  bg: 'transparent',
  borderRadius: '18px'
}

const fwTheme: Theme = {
  colors: {
    primary: '#ff7061',
    blk1: '#121212',
    gray1: '#171717',
    gray2: '#2b2b2b',
    gray3: '#404040',
    offWhite: '#dbdbdb'
  },
  variants: {
    primary: {
      ...buttonBase,
      backgroundImage: 'linear-gradient(254deg, #f78361, #f54b64)'
    },
    outline: {
      ...buttonBase,
      boxShadow: 'inset 0 0 0 1px #4b4b4b',
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 'none'
      }
    }
  }
}

export default fwTheme
