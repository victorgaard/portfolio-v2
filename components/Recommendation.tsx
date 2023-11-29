import { cn } from "@utils/cn";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { Typography } from "@components/Typography";
import TextLink from "./TextLink";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Recommendation } from "@static/types";

type RecommendationProps = PropsWithChildren & { id: number };
export function Recommendation({ children, id }: RecommendationProps) {
  return (
    <div
      id={`recommendation-${id}`}
      className="group flex flex-col gap-3 pt-12"
    >
      {children}
    </div>
  );
}

type HeaderProps = {
  name: Recommendation["name"];
  title: Recommendation["title"];
  picture: Recommendation["picture"];
  relationship: Recommendation["relationship"];
};

function Header({ name, title, picture, relationship }: HeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={picture}
        alt="avatar"
        width={56}
        height={56}
        className="h-14 w-14 rounded-full"
      />
      <div>
        <Typography.Paragraph className="font-semibold" extraContrast>
          {name}
        </Typography.Paragraph>
        <Typography.Paragraph className="text-sm" extraContrast>
          {title}
        </Typography.Paragraph>
        <Typography.Paragraph className="text-sm">
          {relationship}
        </Typography.Paragraph>
      </div>
    </div>
  );
}

type MessageProps = PropsWithChildren & { id: number };

function Message({ children, id }: MessageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="group flex flex-col gap-2">
      <a href={`#recommendation-${id}`} className="cursor-text">
        <Typography.Paragraph
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn("line-clamp-4", {
            "line-clamp-none text-zinc-700 dark:text-zinc-300": isExpanded,
          })}
        >
          &ldquo;{children}&rdquo;
        </Typography.Paragraph>
      </a>
      <TextLink
        href={`#recommendation-${id}`}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 decoration-2 group-hover:underline group-hover:underline-offset-4"
      >
        {isExpanded ? (
          <>
            <MinusIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            Close
          </>
        ) : (
          <>
            <PlusIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            Read more...
          </>
        )}
      </TextLink>
    </div>
  );
}

Recommendation.Header = Header;
Recommendation.Message = Message;
