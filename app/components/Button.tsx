import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";
import { cn } from "../utils/cn";

const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
>(({ children, className, onClick, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(
        "flex h-10 items-center rounded-full px-4 font-medium hover:bg-zinc-800",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
