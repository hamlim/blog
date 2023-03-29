import type { BoxProps } from '@ds-pack/daisyui'
import {
  Box,
  // @ts-ignore
  classnames as cx,
} from '@ds-pack/daisyui'

// @TODO - should move this over to @ds-pack/daisyui
interface Props extends BoxProps {
  inline?: boolean
  gap: '1' | '2' | '3' | '4'
}

let gapClasses = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
}

export function Stack({ inline, gap, className = '', ...props }: Props) {
  return (
    <Box
      className={cx({
        flex: true,
        'flex-col': !inline,
        'flex-row': inline,
        [gapClasses[gap]]: !!gap,
        [className]: !!className,
      })}
      {...props}
    />
  )
}
