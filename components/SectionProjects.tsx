"use client";

import Section from "@components/Section";
import { projects } from "@static/global";
import Image from "next/image";
import { Typography } from "./Typography";
import Badge from "./Badge";
import { cn } from "@utils/cn";
import TextLink from "./TextLink";
import { LinkIcon } from "@heroicons/react/24/outline";
import { LinkType } from "@static/types";
import { ReactNode } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import GithubIcon from "@icons/GithubIcon";

function SectionProjects() {
  const linksIconMap: Record<LinkType, ReactNode> = {
    github: <GithubIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />,
    link: <LinkIcon className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />,
    star: <StarIcon className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />,
  };

  return (
    <Section id="projects" title="🚀 sideProjects();">
      {projects.map((project) => (
        <div
          onClick={() => window.open(project.url, "_blank")}
          key={project.title}
          className={cn(
            "group relative -mx-4 flex flex-col gap-4 rounded-lg border-t border-transparent p-4 transition-all",
            {
              "cursor-pointer hover:bg-zinc-200/50 hover:dark:border-zinc-800 hover:dark:bg-zinc-900":
                project.url,
            },
          )}
        >
          <div className="flex items-center gap-5">
            <Image
              src={project.picture}
              alt="project"
              width={144}
              height={144}
              className="h-36 w-36 rounded-2xl"
            />
            <div className="flex flex-col gap-3">
              <div>
                <Typography.Paragraph className="font-semibold" extraContrast>
                  {project.title}
                </Typography.Paragraph>
                <Typography.Paragraph className="text-sm">
                  {project.description}
                </Typography.Paragraph>
              </div>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <TextLink
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {linksIconMap[link.type]}
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                className="text-zinc-700 group-hover:bg-zinc-300
                  dark:text-zinc-300 group-hover:dark:bg-zinc-800 group-hover:dark:text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

export default SectionProjects;
