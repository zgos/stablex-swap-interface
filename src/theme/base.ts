import { white, black, green, red, yellow } from './colors'
import { css } from 'styled-components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

export default {
  colors: { white, black, ...green, ...red, ...yellow },
  grids: {
    sm: 8,
    md: 12,
    lg: 24
  },
  // gradient: 'linear-gradient(rgb(152, 152, 152) 0%, rgb(49, 48, 48) 76.22%)',
  gradient: '#C6C6C6',
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
}
