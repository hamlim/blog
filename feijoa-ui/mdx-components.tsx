import { Blockquote } from "@recipes/blockquote";
import { Box } from "@recipes/box";
import { Code } from "@recipes/code";
import { CodeBlock } from "@recipes/code-block";
import { Heading } from "@recipes/heading";
import { Image } from "@recipes/image";
import { BaseLink, Link as LocalLink } from "@recipes/link";
import { List, ListItem } from "@recipes/list";
import { Text } from "@recipes/text";

type Prettify<T> =
  & {
    [K in keyof T]: T[K];
  }
  & {};

type Props<InferredType extends (...args: Array<any>) => any> = Prettify<
  Parameters<InferredType>[0]
>;

export function a(props: Props<typeof BaseLink>) {
  return <BaseLink {...props} />;
}

export function Link(props: Props<typeof LocalLink>) {
  return <LocalLink {...props} />;
}

export function ul(props: Props<typeof List>) {
  return <List {...props} is="ul" />;
}

export function ol(props: Props<typeof List>) {
  return <List {...props} is="ol" />;
}

export function li(props: Props<typeof ListItem>) {
  return <ListItem {...props} />;
}

export function del(props: Props<typeof Box>) {
  return <Box {...props} is="del" />;
}

export function em(props: Props<typeof Box>) {
  return <Box {...props} is="em" />;
}

export function strong(props: Props<typeof Box>) {
  return <Box {...props} is="strong" />;
}

export function p(props: Props<typeof Text>) {
  return <Text {...props} />;
}

export function h1(props: Props<typeof Heading>) {
  return <Heading {...props} is="h1" />;
}

export function h2(props: Props<typeof Heading>) {
  return <Heading {...props} is="h2" />;
}

export function h3(props: Props<typeof Heading>) {
  return <Heading {...props} is="h3" />;
}

export function h4(props: Props<typeof Heading>) {
  return <Heading {...props} is="h4" />;
}

export function h5(props: Props<typeof Heading>) {
  return <Heading {...props} is="h5" />;
}

export function h6(props: Props<typeof Heading>) {
  return <Heading {...props} is="h6" />;
}

export function blockquote(props: Props<typeof Blockquote>) {
  return <Blockquote {...props} />;
}

declare global {
  var __preContext: any;
}

export function pre(props: Props<typeof CodeBlock>) {
  return <CodeBlock {...props} />;
}

export function code(props: Props<typeof Code>) {
  return (
    <Box is="span">
      <Code {...props} />
    </Box>
  );
}

export function img(props: Props<typeof Image>) {
  return <Image {...props} />;
}

export function Time(props: Props<typeof Box>) {
  return <Box {...props} is="time" />;
}

export * from "@recipes/accordion";
export * from "@recipes/alert";
export * from "@recipes/alert-dialog";
export * from "@recipes/aspect-ratio";
export * from "@recipes/avatar";
export * from "@recipes/badge";
export * from "@recipes/blockquote";
export * from "@recipes/box";
export * from "@recipes/button";
export * from "@recipes/calendar";
export * from "@recipes/card";
export * from "@recipes/checkbox";
export * from "@recipes/cn";
export * from "@recipes/code";
export * from "@recipes/code-block";
export * from "@recipes/collapsible";
export * from "@recipes/command";
export * from "@recipes/container";
export * from "@recipes/context-menu";
export * from "@recipes/dialog";
export * from "@recipes/dropdown-menu";
export * from "@recipes/figure";
export * from "@recipes/footnote";
export * from "@recipes/form";
export * from "@recipes/github-mention";
export * from "@recipes/heading";
export * from "@recipes/hover-card";
export * from "@recipes/image";
export * from "@recipes/input";
export * from "@recipes/label";
export * from "@recipes/link";
export * from "@recipes/list";
export * from "@recipes/menubar";
export * from "@recipes/navigation-menu";
export * from "@recipes/popover";
export * from "@recipes/portal";
export * from "@recipes/progress";
export * from "@recipes/radio-group";
export * from "@recipes/scroll-area";
export * from "@recipes/select";
export * from "@recipes/separator";
export * from "@recipes/sheet";
export * from "@recipes/skeleton";
export * from "@recipes/slider";
export * from "@recipes/stack";
export * from "@recipes/switch";
export * from "@recipes/table";
export * from "@recipes/tabs";
export * from "@recipes/tapable";
export * from "@recipes/text";
export * from "@recipes/textarea";
export * from "@recipes/theme-provider";
export * from "@recipes/theme-toggle";
export * from "@recipes/tldr";
export * from "@recipes/toast";
export * from "@recipes/toaster";
export * from "@recipes/toggle";
export * from "@recipes/tooltip";
export * from "@recipes/tweet";
export * from "@recipes/twitter-mention";
export * from "@recipes/use-toast";
