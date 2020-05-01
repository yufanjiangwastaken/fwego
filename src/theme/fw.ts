import type { Theme } from './theme'

const buttonBase = {
  bg: 'transparent',
  borderRadius: '18px'
}

const fwTheme: Theme = {
  colors: {
    primary: '#ff7061'
  },
  variants: {
    primary: {
      ...buttonBase,
      backgroundImage: 'linear-gradient(254deg, #f78361, #f54b64)'
    },
    outline: {
      ...buttonBase,
      boxShadow: 'inset 0 0 0 1px #4b4b4b'
    }
  }
}

export default fwTheme
