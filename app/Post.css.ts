import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

export let content = style({})

globalStyle(`${content} * + *`, {
  marginTop: vars.space[2],
})

export let publishedDate = style({
  color: vars.colors.gray800,
  fontStyle: 'italic',
})
