import React from 'react'
import { useTheme } from '../../hooks'
import { Inline, Flex, Text } from '../'

export default {
  component: Inline,
  title: 'Inline'
}

const InlineBox: React.FC<any> = ({ space, px }: any) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="primary"
      color="white"
      width="100"
      height="100"
    >
      <Text>{space}</Text>
      <Text>{px}</Text>
    </Flex>
  )
}

const InlineRow: React.FC<any> = ({ space, px }: any) => {
  return (
    <Inline space={space} mb="small">
      {new Array(3).fill(undefined).map((_, i) => (
        <InlineBox key={i} space={space} px={px} />
      ))}
    </Inline>
  )
}

export const Default: React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <>
      {Object.entries(theme.spaces).map(([space, px]) => (
        <InlineRow key={space} space={space} px={px} />
      ))}
    </>
  )
}
