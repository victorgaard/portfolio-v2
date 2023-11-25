import { PropsWithChildren } from "react";
import { Typography } from "@components/Typography";

type SectionProps = PropsWithChildren & {
  id: string;
  title?: string;
};

function Section({ children, id, title }: SectionProps) {
  return (
    <section
      id={id}
      className="flex min-h-[500px] w-full flex-col gap-6 pt-8 md:pt-20"
    >
      <Typography.H4 className="sticky top-0 bg-zinc-50 py-2 capitalize dark:bg-zinc-950 md:relative md:py-0">
        {title || id}
      </Typography.H4>
      {children}
    </section>
  );
}

export default Section;
