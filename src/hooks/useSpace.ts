import spaces from '../theme/spaces'
import type { Space } from '../theme/spaces'

export default function useSpace(space?: Space): string | undefined {
  if (!space) {
    return
  }
  if (space === 'none') {
    return '0px'
  }
  return spaces[space]
}
