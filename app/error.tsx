'use client';

import { Button } from '@recipes/button';
import { Container } from '@recipes/container';
import { Heading } from '@recipes/heading';
import { Text } from '@recipes/text';

export default function Error({ error, reset }) {
  return (
    <Container>
      <Heading is='h1'>Oh fuck - it's broken!</Heading>
      <Text>{error.message}</Text>
      <Button onClick={reset}>Reset</Button>
    </Container>
  );
}
