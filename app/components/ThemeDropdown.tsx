"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function ThemeDropdown() {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 p-1">
        <div className="flex h-10 items-center rounded-full px-4 font-medium hover:bg-zinc-800">
          <ComputerDesktopIcon className="h-5 w-5" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded-xl border border-zinc-800 p-1"
          align="end"
          sideOffset={8}
        >
          <DropdownMenu.Item className="flex items-center gap-2">
            <ComputerDesktopIcon className="h-5 w-5" /> System
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex items-center gap-2">
            <SunIcon className="h-5 w-5" /> Light
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex items-center gap-2">
            <MoonIcon className="h-5 w-5" /> Dark
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default ThemeDropdown;
