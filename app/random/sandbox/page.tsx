import { Box, Heading, Text } from '@ds-pack/daisyui'
import Sandbox from './Sandbox'

export default function SandboxPage() {
  return (
    <Box>
      <Heading variant="h2" is="h1" className="mb-4">
        Sandbox
      </Heading>
      <Text>Warning: This might break easily!</Text>
      <Sandbox />
    </Box>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
