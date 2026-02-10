"use client";

import { useState } from "react";
import { CloseIcon, ImageIcon, GifIcon, EmojiIcon } from "../icons";
import { currentUser } from "@/data/mockData";
import Image from "next/image";

interface ComposeModalProps {
  onClose: () => void;
}

export function ComposeModal({ onClose }: ComposeModalProps) {
  const [text, setText] = useState("");

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePost = () => {
    console.log("Posting:", text);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#5b708366] flex items-start justify-center z-50 pt-12"
      onClick={handleBackdropClick}
    >
      <div className="bg-black w-full max-w-150 rounded-2xl relative">
        <div className="flex items-center p-4 border-b border-x-border">
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-4">
          <div className="flex gap-3">
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full bg-x-gray shrink-0"
            />
            <div className="flex-1">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What is happening?!"
                className="w-full bg-transparent text-xl placeholder-x-gray outline-none resize-none min-h-30"
                autoFocus
              />


              <div className="flex items-center justify-between border-t border-x-border pt-3 mt-3">
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-full hover:bg-x-blue/10 transition-colors">
                    <ImageIcon className="w-5 h-5 text-x-blue" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-x-blue/10 transition-colors">
                    <GifIcon className="w-5 h-5 text-x-blue" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-x-blue/10 transition-colors">
                    <EmojiIcon className="w-5 h-5 text-x-blue" />
                  </button>
                </div>
                <button
                  onClick={handlePost}
                  disabled={!text.trim()}
                  className={`font-bold px-4 py-1.5 rounded-full transition-colors ${
                    text.trim()
                      ? "bg-x-blue hover:bg-x-blue/90 text-white"
                      : "bg-x-blue/50 text-white/50 cursor-not-allowed"
                  }`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
