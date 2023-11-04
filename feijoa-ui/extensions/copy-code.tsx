"use client";
import { Button } from "@recipes/button";
import { useToast } from "@recipes/use-toast";
import { ClipboardCopyIcon } from "lucide-react";

interface Props {
  code: string;
}

export function CopyCode({ code }: Props) {
  let { toast } = useToast();
  return (
    <Button
      className="absolute top-1 right-1 p-0 h-8 w-8"
      variant="outline"
      size="icon"
      title="Copy code"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          toast({
            title: "Copied to clipboard!",
          });
        } catch (e) {
          toast({
            title: "Failed to copy code to clipboard",
            description:
              "This may be due to the browser restricting usage of the `navigator.clipboard` API. Try manually selecting the code and copying that way!",
            variant: "destructive",
          });
        }
      }}
    >
      <ClipboardCopyIcon className="h-5 w-5" />
      <span className="sr-only">Click to copy</span>
    </Button>
  );
}
