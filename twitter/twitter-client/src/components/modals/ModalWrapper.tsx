"use client";

import Image from "next/image";
import { CloseIcon } from "@/components/icons";

interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalWrapper({ onClose, children }: ModalWrapperProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#5b708366] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-black w-full max-w-150 min-h-162.5 rounded-2xl relative flex flex-col">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#eff3f41a] transition-colors"
          >
            <CloseIcon />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/x-logo.svg"
              alt="X"
              width={32}
              height={32}
              style={{ filter: "invert(1)" }}
            />
          </div>
          <div className="w-9"></div>
        </div>

        {children}
      </div>
    </div>
  );
}
