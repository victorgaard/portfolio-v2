import { cn } from "@utils/cn";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

function TextLink({
  children,
  className,
  href,
  ...rest
}: PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target={rest.target || "_blank"}
      rel={rest.rel || "noreferrer"}
      {...rest}
      className={cn(
        "font-medium text-zinc-900 decoration-indigo-500 underline-offset-2 transition-all hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-zinc-200 hover:dark:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}

export default TextLink;
