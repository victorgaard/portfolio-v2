import { Link as TLink, LinkType, Project } from "@static/types";
import { cn } from "@utils/cn";
import Image from "next/image";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import TextLink from "./TextLink";
import GithubIcon from "@icons/GithubIcon";
import { LinkIcon } from "@heroicons/react/24/outline";
import ProductHuntIcon from "@icons/ProductHuntIcon";
import Badge from "./Badge";
import { Typography } from "./Typography";
import { StarIcon } from "@heroicons/react/20/solid";

type ProjectProps = PropsWithChildren & {
  url: Project["url"];
};

export function Project({ children, url }: ProjectProps) {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className={cn(
        "group relative -mx-4 flex flex-col gap-3 rounded-lg border-t border-transparent p-4 transition-all",
        {
          "cursor-pointer hover:bg-zinc-200/50 hover:dark:border-zinc-800 hover:dark:bg-zinc-900":
            url,
        },
      )}
    >
      {children}
    </div>
  );
}

function Main({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function Picture({ picture }: { picture: Project["picture"] }) {
  return (
    <Image
      src={picture}
      alt="project"
      width={144}
      height={144}
      className="h-36 w-36 rounded-2xl border-2 border-zinc-200 transition-all dark:border-zinc-800 group-hover:dark:border-zinc-700"
    />
  );
}

function Content({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

type InfoProps = {
  title: Project["title"];
  description: Project["description"];
};

function Info({ title, description }: InfoProps) {
  return (
    <div>
      <Typography.Paragraph className="font-semibold" extraContrast>
        {title}
      </Typography.Paragraph>
      <Typography.Paragraph className="text-sm">
        {description}
      </Typography.Paragraph>
    </div>
  );
}

function Link({ link, repo }: { link: TLink; repo: Project["github_repo"] }) {
  const [stars, setStars] = useState();

  useEffect(() => {
    if (link.type === "star" && repo) {
      const github = "https://api.github.com/repos/";
      const splittedRepo = repo.split("/");
      const formattedRepo = splittedRepo.at(-2) + "/" + splittedRepo.at(-1);
      const url = github + formattedRepo;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setStars(data.stargazers_count));
    }
  }, [link.type, repo]);

  const linksIconMap: Record<LinkType, ReactNode> = {
    github: <GithubIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />,
    link: <LinkIcon className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />,
    star: <StarIcon className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" />,
    productHunt: (
      <ProductHuntIcon className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" />
    ),
  };

  return (
    <TextLink
      key={link.label}
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 text-sm"
      onClick={(e) => e.stopPropagation()}
    >
      {linksIconMap[link.type]}
      {stars || link.label}
    </TextLink>
  );
}

function Links({
  links,
  repo,
}: {
  links: Project["links"];
  repo: Project["github_repo"];
}) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <Link key={link.label} link={link} repo={repo} />
      ))}
    </div>
  );
}

function Stack({ stack }: { stack: Project["stack"] }) {
  if (!stack || stack.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {stack.map((tech) => (
        <Badge
          key={tech}
          className="text-zinc-700 group-hover:bg-zinc-300
      dark:text-zinc-300 group-hover:dark:bg-zinc-800 group-hover:dark:text-white"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}

Project.Main = Main;
Project.Picture = Picture;
Project.Content = Content;
Project.Info = Info;
Project.Links = Links;
Project.Stack = Stack;
