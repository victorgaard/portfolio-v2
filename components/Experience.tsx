import { PropsWithChildren } from "react";
import { Typography } from "@components/Typography";
import Image from "next/image";
import { format, timeAgo } from "@utils/date";
import { ArrowUpRightIcon, LinkIcon } from "@heroicons/react/24/outline";
import Badge from "./Badge";
import TextLink from "./TextLink";
import { Experience as ExperienceType } from "@static/global";

type ExperienceProps = PropsWithChildren & {
  url: string;
};
export function Experience({ children, url }: ExperienceProps) {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="group relative -mx-4 flex cursor-pointer flex-col gap-5 rounded-lg border-t border-transparent p-4 transition-all hover:border-zinc-200 hover:bg-zinc-100 hover:dark:border-zinc-800 hover:dark:bg-zinc-900"
    >
      {children}
      <div className="absolute right-6 top-6 hidden group-hover:block">
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
        {role} at {company}
      </Typography.Paragraph>
      <Typography.Paragraph className="text-xs font-semibold uppercase">
        {startDate} — {endDate} · {time}
      </Typography.Paragraph>
    </div>
  );
}

function Content({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Description({ children }: PropsWithChildren) {
  return <Typography.Paragraph>{children}</Typography.Paragraph>;
}

type ResponsibilitiesProps = {
  responsibilities: ExperienceType["responsibilities"];
};

function Responsibilities({ responsibilities }: ResponsibilitiesProps) {
  return (
    <ul className="ml-3 list-disc marker:text-zinc-200 dark:marker:text-zinc-700">
      {responsibilities.map((responsibility) => (
        <li className="pl-1.5" key={responsibility}>
          <Typography.Paragraph className="inline text-sm" extraContrast>
            {responsibility}
          </Typography.Paragraph>
        </li>
      ))}
    </ul>
  );
}

function Footer({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

type LinksProps = {
  links: ExperienceType["links"];
};

function Links({ links }: LinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <TextLink
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <LinkIcon className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />
          {link.label}
        </TextLink>
      ))}
    </div>
  );
}

type StackProps = {
  stack: ExperienceType["stack"];
};

function Stack({ stack }: StackProps) {
  if (!stack || stack.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {stack.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>
  );
}

Experience.Logo = Logo;
Experience.Header = Header;
Experience.Summary = Summary;
Experience.Content = Content;
Experience.Description = Description;
Experience.Responsibilities = Responsibilities;
Experience.Footer = Footer;
Experience.Links = Links;
Experience.Stack = Stack;
