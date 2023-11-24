import { PropsWithChildren } from "react";
import { Typography } from "./Typography";

type SectionProps = PropsWithChildren & {
  id: string;
};

function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="flex h-[1000px] w-full flex-col gap-6 pt-8 [text-wrap:balance] md:pt-20"
    >
      <Typography.H3 className="sticky top-0 bg-zinc-50 py-2 capitalize dark:bg-zinc-950 md:relative md:py-0">
        {id}
      </Typography.H3>
      {children}
    </section>
  );
}

export default Section;
