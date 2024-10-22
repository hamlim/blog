import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { BaseLink as Link } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Text } from '@recipes/text'
import { projects } from '../project-list'

export default function Projects() {
  return (
    <Box>
      <Heading
        is="h1"
        className="mb-3"
      >
        Projects
      </Heading>
      <Text>
        Outside of work, I generally try to spend some time writing code on some
        open source projects. Some of these are really just hacks on ideas that
        I threw together in thirty minutes, others are a bit more involved.
      </Text>
      <Text>
        You can find all of my open source projects on{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hamlim"
        >
          GitHub
          <span className="sr-only">(opens in new window)</span>
        </Link>
        .
      </Text>
      <Box className="my-5">
        <List is="ul">
          {projects.map((project) => (
            <ListItem
              key={project.link}
              className="[&:not(:first-of-type)]:mt-3"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
                <span className="sr-only">(opens in new window)</span>
              </Link>{' '}
              {project.description}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export let metadata = {
  title: "Matt's Projects",
  description:
    "Some of the side projects that I've worked on in my free time over the past few years!",
}
