"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignInModal, CreateAccountModal } from "@/components/modals";

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
            className="w-full bg-[#1d9bf0] text-white font-bold py-2.5 px-4 rounded-full hover:bg-[#1a8cd8] transition-colors mb-2"
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

      <footer className="fixed bottom-0 left-0 right-0 bg-black py-4">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-4 text-[13px] text-[#71767b]">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/download" className="hover:underline">Download the X app</Link>
          <Link href="/grok" className="hover:underline">Grok</Link>
          <Link href="/help" className="hover:underline">Help Center</Link>
          <Link href="/tos" className="hover:underline">Terms of Service</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
          <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          <Link href="/ads" className="hover:underline">Ads info</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/careers" className="hover:underline">Careers</Link>
          <Link href="/brand" className="hover:underline">Brand Resources</Link>
          <Link href="/advertising" className="hover:underline">Advertising</Link>
          <Link href="/marketing" className="hover:underline">Marketing</Link>
          <Link href="/business" className="hover:underline">X for Business</Link>
          <Link href="/developers" className="hover:underline">Developers</Link>
          <Link href="/news" className="hover:underline">News</Link>
          <Link href="/settings" className="hover:underline">Settings</Link>
          <span>&copy; 2026 X Corp.</span>
        </nav>
      </footer>

      {/* Sign In Modal */}
      {showSignInModal && (
        <SignInModal onClose={() => setShowSignInModal(false)} />
      )}

      {/* Create Account Modal */}
      {showCreateAccountModal && (
        <CreateAccountModal onClose={() => setShowCreateAccountModal(false)} />
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  );
}
