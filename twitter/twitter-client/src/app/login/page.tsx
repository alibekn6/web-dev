"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignInModal, CreateAccountModal } from "@/components/modals";
import { GoogleIcon, AppleIcon } from "@/components/icons";

export default function LoginPage() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-black">
      <div className="hidden lg:flex lg:w-[55%] items-center justify-center">
        <Image
          src="/x-logo.svg"
          alt="X"
          width={380}
          height={380}
          className="text-white"
          style={{ filter: "invert(1)" }}
          priority
        />
      </div>

      <div className="flex flex-col justify-center w-full lg:w-[45%] px-8 py-12 lg:pr-20">
        <div className="lg:hidden mb-8">
          <Image
            src="/x-logo.svg"
            alt="X"
            width={50}
            height={50}
            style={{ filter: "invert(1)" }}
            priority
          />
        </div>

        <div className="max-w-95">
          <h1 className="text-[55px] font-bold text-white leading-tight tracking-tight mb-10">
            Happening now
          </h1>

          <h2 className="text-[31px] font-bold text-white mb-8">
            Join today.
          </h2>

          <div className="flex flex-col gap-3 mb-3">
            <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-medium py-2.5 px-4 rounded-full hover:bg-gray-100 transition-colors">
              <GoogleIcon />
              <span>Sign up with Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-2.5 px-4 rounded-full hover:bg-gray-100 transition-colors">
              <AppleIcon />
              <span>Sign up with Apple</span>
            </button>
          </div>

          <div className="flex items-center gap-2 my-3">
            <div className="flex-1 h-px bg-[#2f3336]"></div>
            <span className="text-white text-sm">or</span>
            <div className="flex-1 h-px bg-[#2f3336]"></div>
          </div>

          <button
            onClick={() => setShowCreateAccountModal(true)}
            className="w-full bg-white text-[#2f3336] font-bold py-2.5 px-4 rounded-full hover:bg-[#dfdfdf] transition-colors mb-2"
          >
            Create account
          </button>

          <p className="text-[11px] text-[#71767b] leading-4 mb-12">
            By signing up, you agree to the{" "}
            <Link href="/tos" className="text-[#1d9bf0] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#1d9bf0] hover:underline">
              Privacy Policy
            </Link>
            , including{" "}
            <Link href="/cookies" className="text-[#1d9bf0] hover:underline">
              Cookie Use
            </Link>
            .
          </p>

          <h3 className="text-[17px] font-bold text-white mb-5">
            Already have an account?
          </h3>

          <button
            onClick={() => setShowSignInModal(true)}
            className="w-full border border-[#536471] text-[#1d9bf0] font-bold py-2.5 px-4 rounded-full hover:bg-[#1d9bf0]/10 transition-colors mb-3"
          >
            Sign in
          </button>

          <a
            href="https://grok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-[#536471] text-white font-bold py-2.5 px-4 rounded-full hover:bg-[#1d9bf0]/10 transition-colors mb-3 flex items-center justify-center"
          >
            Get Grok
          </a>
        </div>
      </div>

      {showSignInModal && (
        <SignInModal onClose={() => setShowSignInModal(false)} />
      )}

      {showCreateAccountModal && (
        <CreateAccountModal onClose={() => setShowCreateAccountModal(false)} />
      )}
    </div>
  );
}
