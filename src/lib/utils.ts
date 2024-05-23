import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (...args: Parameters<typeof fetch>): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

export function camelCaseToHumanReadable(camelCaseStr: string): string {
  // Step 1: Split the camelCase string into parts at uppercase letters
  const words = camelCaseStr.replace(/([A-Z])/g, " $1").trim();

  // Step 2: Convert the first letter to uppercase and the rest to lowercase
  const humanReadable = words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return humanReadable;
}

export const truncateName = (name: string, size: number) => {
  if (name.length > size) {
    return name.substring(0, size) + "...";
  }
  return name;
};
