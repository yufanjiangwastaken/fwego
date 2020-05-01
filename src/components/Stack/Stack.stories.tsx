import React from 'react'
import { Stack } from './Stack'
import { Box } from '../Box/Box'

export default {
  component: Stack,
  title: 'Stack'
}

export const Default: React.FC<{}> = () => {
  return (
    <Stack>
      <Box bg="red" width="25" height="25" />
      <Box bg="green" width="25" height="25" />
      <Box bg="blue" width="25" height="25" />
    </Stack>
  )
}
