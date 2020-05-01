import React from 'react'
import { Inline } from './Inline'
import { Box } from '../Box/Box'

export default {
  component: Inline,
  title: 'Inline'
}

export const Default: React.FC<{}> = () => {
  return (
    <Inline>
      <Box bg="red" width="25" height="25" />
      <Box bg="green" width="25" height="25" />
      <Box bg="blue" width="25" height="25" />
    </Inline>
  )
}
