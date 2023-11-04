"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { Children, ReactNode, useState } from "react";

export function CollapseAnnotation({ children, query, color }: { children: ReactNode; query?: string; color: string }) {
  let firstLine = Children.toArray(children)[0];
  let [isOpen, setIsOpen] = useState(query !== "close");
  let Icon = isOpen ? ChevronDown : ChevronRight;
  return (
    <div className="relative">
      <button
        className="absolute bg-transparent border-0 m-0 p-0 left-[-0.1ch]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          className="align-middle inline-block h-[18px] w-[18px]"
          style={{
            color,
          }}
        />
      </button>
      {isOpen ? children : <div>{firstLine}</div>}
    </div>
  );
}
