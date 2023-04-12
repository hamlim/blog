import { Box, Heading } from '@ds-pack/daisyui'
import Sandbox from './Sandbox'

export default function SandboxPage() {
  return (
    <Box className="flex flex-col flex-grow">
      <Heading variant="h2" is="h1" className="mb-4">
        Sandbox
      </Heading>
      <Sandbox />
    </Box>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
