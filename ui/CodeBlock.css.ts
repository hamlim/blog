import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

export let code = style({
  marginTop: vars.space[2],
  overflow: 'auto',
})

globalStyle('.shiki', {
  overflow: 'auto',
  padding: vars.space[4],
})
