import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@recipes/tooltip';

export function Abbr({ title, children }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <abbr title={title}>{children}</abbr>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
