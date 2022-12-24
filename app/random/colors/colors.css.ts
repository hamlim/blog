import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

import { breakpoints } from '@lib/breakpoints'

export let wrap = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: vars.space[4],
  ...breakpoints({
    medium: {
      gridTemplateColumns: '1fr 1fr',
    },
    large: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  }),
})

export let swatch = style({
  backgroundColor: 'var(--bg-color)',
  borderRadius: vars.radii.small,
  padding: vars.space[4],
})
