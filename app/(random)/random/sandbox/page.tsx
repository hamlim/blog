import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import Sandbox from './Sandbox'

export default function SandboxPage() {
  return (
    <Box className="flex flex-col flex-grow">
      <Heading is="h1" className="mb-4">
        Sandbox
      </Heading>
      <Sandbox />
    </Box>
  )
}
