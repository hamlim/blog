import { Box, type BoxProps } from '@recipes/box';
import { cn } from '@recipes/cn';

interface Props extends BoxProps {
  className?: string;
}

export function Text(props: Props) {
  return <Box is='p' {...props} className={cn('leading-7', props.className)} />;
}
