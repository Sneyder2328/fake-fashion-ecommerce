"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function FakeDisclaimer() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 z-20 w-full bg-secondaryMain px-4 py-2">
      <div className="inner space-y-2 md:flex md:justify-between md:space-x-4 md:space-y-0">
        <span className="text-secondaryContrast">
          This is a fake e-commerce store built for learning purposes, do not
          try to buy anything here as this is just test data
        </span>
        <button
          className="group flex shrink-0 items-center border border-primaryContrast px-2 text-primaryMain hover:cursor-pointer hover:bg-primaryMain hover:text-secondaryMain"
          onClick={() => setIsOpen(false)}
        >
          I understand{" "}
          <XMarkIcon className="h-5 w-5 text-primaryMain group-hover:text-secondaryMain" />
        </button>
      </div>
    </div>
  );
}
