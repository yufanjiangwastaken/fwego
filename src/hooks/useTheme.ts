import { useContext } from 'react'
import { ThemeContext } from '../models/ThemeProvider'
import type { Theme } from '../theme/theme'

export default function useTheme(): Theme {
  const theme = useContext(ThemeContext)
  return theme
}
