import { css } from '../../emotion'
import { useTheme } from '../../hooks'
import type { FontSize } from '../../theme/fonts'

export default function useBaselineStyles(
  baseline: boolean,
  size: FontSize
): string | undefined {
  const theme = useTheme()

  if (baseline) {
    const [typeOffset, heightCorrection] = theme.fontOffsets[size]

    return css`
      line-height: 1;
      transform: translateY(${typeOffset});
      &:before {
        content: '';
        display: block;
        height: 0px;
        margin-top: -${heightCorrection};
      }
    `
  }

  return undefined
}
