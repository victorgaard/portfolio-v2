import { PropsWithChildren } from "react";
import { Typography } from "@components/Typography";
import Image from "next/image";
import { format, timeAgo } from "@utils/date";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function Experience({ children }: PropsWithChildren) {
  return (
    <div className="group relative -mx-4 flex flex-col gap-5 rounded-lg border-t border-transparent p-4 transition-all hover:border-zinc-800 hover:dark:bg-zinc-900">
      {children}
      <div className="absolute right-4 top-4 hidden group-hover:block">
        <ArrowUpRightIcon className="h-5 w-5 animate-fade-in-up" />
      </div>
    </div>
  );
}

function Header({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function Logo({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="logo"
      width={56}
      height={56}
      className="h-14 w-14 rounded-2xl"
    />
  );
}

type SummaryProps = {
  role: string;
  company: string;
  start: string;
  end: string | null;
};

function Summary({ role, company, start, end }: SummaryProps) {
  const startDate = format(new Date(start));
  const endDate = end ? format(new Date(end)) : "present";
  const time = timeAgo(new Date(start));
  return (
    <div className="flex flex-col">
      <Typography.Paragraph className="font-semibold" extraContrast>
        {role} · {company}
      </Typography.Paragraph>
      <Typography.Paragraph className="text-xs font-semibold uppercase">
        {startDate} — {endDate} · {time}
      </Typography.Paragraph>
    </div>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <ul className="ml-3 list-disc marker:text-zinc-200 dark:marker:text-zinc-700">
      {children}
    </ul>
  );
}

function Item({ children }: PropsWithChildren) {
  return (
    <li className="pl-1.5">
      <Typography.Paragraph className="inline text-sm" extraContrast>
        {children}
      </Typography.Paragraph>
    </li>
  );
}

function Footer({ children }: PropsWithChildren) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
}

function Stack({ children }: PropsWithChildren) {
  return (
    <div className="rounded-full bg-zinc-200 px-4 py-1.5 text-xs dark:bg-zinc-800">
      {children}
    </div>
  );
}

Experience.Logo = Logo;
Experience.Header = Header;
Experience.Summary = Summary;
Experience.Content = Content;
Experience.Item = Item;
Experience.Footer = Footer;
Experience.Stack = Stack;
