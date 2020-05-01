import React from 'react'
import { useTheme } from '../../hooks'
import { Stack, Flex, Text } from '../'

export default {
  component: Stack,
  title: 'Stack'
}

const StackedBox: React.FC<any> = ({ space, px }: any) => {
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

const StackColumn: React.FC<any> = ({ space, px }: any) => {
  return (
    <Stack space={space} mr="small">
      {new Array(3).fill(undefined).map((_, i) => (
        <StackedBox key={i} space={space} px={px} />
      ))}
    </Stack>
  )
}

export const Default: React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <>
      <Flex>
        {Object.entries(theme.spaces).map(([space, px]) => (
          <StackColumn key={space} space={space} px={px} />
        ))}
      </Flex>
    </>
  )
}
