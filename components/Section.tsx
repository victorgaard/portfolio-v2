import { HTMLAttributes, PropsWithChildren } from "react";
import { Typography } from "@components/Typography";
import { cn } from "@utils/cn";

type SectionProps = PropsWithChildren &
  HTMLAttributes<HTMLElement> & {
    id: string;
    title?: string;
  };

function Section({ children, id, title, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex w-full flex-col gap-6 pt-8 md:pt-20 md:pb-8",
        className,
      )}
    >
      <Typography.H5 className="sticky z-20 capitalize font-bold top-0 bg-zinc-50 py-2 dark:bg-zinc-950 md:relative md:py-0">
        {title || id}
      </Typography.H5>
      {children}
    </section>
  );
}

export default Section;
