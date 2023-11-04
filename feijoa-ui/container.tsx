import { cn } from "@recipes/cn";

interface Props {
  className?: string;
}

export function Container(props: Props) {
  return <div {...props} className={cn("container", props.className)} />;
}
