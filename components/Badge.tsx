import { cn } from "@utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

function Badge({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & PropsWithChildren) {
  return (
    <div
      className={cn(
        "rounded-full bg-zinc-200 px-4 py-1.5 text-xs text-zinc-900 transition-all dark:bg-zinc-900 dark:text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Badge;
