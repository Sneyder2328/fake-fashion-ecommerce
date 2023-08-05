import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  isOpen: boolean;
  onHide: () => void;
  children?: React.ReactNode;
};
export function Modal({ isOpen, title, onHide, children }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onHide}
      className="no-scrollbar fixed left-0 top-0 z-10 m-0 h-screen w-screen overflow-y-scroll bg-gray-400 bg-opacity-60 p-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 flex h-screen min-w-[380px] lg:max-w-md flex-col bg-white"
      >
        <div className="flex h-12 items-center justify-between bg-black px-4 text-white shrink-0">
          <h3 className="uppercase leading-none">{title}</h3>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer leading-none"
            onClick={onHide}
          />
        </div>
        <div className="grow px-5 py-3">{children}</div>
      </div>
    </div>
  );
}
