import React from 'react'
import { Box } from './Box'

export default {
  component: Box,
  title: 'Box'
}

export const Default: React.FC<{}> = () => {
  return <Box>An Empty Box</Box>
}
