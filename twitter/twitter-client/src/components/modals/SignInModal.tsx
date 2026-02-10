"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ModalWrapper } from "./ModalWrapper";
import { GoogleIcon, AppleIcon } from "@/components/icons";

interface SignInModalProps {
  onClose: () => void;
}

export function SignInModal({ onClose }: SignInModalProps) {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex-1 flex flex-col px-20 py-5">
        <h1 className="text-[31px] font-bold text-white mb-7">Sign in to X</h1>

        <div className="flex flex-col gap-5 mb-3">
          <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-medium py-2.5 px-4 rounded-full hover:bg-gray-200 transition-colors">
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-2.5 px-4 rounded-full hover:bg-gray-200 transition-colors">
            <AppleIcon />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className="flex items-center gap-2 my-3">
          <div className="flex-1 h-px bg-[#2f3336]"></div>
          <span className="text-white text-sm">or</span>
          <div className="flex-1 h-px bg-[#2f3336]"></div>
        </div>

        <div className="mt-3 mb-6">
          <div className="relative">
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder=" "
              className="peer w-full bg-black border border-[#333639] rounded text-white px-3 pt-6 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] transition-colors"
            />
            <label className="absolute left-3 top-4 text-[#71767b] text-[17px] transition-all duration-150 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#1d9bf0] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
              Phone, email, or username
            </label>
          </div>
        </div>

        <div className="mt-3 mb-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="peer w-full bg-black border border-[#333639] rounded text-white px-3 pt-6 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] transition-colors"
            />
            <label className="absolute left-3 top-4 text-[#71767b] text-[17px] transition-all duration-150 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#1d9bf0] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
              Password
            </label>
          </div>
        </div>

        <button 
          onClick={() => router.push("/home")}
          className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-200 transition-colors mb-6"
        >
          Sign in
        </button>

        <button className="w-full border border-[#536471] text-white font-bold py-3 px-4 rounded-full hover:bg-[#eff3f41a] transition-colors">
          Forgot password?
        </button>

        <p className="text-[#71767b] text-[15px] mt-10">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#1d9bf0] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </ModalWrapper>
  );
}
