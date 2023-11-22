"use client";

import { useState } from "react";

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return { isOpen, open, close, toggle };
}

export default useIsOpen;
