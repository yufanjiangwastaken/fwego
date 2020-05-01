import React from 'react'
import { Flex } from './Flex'

export default {
  component: Flex,
  title: 'Flex'
}

export const Default: React.FC<{}> = () => {
  return <Flex>A Flexbox</Flex>
}
