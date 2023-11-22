import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

export function Typography() {
  throw new Error(
    `<Typography> is not a component, use child components instead: <Typography.Paragraph>...</Typography.Paragraph>`
  );
}

function H1({
  children,
  className,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("text-4xl text-red-600", className)} {...rest}>
      {children}
    </h1>
  );
}

function H2({
  children,
  className,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-2xl", className)} {...rest}>
      {children}
    </h2>
  );
}

function H3({
  children,
  className,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-xl", className)} {...rest}>
      {children}
    </h3>
  );
}

function Paragraph({
  children,
  className,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm", className)} {...rest}>
      {children}
    </p>
  );
}

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.Paragraph = Paragraph;
