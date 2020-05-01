import React from 'react'
import { Button } from './Button'
import { Inline } from '../Inline/Inline'

export default {
  component: Button,
  title: 'Button'
}

export const Default: React.FC<{}> = () => {
  return <Button>Button</Button>
}

export const Variants: React.FC<{}> = () => {
  return (
    <>
      <Inline space="small">
        <Button variant="primary">Button</Button>
        <Button variant="blue">Button</Button>
      </Inline>
    </>
  )
}
