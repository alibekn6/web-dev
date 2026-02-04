"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { z } from "zod";

// ============ Validation Schemas ============

const emailSchema = z.string().email();

// Simple phone validation - accepts formats like: +1234567890, 123-456-7890, (123) 456-7890, etc.
const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
const phoneSchema = z.string().regex(phoneRegex, "Invalid phone number");

// ============ Constants ============

const NAME_MAX_LENGTH = 50;
const NAME_WARNING_THRESHOLD = 40;

// ============ Icons ============

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[#eff3f4]">
      <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
    </svg>
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`text-[#71767b] ${className || ""}`}>
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

// ============ Sign In Modal ============

interface SignInModalProps {
  onClose: () => void;
}

export function SignInModal({ onClose }: SignInModalProps) {
  const [identifier, setIdentifier] = useState("");

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
      <div className="bg-black w-full max-w-[600px] min-h-[650px] rounded-2xl relative flex flex-col">
        {/* Header */}
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

        {/* Content */}
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
                type="text"
                placeholder=" "
                className="peer w-full bg-black border border-[#333639] rounded text-white px-3 pt-6 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] transition-colors"
              />
              <label className="absolute left-3 top-4 text-[#71767b] text-[17px] transition-all duration-150 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#1d9bf0] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                password
              </label>
            </div>
          </div>

          <button className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-200 transition-colors mb-6">
            Next
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
      </div>
    </div>
  );
}

// ============ Create Account Modal ============

interface CreateAccountModalProps {
  onClose: () => void;
}

// Generate month options
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Generate day options (1-31)
const days = Array.from({ length: 31 }, (_, i) => i + 1);

// Generate year options (current year back to 1900)
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

export function CreateAccountModal({ onClose }: CreateAccountModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [useEmail, setUseEmail] = useState(false);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  // Validation state - track if field has been touched (blurred)
  const [nameTouched, setNameTouched] = useState(false);
  const [contactTouched, setContactTouched] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Validation logic
  const isEmailValid = useMemo(() => {
    if (!contact) return true; // Empty is not invalid (just incomplete)
    return emailSchema.safeParse(contact).success;
  }, [contact]);

  const isPhoneValid = useMemo(() => {
    if (!contact) return true; // Empty is not invalid (just incomplete)
    return phoneSchema.safeParse(contact).success;
  }, [contact]);

  const isContactValid = useEmail ? isEmailValid : isPhoneValid;

  const isNameValid = name.length <= NAME_MAX_LENGTH;
  const nameLength = name.length;

  // Determine counter color based on character count
  const getCounterColor = () => {
    if (nameLength > NAME_MAX_LENGTH) return "#f4212e"; // Red - over limit
    if (nameLength >= NAME_WARNING_THRESHOLD) return "#ffd400"; // Yellow - approaching limit
    return "#71767b"; // Gray - normal
  };

  // Show contact error only when touched and invalid
  const showContactError = contactTouched && contact && !isContactValid;

  // Show name error only when touched and over limit
  const showNameError = nameTouched && !isNameValid;

  // Form is valid when all fields are filled and valid
  const isFormValid =
    name.trim() &&
    isNameValid &&
    contact.trim() &&
    isContactValid &&
    month &&
    day &&
    year;

  // Handle name input change with max length enforcement
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow typing but track if over limit
    setName(value);
  };

  return (
    <div
      className="fixed inset-0 bg-[#5b708366] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-black w-full max-w-[600px] min-h-[650px] rounded-2xl relative flex flex-col">
        {/* Header */}
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

        {/* Content */}
        <div className="flex-1 flex flex-col px-20 py-5">
          <h1 className="text-[31px] font-bold text-white mb-7">Create your account</h1>

          {/* Name Input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={() => setNameTouched(true)}
                placeholder=" "
                className={`peer w-full bg-black border rounded text-white px-3 pt-6 pb-2 text-[17px] focus:outline-none transition-colors ${
                  showNameError
                    ? "border-[#f4212e] focus:border-[#f4212e] focus:ring-1 focus:ring-[#f4212e]"
                    : "border-[#333639] focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0]"
                }`}
              />
              <label className={`absolute left-3 top-4 text-[17px] transition-all duration-150 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs ${
                showNameError
                  ? "text-[#f4212e] peer-focus:text-[#f4212e]"
                  : "text-[#71767b] peer-focus:text-[#1d9bf0]"
              }`}>
                Name
              </label>
              {/* Character Counter */}
              <span
                className="absolute right-3 top-2 text-xs transition-colors"
                style={{ color: getCounterColor() }}
              >
                {nameLength} / {NAME_MAX_LENGTH}
              </span>
            </div>
          </div>

          {/* Phone/Email Input */}
          <div className="mb-3">
            <div className="relative">
              <input
                type={useEmail ? "email" : "tel"}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                onBlur={() => setContactTouched(true)}
                placeholder=" "
                className={`peer w-full bg-black border rounded text-white px-3 pt-6 pb-2 text-[17px] focus:outline-none transition-colors ${
                  showContactError
                    ? "border-[#f4212e] focus:border-[#f4212e] focus:ring-1 focus:ring-[#f4212e]"
                    : "border-[#333639] focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0]"
                }`}
              />
              <label className={`absolute left-3 top-4 text-[17px] transition-all duration-150 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs ${
                showContactError
                  ? "text-[#f4212e] peer-focus:text-[#f4212e]"
                  : "text-[#71767b] peer-focus:text-[#1d9bf0]"
              }`}>
                {useEmail ? "Email" : "Phone"}
              </label>
            </div>
            {/* Error message for contact field */}
            {showContactError && (
              <p className="text-[#f4212e] text-xs mt-1 ml-1">
                {useEmail ? "Please enter a valid email address." : "Please enter a valid phone number."}
              </p>
            )}
          </div>

          {/* Toggle Phone/Email Link */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => {
                setUseEmail(!useEmail);
                setContact("");
                setContactTouched(false); // Reset touched state when switching
              }}
              className="text-[#1d9bf0] text-[15px] hover:underline"
            >
              {useEmail ? "Use phone instead" : "Use email instead"}
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-white text-[15px] font-bold mb-2">Date of birth</h2>
            <p className="text-[#71767b] text-[14px] leading-5 mb-4">
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </p>

            <div className="flex gap-3">
              {/* Month Select */}
              <div className="flex-[2] relative">
                <label className="absolute left-3 top-2 text-[#71767b] text-xs pointer-events-none">
                  Month
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full h-[58px] bg-black border border-[#333639] text-white rounded px-3 pt-5 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] appearance-none cursor-pointer"
                >
                  <option value="" disabled></option>
                  {months.map((m, index) => (
                    <option key={m} value={String(index + 1)}>
                      {m}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Day Select */}
              <div className="flex-[1] relative">
                <label className="absolute left-3 top-2 text-[#71767b] text-xs pointer-events-none">
                  Day
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full h-[58px] bg-black border border-[#333639] text-white rounded px-3 pt-5 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] appearance-none cursor-pointer"
                >
                  <option value="" disabled></option>
                  {days.map((d) => (
                    <option key={d} value={String(d)}>
                      {d}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Year Select */}
              <div className="flex-[1.2] relative">
                <label className="absolute left-3 top-2 text-[#71767b] text-xs pointer-events-none">
                  Year
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full h-[58px] bg-black border border-[#333639] text-white rounded px-3 pt-5 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] appearance-none cursor-pointer"
                >
                  <option value="" disabled></option>
                  {years.map((y) => (
                    <option key={y} value={String(y)}>
                      {y}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1"></div>

          {/* Next Button */}
          <button
            disabled={!isFormValid}
            className={`w-full font-bold py-3 px-4 rounded-full transition-colors mb-6 ${
              isFormValid
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#787a7a] text-[#0f1419] cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
