import React from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Inline } from '../Inline/Inline'
import { Button } from './Button'

export default {
  component: Button,
  title: 'Button'
}

export const Default: React.FC<{}> = () => {
  return <Button>Button</Button>
}

export const FWTheme: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      <Inline space="small">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
      </Inline>
    </FWThemeProvider>
  )
}
