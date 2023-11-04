import { Box } from "@recipes/box";
import { BaseLink } from "@recipes/link";
import type { ReactNode } from "react";

export function FootnoteRef({ id }: { id: string }) {
  return (
    <Box id={`ref-${id}`} is="sup" className="text-xs target:ring-2">
      <BaseLink href={`#fn-${id}`}>[{id}]</BaseLink>
    </Box>
  );
}

export function Footnote({ id, children }: { id: string; children: ReactNode }) {
  return (
    <Box id={`fn-${id}`} className="target:ring-2 p-2">
      <BaseLink href={`#ref-${id}`}>[{id}]</BaseLink> - {children}
    </Box>
  );
}
