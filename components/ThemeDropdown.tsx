"use client";

import {
    CheckIcon,
    MoonIcon,
    SunIcon,
    ComputerDesktopIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import getThemeFromLocalStorage from "utils/getThemeFromLocalStorage";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "utils/cn";

export type Theme = "system" | "light" | "dark";

function ThemeDropdown() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    getThemeFromLocalStorage(),
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  const dropdownOptions: Record<Theme, ReactNode> = {
    system: <ComputerDesktopIcon className="h-5 w-5" />,
    light: <SunIcon className="h-5 w-5" />,
    dark: <MoonIcon className="h-5 w-5" />,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="h-10 w-[52px] animate-pulse rounded-full bg-zinc-50 px-4 dark:bg-zinc-900/50" />
      </div>
    );
  }

  return (
    <DropdownMenu.Root
      modal={false}
      open={isDropdownOpen}
      onOpenChange={(open) => setIsDropdownOpen(open)}
    >
      <DropdownMenu.Trigger className="flex items-center justify-center rounded-full border border-zinc-200 bg-white p-1 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="relative flex h-10 flex-col items-center justify-center overflow-hidden rounded-full px-4 font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800">
          <div
            className={cn("translate-y-1/2 opacity-100 transition-transform", {
              "-translate-y-full opacity-50": isDropdownOpen,
            })}
          >
            {dropdownOptions[currentTheme]}
          </div>
          <ChevronDownIcon
            className={cn(
              "h-5 w-5 translate-y-full opacity-50 transition-transform",
              {
                "-translate-y-1/2 opacity-100": isDropdownOpen,
              },
            )}
          />
        </div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {isDropdownOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              className="rounded-xl border border-zinc-200 bg-white p-1 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              sideOffset={8}
              align="start"
              side="top"
              asChild
              loop
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0.45,
                  originY: 1.35,
                  y: 5,
                }}
                animate={{ opacity: 1, scaleY: 1, originY: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  originY: 1,
                  scaleY: 0.9,
                  y: 5,
                  transition: { duration: 0.2 },
                }}
              >
                {Object.keys(dropdownOptions).map((option) => (
                  <DropdownMenu.Item
                    key={option}
                    className="flex h-10 w-40 select-none items-center justify-between gap-8 rounded-md px-2 text-sm font-medium capitalize text-zinc-900 hover:bg-zinc-100 hover:focus-visible:outline-none hover:focus-visible:ring-0 dark:text-white dark:hover:bg-zinc-800"
                    onClick={() => {
                      setCurrentTheme(option as Theme);
                      setTheme(option);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-zinc-400">
                        {dropdownOptions[option as Theme]}
                      </span>
                      {option}
                    </span>
                    {currentTheme === option && (
                      <CheckIcon className="h-5 w-5 shrink-0 animate-fade-in-long text-zinc-400" />
                    )}
                  </DropdownMenu.Item>
                ))}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}

export default ThemeDropdown;
