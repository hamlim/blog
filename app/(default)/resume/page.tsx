import {
  Heading,
  Link,
  Box,
  Text,
  List,
  ListItem,
  Stack,
  Blockquote,
} from '@ds-pack/daisyui'

export default function Resume() {
  return (
    <Stack gap="4">
      <Heading variant="h1" is="h1">
        Matt Hamlin's Resume
      </Heading>
      <Blockquote>
        Also available via{' '}
        <Link
          is="a"
          href="https://matt-hamlin.notion.site/Matt-Hamlin-s-Resume-190eb1b56b2d48c3b58a5f3a2d121c81?pvs=4"
        >
          Notion
        </Link>{' '}
        and{' '}
        <Link
          is="a"
          href="https://docs.google.com/document/d/1r_dinjsgFfB0ppLlosmaI31z0lUAbwuL7kWrlYRZ3aI/edit?usp=sharing"
        >
          Google Docs
        </Link>
      </Blockquote>
      <Box className="flex flex-col md:flex-row">
        <Box>
          <Text>
            <Text is="strong" fontWeight="bold">
              Staff Software Engineer
            </Text>{' '}
            - Strong technical leader in the frontend web development space,
            passionate about building the best possible web user experiences and
            the teams that support them
          </Text>
        </Box>
        <Box>
          <address>
            9 Miner Street, Apt 404
            <br /> Boston MA, 02215
          </address>
          <Link is="a" href="tel:4252100980">
            (425) 210-0980
          </Link>
          <br />
          <Link is="a" href="mailto:matthewjameshamlin@gmail.com">
            matthewjameshamlin@gmail.com
          </Link>
          <br />
          <Link href="/" is="a">
            https://matthamlin.me
          </Link>
        </Box>
      </Box>
      <Stack gap="4">
        <Heading is="h2" variant="h2">
          Experience
        </Heading>
        <Box>
          <Heading is="h3" variant="h3">
            Wayfair, Boston MA —{' '}
            <Text is="em" fontStyle="italic">
              Frontend Platform Tech Lead
            </Text>
          </Heading>
          <Text is="b" fontWeight="bold">
            June 2021 - Present
          </Text>
          <Text>
            Lead the Frontend Platform team at Wayfair, supporting our customer,
            supplier, and internal facing experiences and teams.
          </Text>
          <List variant="unordered" is="ul">
            <ListItem>
              Acted as a lead architect for a frontend-replatforming effort to
              adopt Next.js, React Server Components, and GraphQL Federation
            </ListItem>
            <ListItem>
              Designed and implemented various aspects of our overall frontend
              web architecture
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading is="h3" variant="h3">
            Wayfair, Boston MA —{' '}
            <Text is="em" fontStyle="italic">
              Design Systems Tech Lead
            </Text>
          </Heading>
          <Text is="b" fontWeight="bold">
            2017 - June 2021
          </Text>
          <Text>
            Worked with a small team of frontend engineers and designers to
            build, and maintain our Design Systems, as well as three internal
            component libraries for our storefront, internal, and
            supplier-facing websites.
          </Text>
          <List variant="unordered" is="ul">
            <ListItem>
              Built out various iterations of our internal Design System
              component library and documentation site, supporting live demos
              and an editable sandbox
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading is="h3" variant="h3">
            Wayfair, Boston MA —{' '}
            <Text is="em" fontStyle="italic">
              Frontend Software Engineer
            </Text>
          </Heading>
          <Text is="b" fontWeight="bold">
            July 2016 - July 2017
          </Text>
          <Text>
            Worked with several teams to ship new design features and fix
            various bugs across the Wayfair website and its affiliated brands
            (All Modern, Joss and Main, Birch Lane, Perigold).
          </Text>
          <List variant="unordered" is="ul">
            <ListItem>
              I was one of the first developers to start adopting React
              internally, and rebuilt several key features on site
            </ListItem>
          </List>
        </Box>
        <Heading is="h2" variant="h2">
          Education
        </Heading>
        <Box>
          <Heading is="h3" variant="h3">
            Rensselaer Polytechnic Institute, Troy NY —{' '}
            <Text is="em" fontStyle="italic">
              B.S. Information Technology and Web Science
            </Text>
          </Heading>
          <Text is="b" fontWeight="bold">
            August 2012 - May 2016
          </Text>
          <Text>
            Graduated in the top 15 students of my major, taking classes that
            provided insight to building user-friendly experiences on the web
            and also focused on the newest web development standards.
          </Text>
        </Box>
        <Heading is="h2" variant="h2">
          Projects
        </Heading>
        <Box>
          <Heading is="h3" variant="h3">
            Inline-MDX.macro— A Babel macro for authoring and transforming mdx
          </Heading>
          <Text>
            One of my first babel macros, I built this to quickly compose MDX
            inline within another file for use within our design system
            documentation site.
          </Text>
          <Link href="https://github.com/hamlim/inline-mdx.macro" is="a">
            https://github.com/hamlim/inline-mdx.macro
          </Link>
        </Box>
        <Box>
          <Heading is="h3" variant="h3">
            Simple Props— A minimal, css variable backed style-prop library for
            [p]react
          </Heading>
          <Text>
            A CSS-in-JS library that allows you to build a system-prop-like API
            using plain old CSS Custom Properties (variables).
          </Text>
          <Link href="https://github.com/ds-pack/simple-props" is="a">
            https://github.com/ds-pack/simple-props
          </Link>
        </Box>
        <Box>
          <Heading is="h3" variant="h3">
            Rainbow Sprinkle— Dynamic, theme-driven, style props for Vanilla
            Extract
          </Heading>
          <Text>
            I contributed to this open source library authored by one of my
            friends and coworkers for building style primitives within Vanilla
            Extract.
          </Text>
          <Link href="https://github.com/wayfair/rainbow-sprinkles" is="a">
            https://github.com/wayfair/rainbow-sprinkles
          </Link>
        </Box>
      </Stack>
    </Stack>
  )
}