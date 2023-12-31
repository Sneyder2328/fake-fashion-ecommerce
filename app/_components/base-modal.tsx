import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

function ModalTitle({ title, onHide }: { title: string; onHide: () => void }) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-between bg-secondaryMain px-4 text-secondaryContrast">
      <h3 className="uppercase leading-none">{title}</h3>
      <XMarkIcon
        className="h-6 w-6 cursor-pointer leading-none"
        onClick={onHide}
      />
    </div>
  );
}

type Props = {
  title: string;
  isOpen: boolean;
  onHide: () => void;
  children?: React.ReactNode;
};

export function Modal({ isOpen, title, onHide, children }: Props) {
  useEffect(() => {
    // When the modal is open then make whole body page not scrollable to the user can focus on the modal
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <div
      onClick={onHide}
      className={classNames(
        "no-scrollbar fixed left-0 top-0 z-10 m-0 h-screen w-screen overflow-y-scroll bg-gray-400 bg-opacity-60 p-0 transition-all duration-500",
        isOpen ? "block bg-opacity-60" : "invisible bg-opacity-0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          "mx-auto flex h-screen w-10/12 transform flex-col bg-primaryMain transition-transform duration-300 md:mr-0 md:max-w-sm",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        <ModalTitle title={title} onHide={onHide} />
        <div className="grow px-5 py-3">{children}</div>
      </div>
    </div>
  );
}
