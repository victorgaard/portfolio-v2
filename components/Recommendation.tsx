import { cn } from "@utils/cn";
import Image from "next/image";
import { ImgHTMLAttributes, PropsWithChildren } from "react";

export function Recommendation({ children }: PropsWithChildren) {
  return <>{children}</>;
}

type PictureProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

function Picture({ src, className }: PictureProps) {
  return (
    <Image
      src={src}
      alt="avatar"
      width={32}
      height={32}
      className={cn("h-8 w-8", className)}
    />
  );
}

function Name({ children }: PropsWithChildren) {
  return <>{children}</>;
}

function Title({ children }: PropsWithChildren) {
  return <>{children}</>;
}

function Relationship({ children }: PropsWithChildren) {
  return <>{children}</>;
}

function Message({ children }: PropsWithChildren) {
  return <>{children}</>;
}

Recommendation.Name = Name;
Recommendation.Title = Title;
Recommendation.Relationship = Relationship;
Recommendation.Message = Message;
Recommendation.Picture = Picture;
