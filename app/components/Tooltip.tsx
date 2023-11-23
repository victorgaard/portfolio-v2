import { PropsWithChildren } from "react";

function Tooltip({ children }: PropsWithChildren) {
  return (
    <div className="animate-fade-in-up absolute -top-10 left-0 hidden whitespace-nowrap rounded-lg bg-zinc-900 px-2 py-1 text-sm font-medium text-white peer-hover:block dark:bg-white dark:text-zinc-900">
      {children}
    </div>
  );
}

export default Tooltip;
