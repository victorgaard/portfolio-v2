import { cn } from "@utils/cn";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { Typography } from "@components/Typography";
import Button from "./Button";

export function Recommendation({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

type HeaderProps = {
  name: string;
  title: string;
  picture: string;
  relationship: string;
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

function Message({ children }: PropsWithChildren) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <Typography.Paragraph
        className={cn("line-clamp-4", {
          "line-clamp-none": isExpanded,
        })}
      >
        &ldquo;{children}&rdquo;
      </Typography.Paragraph>
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "close" : "expand"}
      </Button>
    </div>
  );
}

Recommendation.Header = Header;
Recommendation.Message = Message;
