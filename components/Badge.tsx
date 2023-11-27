import { PropsWithChildren } from "react";

function Badge({ children }: PropsWithChildren) {
  return (
    <div className="rounded-full bg-zinc-200 px-4 py-1.5 text-xs dark:bg-zinc-800">
      {children}
    </div>
  );
}

export default Badge;
