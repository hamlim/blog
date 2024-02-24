import { Box } from '@recipes/box';
import { Code } from '@recipes/code';
import { CodeBlock } from '@recipes/code-block';
import { Heading } from '@recipes/heading';
import { Stack } from '@recipes/stack';
import { Text } from '@recipes/text';

export default function Snippets() {
  return (
    <Box>
      <Heading className='mb-4' is='h2'>
        Snippets:
      </Heading>
      <Box>
        <Heading is='h3'>Timezone</Heading>
        <Text>
          A quick and easy one liner to access the current timezone!
        </Text>
        <Box className='max-w-full'>
          {/* @ts-expect-error */}
          <CodeBlock
            className='lang-typescript'
            children={`new Intl.DateTimeFormat().resolvedOptions().timeZone`}
          />
        </Box>
      </Box>
      <Box className='mt-6'>
        <Heading is='h3'>Prettify</Heading>

        {/* @ts-expect-error */}
        <CodeBlock
          className='lang-typescript'
          children={`// Reference: https://www.totaltypescript.com/concepts/the-prettify-helper

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};`}
        />
      </Box>
      <Box className='mt-6'>
        <Heading is='h3'>yw</Heading>

        {/* @ts-expect-error */}
        <CodeBlock
          className='lang-shell'
          children={`# Bash script to execute a package.json script within a workspace
yw() {
  yarn workspace $(yarn workspaces list --json | jq -r .name | fzf) "$@"
}

# For yarn v1 monorepos, I use ywold:
ywold() {
  yarn workspace $(yarn --json workspaces info | jq '.data' -r | jq "[keys][0] []" -r | fzf) $@
}
`}
        />
      </Box>
      <Box className='mt-6'>
        <Heading is='h3'>Turbo workspace timings</Heading>

        <Text>
          If you work within a monorepo and want to get a breakdown of the time that each workspace takes to run a task
          (<Code>lib:build</Code> in the below example), then these three shell commands will do that!
        </Text>

        {/* @ts-expect-error */}
        <CodeBlock
          className='lang-shell'
          children={`yarn turbo run lib:build --summarize
SUMMARY_FILE=$(/bin/ls .turbo/runs/*.json | head -n1)
cat $SUMMARY_FILE | jq '[.tasks[] | {"taskId": .taskId, "duration": (.execution.endTime - .execution.startTime)}] | sort_by(-.duration)'`}
        />
      </Box>
    </Box>
  );
}
