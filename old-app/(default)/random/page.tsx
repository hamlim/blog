import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { Link } from '@recipes/link';
import { List, ListItem } from '@recipes/list';

export default function Random() {
  return (
    <Box>
      <Heading className='mb-4' is='h2'>
        Random Things:
      </Heading>
      <List is='ul'>
        <ListItem>
          <Link href='/random/colors'>Colors</Link>
        </ListItem>
        <ListItem>
          <Link href='/random/sandbox'>Sandbox</Link>
        </ListItem>
      </List>
    </Box>
  );
}
