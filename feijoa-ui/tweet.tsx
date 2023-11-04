import { Box } from "@recipes/box";
import type { ReactNode } from "react";
import { Tweet as ReactTweet, TweetContainer } from "react-tweet";

interface Props {
  id: string;
  children?: ReactNode;
}

export function Tweet(props: Props) {
  return (
    <Box className="my-6">
      <ReactTweet
        id={props.id}
        components={{
          TweetNotFound() {
            return <TweetContainer>{props.children}</TweetContainer>;
          },
        }}
      />
    </Box>
  );
}
