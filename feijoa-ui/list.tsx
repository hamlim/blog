import { Box } from "@recipes/box";
import { cn } from "@recipes/cn";

interface ListProps {
  is?: "ul" | "ol";
  className?: string;
}

export function List({ is = "ul", ...props }: ListProps) {
  return (
    <Box
      is={is}
      {...props}
      className={cn(
        "my-6 ml-6 [&>li]:mt-2",
        is === "ul" && "list-disc",
        is === "ol" && "list-decimal",
        props.className,
      )}
    />
  );
}

interface ListItemProps extends React.HTMLProps<HTMLLIElement> {}

export function ListItem(props: ListItemProps) {
  return <Box is="li" {...props} />;
}
