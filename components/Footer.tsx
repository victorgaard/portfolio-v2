import TextLink from "@components/TextLink";
import GithubIcon from "@icons/GithubIcon";
import { ClockIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Typography } from "@components/Typography";

function Footer() {
  return (
    <footer className="flex flex-col gap-10 pt-20 lg:pt-24">
      <Typography.Paragraph>
        Designed and coded by yours truly. Built with{" "}
        <TextLink href="https://nextjs.org/docs">
          Next.js (app directory)
        </TextLink>
        , <TextLink href="https://react.dev/">React</TextLink>,{" "}
        <TextLink href="https://www.typescriptlang.org/">Typescript</TextLink>,{" "}
        and <TextLink href="https://tailwindcss.com/docs">Tailwind</TextLink>.
        All code is open source.
      </Typography.Paragraph>
      <div className="hidden flex-col gap-4 lg:flex">
        <Typography.Small>
          <ClockIcon className="h-3 w-3" />
          Time machine
        </Typography.Small>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <Typography.Paragraph>Portfolio v1</Typography.Paragraph>
            <div className="flex items-center gap-6">
              <TextLink
                href="https://v1.victorsantos.work"
                className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400"
              >
                <LinkIcon className="h-3 w-3" /> Live
              </TextLink>
              <TextLink
                href="https://github.com/victorgaard/portfolio"
                className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </TextLink>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <Typography.Paragraph extraContrast>
              Portfolio v2 (you are here)
            </Typography.Paragraph>
            <TextLink
              href="https://github.com/victorgaard/portfolio-v2"
              className="flex items-center gap-1.5"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </TextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
