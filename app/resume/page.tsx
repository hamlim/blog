import { Blockquote } from '@recipes/blockquote';
import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { BaseLink as Link } from '@recipes/link';
import {
  List,
  ListItem,
} from '@recipes/list';
import { Stack } from '@recipes/stack';
import { Text } from '@recipes/text';

export default function Resume() {
  return (
    <Stack gap={4}>
      <Heading is='h1'>Matt Hamlin's Resume</Heading>
      <Blockquote>
        Also available via{' '}
        <Link href='https://matt-hamlin.notion.site/Matt-Hamlin-s-Resume-190eb1b56b2d48c3b58a5f3a2d121c81?pvs=4'>
          Notion
        </Link>,{' '}
        <Link href='https://docs.google.com/document/d/1Om1ilLporVXdLxC_CS20rRjDMmjeVKfNHUDoK8odtdA/edit?usp=sharing'>
          Google Docs
        </Link>, and <Link href='/resume-may-24.pdf'>PDF</Link>.
      </Blockquote>
      <Box className='flex flex-col'>
        <Text className='mb-4'>
          Contact me via phone:{' '}
          <Link is='a' href='tel:4252100980'>
            (425) 210-0980
          </Link>{' '}
          or email:{' '}
          <Link is='a' href='mailto:matthewjameshamlin@gmail.com'>
            matthewjameshamlin@gmail.com
          </Link>
        </Text>
        <Text className='mb-4'>
          LinkedIn:{' '}
          <Link is='a' href='https://www.linkedin.com/in/hamlim/'>
            https://www.linkedin.com/in/hamlim/
          </Link>{' '}
          GitHub:{' '}
          <Link is='a' href='https://github.com/hamlim'>
            https://github.com/hamlim
          </Link>
        </Text>
        <Box>
          <Text>
            <Text is='strong' className='font-bold'>
              Staff Software Engineer
            </Text>{' '}
            - Strong technical leader in the frontend web development space with 10+ years of experience, passionate
            about building the best possible web user experiences and the teams that support them
          </Text>
        </Box>
      </Box>
      <Stack gap={4}>
        <Heading is='h2'>Experience</Heading>
        <Box>
          <Heading is='h3'>
            Staff Software Engineer - Fireworks
          </Heading>
          <Text is='b' className='font-bold'>
            June 2024 - Present
          </Text>
          <Text>
            Staff Software Engineer building out the future of business AI solutions at Fireworks.
          </Text>
        </Box>
        <Box>
          <Heading is='h3'>
            Staff SWE, Frontend Platform Tech Lead - Wayfair
          </Heading>
          <Text is='b' className='font-bold'>
            June 2021 - May 2024
          </Text>
          <Text>
            Lead the Frontend Platform team at Wayfair, supporting our customer, supplier, and internal facing
            experiences and teams.
          </Text>
          <List is='ul'>
            <ListItem>
              Lead architect for a frontend-replatforming effort to adopt Next.js, React Server Components, and GraphQL
              Federation
            </ListItem>
            <ListItem>
              Designed and implemented various aspects of our overall frontend web architecture (tracking, data-fetching
              orchestration, Authentication, web monorepo tooling), resulting in a more performant and better web user
              experience for Wayfair's customers
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading is='h3'>
            Senior SWE, Design Systems Tech Lead - Wayfair
          </Heading>
          <Text is='b' className='font-bold'>
            July 2017 - June 2021
          </Text>
          <Text>
            Lead the Design Systems engineering team, collaborating with designers to build, and maintain the Wayfair
            Design System, composed of three internal component libraries for our customer, internal, and
            supplier-facing websites.
          </Text>
          <List is='ul'>
            <ListItem>
              Built various iterations of our internal Design System component library and documentation site, including
              custom features like live demos and an editable sandbox
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading is='h3'>
            Frontend Software Engineer - Wayfair
          </Heading>
          <Text is='b' className='font-bold'>
            July 2016 - July 2017
          </Text>
          <Text>
            Worked on several teams to ship new features and fix various bugs across the Wayfair website and its
            affiliated brands (All Modern, Joss and Main, Birch Lane, Perigold).
          </Text>
          <List is='ul'>
            <ListItem>
              Early internal adopter of React at Wayfair, migrated several key features on site
            </ListItem>
          </List>
        </Box>
        <Heading is='h2'>Education</Heading>
        <Box>
          <Text>
            B.S. Information Technology and Web Science - Rensselaer Polytechnic Institute - 2012-2016
          </Text>
        </Box>
        <Heading is='h2'>Projects</Heading>
        <Box>
          <List is='ul'>
            <ListItem>
              <Text className='font-bold'>
                Inline-MDX.macro
              </Text>{' '}
              <Text>A Babel macro for authoring and transforming mdx</Text>
              <Link href='https://github.com/hamlim/inline-mdx.macro' is='a'>
                https://github.com/hamlim/inline-mdx.macro
              </Link>
            </ListItem>
            <ListItem>
              <Text className='font-bold'>
                Simple Props
              </Text>{' '}
              <Text>A minimal, css variable backed style-prop library for [p]react</Text>
              <Link href='https://github.com/ds-pack/simple-props' is='a'>
                https://github.com/ds-pack/simple-props
              </Link>
            </ListItem>
            <ListItem>
              <Text className='font-bold'>
                Rainbow Sprinkles
              </Text>{' '}
              <Text>Dynamic, theme-driven, style props for Vanilla Extract</Text>
              <Link href='https://github.com/wayfair/rainbow-sprinkles' is='a'>
                https://github.com/wayfair/rainbow-sprinkles
              </Link>
            </ListItem>
          </List>
        </Box>
        <Heading is='h2'>
          Programming Languages, Libraries, and Runtimes
        </Heading>
        <Box>
          <Heading is='h4'>Programming Languages</Heading>
          <Text>
            TypeScript (and JavaScript), GraphQL, CSS (including SCSS), HTML, PHP, and Go.
          </Text>
        </Box>
        <Box>
          <Heading is='h4'>Libraries and Runtimes:</Heading>
          <Text>
            Node.js, Deno, Bun, React and ReactDOM, Next.js, webpack, Babel, Jest, Cypress, Docker, Kubernetes (with
            Istio and Flagger), Vanilla Extract, Tailwind, Styled Components, GraphQL (with Apollo Client), Yarn, PNPM,
            and Turborepo.
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
}

export let metadata = {
  title: "Matt Hamlin's Resume",
  description: 'Matt Hamlin is a Staff Software Engineer with 10 years of experience across the frontend ecosystem.',
};
