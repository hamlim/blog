import { cn } from "@recipes/cn";

interface Props {
  is: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

let headingClassMap = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-lg font-semibold tracking-tight",
};

export function Heading({ is: El, ...props }: Props) {
  let classes = headingClassMap[El];

  return <El {...props} className={cn(classes, props.className)} />;
}
