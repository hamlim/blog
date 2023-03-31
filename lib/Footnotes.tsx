import { Text, Link, Box } from '@ds-pack/daisyui'

export function Ref({ id }) {
  return (
    <Text id={`ref-${id}`} is="sup" className="text-xs target:bg-blue-200">
      <Link is="a" href={`#fn-${id}`}>
        [{id}]
      </Link>
    </Text>
  )
}

export function Footnote({ id, children }) {
  return (
    <Box
      id={`fn-${id}`}
      className="border-dashed border-blue-200 target:border-2 p-2"
    >
      <Link is="a" href={`#ref-${id}`}>
        [{id}]
      </Link>{' '}
      - {children}
    </Box>
  )
}
