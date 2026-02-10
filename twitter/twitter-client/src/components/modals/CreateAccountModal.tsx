"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ModalWrapper } from "./ModalWrapper";
import { ChevronDownIcon } from "@/components/icons";
import {
  emailSchema,
  phoneSchema,
  NAME_MAX_LENGTH,
  NAME_WARNING_THRESHOLD,
  months,
  days,
  years,
} from "@/lib/validation";

interface CreateAccountModalProps {
  onClose: () => void;
}

export function CreateAccountModal({ onClose }: CreateAccountModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [useEmail, setUseEmail] = useState(false);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [contactTouched, setContactTouched] = useState(false);

  const isEmailValid = useMemo(() => {
    if (!contact) return true;
    return emailSchema.safeParse(contact).success;
  }, [contact]);

  const isPhoneValid = useMemo(() => {
    if (!contact) return true;
    return phoneSchema.safeParse(contact).success;
  }, [contact]);

  const isContactValid = useEmail ? isEmailValid : isPhoneValid;

  const isNameValid = name.length <= NAME_MAX_LENGTH;
  const nameLength = name.length;

  const getCounterColor = () => {
    if (nameLength > NAME_MAX_LENGTH) return "#f4212e";
    if (nameLength >= NAME_WARNING_THRESHOLD) return "#ffd400";
    return "#71767b";
  };

  const showContactError = contactTouched && contact && !isContactValid;
  const showNameError = nameTouched && !isNameValid;

  const isFormValid =
    name.trim() &&
    isNameValid &&
    contact.trim() &&
    isContactValid &&
    month &&
    day &&
    year;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex-1 flex flex-col px-20 py-5">
        <h1 className="text-[31px] font-bold text-white mb-7">Create your account</h1>

        {/* name input */}
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
              setContactTouched(false);
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
            <div className="flex-2 relative">
              <label className="absolute left-3 top-2 text-[#71767b] text-xs pointer-events-none">
                Month
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full h-14.5 bg-black border border-[#333639] text-white rounded px-3 pt-5 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] appearance-none cursor-pointer"
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
            <div className="flex-1 relative">
              <label className="absolute left-3 top-2 text-[#71767b] text-xs pointer-events-none">
                Day
              </label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full h-14.5 bg-black border border-[#333639] text-white rounded px-3 pt-5 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] appearance-none cursor-pointer"
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
                className="w-full h-14.5 bg-black border border-[#333639] text-white rounded px-3 pt-5 pb-2 text-[17px] focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0] appearance-none cursor-pointer"
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
          onClick={() => isFormValid && router.push("/home")}
          className={`w-full font-bold py-3 px-4 rounded-full transition-colors mb-6 ${
            isFormValid
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-[#787a7a] text-[#0f1419] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </ModalWrapper>
  );
}
