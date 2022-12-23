import { vars } from '@ds-pack/components'
import { style } from '@vanilla-extract/css'

import { breakpoints } from '../lib/breakpoints'

export let body = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export let main = style({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  minHeight: '100vh',
})

export let header = style({
  flexShrink: 1,
  backgroundColor: vars.colors.gray000,
  color: vars.colors.black,
})

export let footer = style({
  flexShrink: 1,
  backgroundColor: vars.colors.gray000,
})

export let container = style({
  padding: vars.space[4],
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  ...breakpoints({
    small: {
      maxWidth: '94vw',
      minWidth: '94vw',
    },
    medium: {
      maxWidth: '80vw',
      minWidth: '80vw',
    },
    large: {
      maxWidth: '70ch',
      minWidth: '70ch',
      flexDirection: 'row',
    },
  }),
})

export let section = style({
  m: '0 auto',
  flexGrow: '1',
  ...breakpoints({
    small: {
      maxWidth: '94vw',
      minWidth: '94vw',
      padding: vars.space[3],
    },
    medium: {
      maxWidth: '80vw',
      minWidth: '80vw',
      padding: vars.space[7],
    },
    large: {
      maxWidth: '70ch',
      minWidth: '70ch',
      padding: vars.space[10],
    },
  }),
})
