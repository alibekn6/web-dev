import { z } from "zod";

// Email validation schema
export const emailSchema = z.string().email();

// Phone validation schema
export const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
export const phoneSchema = z.string().regex(phoneRegex, "Invalid phone number");

// Name validation constants
export const NAME_MAX_LENGTH = 50;
export const NAME_WARNING_THRESHOLD = 40;

// Date options for forms
export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const days = Array.from({ length: 31 }, (_, i) => i + 1);

const currentYear = new Date().getFullYear();
export const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
