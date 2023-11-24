import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
  id: string;
};

function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="flex h-[1000px] w-full flex-col gap-6 pt-20 [text-wrap:balance]"
    >
      {children}
    </section>
  );
}

export default Section;
