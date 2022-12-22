import { style } from '@vanilla-extract/css'
import { vars } from '@ui/components/src/vars.css'

export let footnote = style({
  selectors: {
    '&:target': {
      boxShadow: vars.focusShadow,
    },
  },
})
