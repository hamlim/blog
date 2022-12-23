import { vars } from '@ds-pack/components'
import { style } from '@vanilla-extract/css'

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

export let nav = style({
  padding: vars.space[4],
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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
})
