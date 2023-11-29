import { PropsWithChildren } from "react";
import { Typography } from "@components/Typography";
import Image from "next/image";
import { format, timeAgo } from "@utils/date";
import { LinkIcon } from "@heroicons/react/24/outline";
import Badge from "./Badge";
import TextLink from "./TextLink";
import { Experience, Experience as ExperienceType } from "@static/types";
export function Experience({ children }: PropsWithChildren) {
  return (
    <div className="group relative -mx-4 flex flex-col gap-3 rounded-lg border-t border-transparent p-4 transition-all">
      {children}
    </div>
  );
}

function Header({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function Logo({ src }: { src: Experience["logo"] }) {
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
  role: Experience["role"];
  company: Experience["company"];
  start: Experience["start"];
  end: Experience["end"];
};

function Summary({ role, company, start, end }: SummaryProps) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;
  const formattedStartDate = format(startDate);
  const formattedEndDate = endDate ? format(endDate) : "present";
  const time = timeAgo(startDate, endDate);

  return (
    <div className="flex flex-col">
      <Typography.Paragraph className="font-semibold" extraContrast>
        {role} at {company}
      </Typography.Paragraph>
      <Typography.Paragraph className="text-xs font-semibold uppercase">
        {formattedStartDate} — {formattedEndDate} · {time}
      </Typography.Paragraph>
    </div>
  );
}

function Content({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Description({ children }: PropsWithChildren) {
  return (
    <Typography.Paragraph className="text-sm">{children}</Typography.Paragraph>
  );
}

type ResponsibilitiesProps = {
  responsibilities: ExperienceType["responsibilities"];
};

function Responsibilities({ responsibilities }: ResponsibilitiesProps) {
  if (!responsibilities || responsibilities.length === 0) return null;

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
  return <div className="flex flex-col gap-4 pt-2">{children}</div>;
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
          href={link.url}
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
        <Badge key={tech} className="text-zinc-700 dark:text-zinc-300">
          {tech}
        </Badge>
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
