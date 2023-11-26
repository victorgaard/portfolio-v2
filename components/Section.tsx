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
        "flex min-h-[500px] w-full flex-col gap-6 pt-8 md:pt-20",
        className,
      )}
    >
      <Typography.H4 className="sticky z-20 top-0 bg-zinc-50 py-2 dark:bg-zinc-950 md:relative md:py-0">
        {title || id}
      </Typography.H4>
      {children}
    </section>
  );
}

export default Section;
