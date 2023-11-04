import { Box } from "@recipes/box";

export function TLDR(props: { children: React.ReactNode }) {
  return (
    <Box
      is="details"
      className="p-2 border-solid border-2 border-green-500 mt-4"
      {...props}
    >
      <summary>
        <Box is="strong" className="font-bold">
          TL;DR:
        </Box>
      </summary>
      {props.children}
    </Box>
  );
}
