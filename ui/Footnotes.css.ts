import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

export let footnote = style({
  selectors: {
    '&:target': {
      boxShadow: vars.focusShadow,
    },
  },
})
