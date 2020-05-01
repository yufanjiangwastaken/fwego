import React from 'react'
import { Button } from './Button'

export default {
  component: Button,
  title: 'Button'
}

export const Default: React.FC<{}> = () => {
  return <Button variant="blue">Button</Button>
}
