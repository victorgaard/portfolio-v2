import { PropsWithChildren } from "react";
import { Typography } from "@components/Typography";
import Image from "next/image";
import { format, timeAgo } from "@utils/date";

export function Experience({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-4">{children}</div>;
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
      <Typography.Paragraph className="flex gap-2 text-xs font-semibold uppercase">
        <span>
          {startDate} — {endDate}
        </span>
        <span>{time}</span>
      </Typography.Paragraph>
    </div>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <ul className="list-inside list-disc marker:text-zinc-200 dark:marker:text-zinc-800">
      {children}
    </ul>
  );
}

function Item({ children }: PropsWithChildren) {
  return (
    <li>
      <Typography.Paragraph className="inline text-sm">
        {children}
      </Typography.Paragraph>
    </li>
  );
}

function Footer({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function Stack({ children }: PropsWithChildren) {
  return (
    <div className="rounded-full bg-zinc-200 px-4 py-2 text-sm dark:bg-zinc-800">
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
