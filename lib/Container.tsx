import { Box, cx } from '@ds-pack/daisyui'

export function Container(props) {
  return (
    <Box
      {...props}
      className={cx({
        'p-4 my-0 mx-auto grow flex justify-between flex-col container max-w-prose':
          true,
        [props.className]: !!props.className,
      })}
    />
  )
}
