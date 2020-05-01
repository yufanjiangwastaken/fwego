import React from 'react'
import { Text } from './Text'

export default {
  component: Text,
  title: 'Text'
}

export const Default: React.FC<{}> = () => {
  return <Text>Some Text</Text>
}
