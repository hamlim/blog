import { run } from 'pierre'

export let label = 'E2E Tests'

export default async function () {
  await run(`echo "Hello, world!"`)
}
