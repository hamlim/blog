import { Box } from '@recipes/box'
import { cn } from '@recipes/cn'

interface ListProps
  extends React.HTMLProps<HTMLUListElement & HTMLOListElement> {
  is?: 'ul' | 'ol'
  className?: string
}

export function List({ is = 'ul', ...props }: ListProps) {
  return (
    <Box
      is={is}
      {...props}
      className={cn(
        'ml-6',
        // margin when not nested
        '[:not(li)>&]:my-6',
        '[&>li]:mt-2',
        is === 'ul' && 'list-disc',
        is === 'ol' && 'list-decimal',
        props.className,
      )}
    />
  )
}

interface ListItemProps extends React.HTMLProps<HTMLLIElement> {}

export function ListItem(props: ListItemProps) {
  return (
    <Box
      is="li"
      {...props}
    />
  )
}
