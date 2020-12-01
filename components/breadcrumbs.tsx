import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Box, List, ListItem, Text } from '@ds-pack/components'
import Link from './Link'

export function Breadcrumbs({ children }: { children: any }) {
  let [el, setEl] = useState(null)
  useEffect(() => {
    setEl(document.querySelector('#breadcrumbs-portal'))
  }, [])
  if (el) {
    return createPortal(<Box display="inline-flex">{children}</Box>, el)
  }
  return null
}

export function Crumb({ children, to }: { children: any; to: string }) {
  return (
    <Link fontSize={2} to={to}>
      {children}
    </Link>
  )
}

export function Spacer() {
  return (
    <Text mx={4} fontSize={2}>
      {'/'}
    </Text>
  )
}
