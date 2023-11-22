"use client";

import {
  CheckIcon,
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import getThemeFromLocalStorage from "../utils/getThemeFromLocalStorage";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";

function ThemeDropdown() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    getThemeFromLocalStorage(),
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 p-1">
        <div className="flex h-10 items-center rounded-full px-4 font-medium text-white hover:bg-zinc-800">
          <ComputerDesktopIcon className="h-5 w-5 animate-pulse" />
        </div>
      </div>
    );
  }

  const dropdownOptions: Record<Theme, ReactNode> = {
    system: <ComputerDesktopIcon className="h-5 w-5" />,
    light: <SunIcon className="h-5 w-5" />,
    dark: <MoonIcon className="h-5 w-5" />,
  };

  return (
    <DropdownMenu.Root
      modal={false}
      open={isDropdownOpen}
      onOpenChange={(open) => setIsDropdownOpen(open)}
    >
      <DropdownMenu.Trigger className="flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 p-1">
        <div className="flex h-10 items-center rounded-full px-4 font-medium text-white hover:bg-zinc-800">
          {dropdownOptions[currentTheme]}
        </div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {isDropdownOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-1"
              align="end"
              sideOffset={8}
              asChild
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0.35,
                  originY: 0,
                  y: -10,
                }}
                animate={{ opacity: 1, scaleY: 1, originY: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  originY: 0,
                  scaleY: 0.9,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                {Object.keys(dropdownOptions).map((option) => (
                  <DropdownMenu.Item
                    key={option}
                    className="flex h-10 w-40 select-none items-center justify-between gap-8 rounded-md px-2 text-sm font-medium capitalize text-white hover:bg-zinc-800"
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
