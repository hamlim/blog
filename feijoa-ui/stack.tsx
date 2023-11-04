import { cn } from "@recipes/cn";

interface Props extends React.HTMLProps<HTMLDivElement> {
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  className?: string;
}

let gridClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
};

export function Stack({ gap, ...props }: Props) {
  return <div {...props} className={cn(`grid`, gridClasses[gap], props.className)} />;
}
