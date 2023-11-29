import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import GithubIcon from "@icons/GithubIcon";
import LinkedInIcon from "@icons/LinkedInIcon";
import Tooltip from "@components/Tooltip";
import ThemeDropdown from "@components/ThemeDropdown";

function Socials() {
  return (
    <footer className="flex items-center justify-between lg:justify-normal lg:gap-5">
      <ThemeDropdown />
      <div className="flex items-center gap-8 lg:gap-5">
        <a
          href="https://github.com/victorgaard"
          target="_blank"
          rel="noreferrer"
          className="relative"
        >
          <GithubIcon className="peer text-zinc-600 transition-all hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-white" />
          <Tooltip>Github profile</Tooltip>
        </a>
        <a
          href="https://www.linkedin.com/in/victor-ferreira-santos/"
          target="_blank"
          rel="noreferrer"
          className="relative"
        >
          <LinkedInIcon className="peer text-zinc-600 transition-all hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-white" />
          <Tooltip>LinkedIn profile</Tooltip>
        </a>
      </div>
    </footer>
  );
}

export default Socials;
