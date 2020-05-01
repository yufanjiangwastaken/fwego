import type { Space } from '../theme/spaces'
import { spaceTransformer } from '../components/Box/transformers'
import useTheme from './useTheme'

export default function useSpace(space: Space): string {
  const theme = useTheme()
  return spaceTransformer(space, theme)
}
