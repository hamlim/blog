/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

"use client";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
  isOpen?: boolean;
}

let useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function usePortal({ children, isOpen }: PortalProps) {
  let [element, setElement] = useState<HTMLDivElement | null>(null);

  useIsomorphicEffect(() => {
    let element = document.body.appendChild(document.createElement("div"));
    setElement(element);
    return () => {
      setElement(null);
      document.body.removeChild(element);
    };
  }, [isOpen]);

  if (isOpen && element) {
    return createPortal(children, element);
  }
  return null;
}

export function Portal({ children, isOpen = false }: PortalProps) {
  return usePortal({ children, isOpen });
}
