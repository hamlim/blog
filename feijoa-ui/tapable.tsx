/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

"use client";
import { Box } from "@recipes/box";
import { forwardRef, useCallback, useEffect, useState } from "react";

import { useSharedRef } from "@ds-pack/use-refs";

export interface UseTapableProps {
  disabled?: boolean;
  autoFocus?: boolean;
  onClick?: (e: MouseEvent | KeyboardEvent) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  [key: string]: unknown;
}

function noop() {}

export function useTapable(
  {
    disabled = false,
    autoFocus = false,
    onClick = noop,
    onKeyDown = noop,
    ...props
  }: UseTapableProps,
  ref: any,
) {
  let sharedRef = useSharedRef(ref);
  let [focused, setFocused] = useState(autoFocus);

  useEffect(() => {
    if (focused) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sharedRef.current.focus();
        });
      });
    }
  }, [focused]);

  let handleClick = useCallback(
    function handleClick(event: MouseEvent | KeyboardEvent) {
      onClick(event);
      setFocused(true);
    },
    [onClick],
  );

  let handleKeyDown = useCallback(
    function handleKeyDown(event: KeyboardEvent) {
      onKeyDown(event);
      if (event.key === "Enter" || event.key === " ") {
        if (event.key === " ") {
          event.preventDefault();
        }
        onClick(event);
      }
    },
    [onClick, onKeyDown],
  );

  return {
    ...props,
    onKeyDown: disabled ? noop : handleKeyDown,
    onClick: disabled ? noop : handleClick,
    ref: sharedRef,
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled ? true : undefined,
  };
}

export interface TapableProps extends UseTapableProps {}

export let Tapable = forwardRef<any, TapableProps>(function Tapable(
  props: TapableProps,
  ref,
) {
  let ariaProps = useTapable(props, ref);
  // @ts-ignore
  return <Box {...props} {...ariaProps} />;
});
