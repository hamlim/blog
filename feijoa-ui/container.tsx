import { Box, type BoxProps } from '@recipes/box'
import { cn } from '@recipes/cn'

interface Props extends BoxProps {
  className?: string
}

export function Container(props: Props) {
  return (
    <Box
      {...props}
      className={cn(
        'p-4 my-0 mx-auto grow flex justify-between flex-col container max-w-prose',
        props.className,
      )}
    />
  )
}
