import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

export let wrap = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: vars.space[4],
  '@media': {
    'screen and (min-width: 40em)': {
      gridTemplateColumns: '1fr 1fr',
    },
    'screen and (min-width: 60em)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
})

export let swatch = style({
  backgroundColor: 'var(--bg-color)',
  borderRadius: vars.radii.small,
  padding: vars.space[4],
})
