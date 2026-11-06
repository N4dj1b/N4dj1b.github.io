import { format, parseISO } from "date-fns";

export type CategoryStyle = {
  label: string;
  badge: string;
  accent: string;
  gradient: string;
};

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  "CTF Writeup": {
    label: "CTF Writeup",
    badge:
      "text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30",
    accent: "bg-emerald-500",
    gradient: "from-emerald-500/15 via-teal-500/5 to-transparent",
  },
  "Security Research": {
    label: "Security Research",
    badge: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30",
    accent: "bg-blue-500",
    gradient: "from-blue-500/15 via-indigo-500/5 to-transparent",
  },
  "Lab Writeup": {
    label: "Lab Writeup",
    badge:
      "text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30",
    accent: "bg-amber-500",
    gradient: "from-amber-500/15 via-orange-500/5 to-transparent",
  },
  Notes: {
    label: "Notes",
    badge:
      "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30",
    accent: "bg-purple-500",
    gradient: "from-purple-500/15 via-fuchsia-500/5 to-transparent",
  },
};

const FALLBACK_STYLE: CategoryStyle = {
  label: "Post",
  badge: "text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-800",
  accent: "bg-slate-500",
  gradient: "from-slate-500/15 via-slate-500/5 to-transparent",
};

export function getCategoryStyle(category: string): CategoryStyle {
  return CATEGORY_STYLES[category] ?? { ...FALLBACK_STYLE, label: category };
}

export function formatPostDate(date: string, pattern = "MMM d, yyyy"): string {
  if (!date) return "";

  try {
    return format(parseISO(date), pattern);
  } catch {
    return date;
  }
}
