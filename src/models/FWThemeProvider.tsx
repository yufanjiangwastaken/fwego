import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import fwTheme from '../theme/fw'

type Props = {
  children: React.ReactNode
}

export const FWThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider theme={fwTheme}>{children}</ThemeProvider>
}
