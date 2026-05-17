import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const turkishOnes = [
  "Sıfır", "Bir", "İki", "Üç", "Dört", "Beş", "Altı", "Yedi", "Sekiz", "Dokuz",
];
const turkishTens = [
  "", "On", "Yirmi", "Otuz", "Kırk", "Elli", "Altmış", "Yetmiş", "Seksen", "Doksan",
];

/** Capitalize-case Turkish word for 0–99 (e.g. 12 → "On iki"). Falls back to the digit string. */
export function turkishNumberWord(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 99) return String(n);
  if (n < 10) return turkishOnes[n];
  const t = Math.floor(n / 10);
  const o = n % 10;
  if (o === 0) return turkishTens[t];
  return `${turkishTens[t]} ${turkishOnes[o].toLowerCase()}`;
}
