import { ComponentType } from 'react'

// @ts-expect-error
export interface BoxProps extends React.HTMLProps<HTMLElement> {
  is?: string | ComponentType<any> | undefined
}

export function Box({ is: El = 'div', ...props }: BoxProps) {
  return <El {...props} />
}
