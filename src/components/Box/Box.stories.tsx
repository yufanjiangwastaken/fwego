import React from 'react'
import { useTheme } from '../../hooks'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Box, Inline, Flex, Text } from '../'

export default {
  component: Box,
  title: 'Box'
}

export const Default: React.FC<{}> = () => {
  return <Box>An Empty Box</Box>
}

const ColorBox: React.FC<any> = ({ bg, children }: any) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={bg}
      color="white"
      width="150"
      height="150"
    >
      {children}
    </Flex>
  )
}

const ColorGrid: React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <Inline space="small">
      {Object.entries(theme.colors).map(([name, hex]) => {
        return (
          <ColorBox key={name} bg={name}>
            <Text mb="small">bg=&quot;{name}&quot;</Text>
            <Text> {hex} </Text>
          </ColorBox>
        )
      })}
    </Inline>
  )
}

export const FWColors: React.FC<{}> = () => {
  return (
    <FWThemeProvider>
      <ColorGrid />
    </FWThemeProvider>
  )
}

const GridColumn: React.FC<any> = ({ width, children }: any) => {
  return (
    <Box
      bg="primary"
      color="white"
      height="100"
      width={width}
      border="2px solid white"
    >
      {children}
    </Box>
  )
}

export const ResponsiveGrid: React.FC<{}> = () => {
  return (
    <>
      <Flex flexWrap="wrap" mb="medium">
        <GridColumn width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          width=&#123;{'[1, 1/2, 1/3, 1/4]'}&#125;
        </GridColumn>
        <GridColumn width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          width=&#123;{'[1, 1/2, 1/3, 1/4]'}&#125;
        </GridColumn>
        <GridColumn width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          width=&#123;{'[1, 1/2, 1/3, 1/4]'}&#125;
        </GridColumn>
        <GridColumn width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          width=&#123;{'[1, 1/2, 1/3, 1/4]'}&#125;
        </GridColumn>
      </Flex>
      <Flex flexWrap="wrap">
        <GridColumn width={[1, 1, 1 / 3]}>
          width=&#123;{'[1, 1, 1/3]'}&#125;
        </GridColumn>
        <GridColumn width={[1, 1, 1 / 3]}>
          width=&#123;{'[1, 1, 1/3]'}&#125;
        </GridColumn>
        <GridColumn width={[1, 1, 1 / 3]}>
          width=&#123;{'[1, 1, 1/3]'}&#125;
        </GridColumn>
      </Flex>
    </>
  )
}

const SpacingBox: React.FC<any> = ({ space, px }: any) => {
  return (
    <Box
      bg="primary"
      color="white"
      width="150"
      height="150"
      p={space}
      mr={space}
    >
      <Text>p=&quot;{space}&quot;</Text>
      <Text>mr=&quot;{space}&quot;</Text>
      <Text>{px}</Text>
    </Box>
  )
}

export const Spacing: React.FC<any> = () => {
  const theme = useTheme()
  return (
    <Flex>
      {Object.entries(theme.spaces).map(([space, px]) => (
        <SpacingBox key={space} space={space} px={px} />
      ))}
    </Flex>
  )
}
