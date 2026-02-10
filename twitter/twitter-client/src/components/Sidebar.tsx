"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { XLogo, HomeIcon, SearchIcon, UserIcon, MoreIcon } from "./icons";
import { currentUser } from "@/data/mockData";
import { ComposeModal } from "./modals/ComposeModal";

interface NavItem {
  name: string;
  href: string;
  icon: React.FC<{ className?: string; filled?: boolean }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "Explore", href: "/explore", icon: SearchIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [showComposeModal, setShowComposeModal] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-68.75 flex flex-col justify-between border-r border-x-border px-3 py-2">
      <div className="flex flex-col">
        <Link
          href="/home"
          className="p-3 rounded-full hover:bg-white/10 transition-colors w-fit"
        >
          <XLogo className="w-7 h-7" />
        </Link>

        <nav className="mt-1 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-5 px-3 py-3 rounded-full hover:bg-white/10 transition-colors group"
              >
                <item.icon
                  className="w-7 h-7"
                  filled={isActive}
                />
                <span
                  className={`text-xl ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <button 
          onClick={() => setShowComposeModal(true)}
          className="mt-4 w-full bg-x-blue hover:bg-x-blue/90 text-white font-bold py-3 px-4 rounded-full transition-colors"
        >
          Post
        </button>
      </div>

      <div className="mb-3">
        <button className="flex items-center gap-3 p-3 rounded-full hover:bg-white/10 transition-colors w-full">
          <Image
            src={currentUser.avatar}
            alt={currentUser.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full bg-x-gray"
          />
          <div className="flex-1 text-left hidden xl:block">
            <p className="font-bold text-sm leading-tight">{currentUser.name}</p>
            <p className="text-x-gray text-sm leading-tight">
              @{currentUser.username}
            </p>
          </div>
          <MoreIcon className="w-5 h-5 text-x-gray hidden xl:block" />
        </button>
      </div>

      {showComposeModal && (
        <ComposeModal onClose={() => setShowComposeModal(false)} />
      )}
    </aside>
  );
}
