import { ComponentType } from "react";

interface Props extends React.HTMLProps<HTMLElement> {
  is?: string | ComponentType<any> | undefined;
}

export function Box({ is: El = "div", ...props }: Props) {
  return <El {...props} />;
}
