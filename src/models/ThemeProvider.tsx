import React, { createContext, useMemo } from 'react'
import merge from 'lodash/merge'
import defaultTheme from '../theme/theme'
import type { Theme } from '../theme/theme'

export const ThemeContext = createContext(defaultTheme)

interface ThemeProviderProps {
  children?: React.ReactNode
  theme?: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme
}: ThemeProviderProps) => {
  // lodash/merge mutates the first argument, so the object spread is meant to
  // prevent that from happening to the defaultTheme
  const contextValue: Theme = useMemo(() => merge({ ...defaultTheme }, theme), [
    theme
  ])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.displayName = 'FWThemeProvider'
