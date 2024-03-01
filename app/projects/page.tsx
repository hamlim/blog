import { Box } from '@recipes/box';
import { Code as InlineCode } from '@recipes/code';
import { Heading } from '@recipes/heading';
import { BaseLink as Link } from '@recipes/link';
import { List, ListItem } from '@recipes/list';
import { Text } from '@recipes/text';

let projects: Array<{
  link: string;
  title: React.ReactNode;
  description: React.ReactNode;
}> = [
  {
    link: 'https://github.com/hamlim/milliform',
    title: 'Milliform',
    description: 'A super basic React.js form library!',
  },
  {
    link: 'https://github.com/hamlim/template-monorepo',
    title: 'Template Monorepo',
    description: 'A template for creating a monorepo with Bun, Next.js, and Turborepo',
  },
  {
    'link': 'https://github.com/hamlim/better-beacon',
    title: 'Better Beacon',
    'description': (
      <>
        A better version of{' '}
        <InlineCode>navigator.sendBeacon</InlineCode>, that doesn't break when you try to queue too many events!
      </>
    ),
  },
  {
    link: 'https://github.com/hamlim/rsc-form',
    title: 'RSC Form',
    description: 'A React Form component for use within React Server Components',
  },
  {
    link: 'https://github.com/hamlim/clue',
    title: 'Clue Notes',
    description:
      'A quick and dirty web app to keep track of your notes and assumptions while playing the board game Clue!',
  },
  {
    link: 'https://tails-theta.vercel.app',
    title: 'Tails',
    description: 'A simple web app for saving and sharing cocktail recipes!',
  },
  {
    link: 'https://github.com/hamlim/simple-cache',
    title: 'Simple Cache',
    description: 'A minimal, React cache implementation for both client and server components!',
  },
  {
    link: 'https://github.com/ds-pack/simple-props',
    title: 'Simple Props',
    description: 'A minimal, CSS variable backed, style-prop library',
  },
  {
    link: 'https://github.com/hamlim/inline-mdx.macro',
    title: 'inline-mdx.macro',
    description: (
      <>
        A babel macro for converting inline{' '}
        <Link
          href='https://mdxjs.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          MDX
        </Link>{' '}
        in JavaScript files.
      </>
    ),
  },
  {
    link: 'https://github.com/hamlim/projects/tree/master/packages/reroute-core',
    title: 'Reroute',
    description: 'A React router package built for Suspense using hooks',
  },
  {
    link: 'https://github.com/ds-pack/components',
    title: '@ds-pack/components',
    description: 'A component library built on Vanilla Extract, React, and TypeScript',
  },
  {
    link: 'https://github.com/ds-pack/use-media',
    title: '@ds-pack/use-media',
    description: (
      <>
        A React hook for <InlineCode>window.matchMedia</InlineCode> that is SSR safe.
      </>
    ),
  },
  {
    link: 'https://github.com/ds-pack/use-refs',
    title: '@ds-pack/use-refs',
    description: 'Helpers and utilities for working with refs in React',
  },
  {
    link: 'https://github.com/ds-pack/tapable',
    title: '@ds-pack/tapable',
    description: 'A React hook for creating accessible clickable primitives',
  },
  {
    link: 'https://github.com/ds-pack/babel-plugin-docs',
    title: '@ds-pack/babel-plugin-docs',
    description: 'A collection of babel utilities (plugins, visitors) for transforming code related to design systems.',
  },
  {
    link: 'https://github.com/hamlim/notedo',
    title: 'Notedo',
    description: 'A note and todo list web application using plain text.',
  },
];

export default function Projects() {
  return (
    <Box>
      <Heading is='h1' className='mb-4'>
        Projects
      </Heading>
      <Text>
        Outside of work, I generally try to spend some time writing code on some open source projects. Some of these are
        really just hacks on ideas that I threw together in thirty minutes, others are a bit more involved.
      </Text>
      <Text>
        You can find all of my open source projects on{' '}
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/hamlim'
        >
          GitHub
          <span className='sr-only'>(opens in new window)</span>
        </Link>
        .
      </Text>
      <Box className='my-5'>
        <List is='ul'>
          {projects.map((project) => (
            <ListItem
              key={project.link}
              className='[&:not(:first-of-type)]:mt-3'
            >
              <Link
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.title}
                <span className='sr-only'>(opens in new window)</span>
              </Link>{' '}
              {project.description}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
