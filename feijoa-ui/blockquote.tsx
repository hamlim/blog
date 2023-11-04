import { Box } from "@recipes/box";
import { cn } from "@recipes/cn";

interface Props {
  className?: string;
}

export function Blockquote(props: Props) {
  return (
    <Box
      is="blockquote"
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", props.className)}
    />
  );
}
