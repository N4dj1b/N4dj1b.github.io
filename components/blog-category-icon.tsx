import { FileText, Flag, PenLine, ShieldCheck } from "lucide-react";

export function BlogCategoryIcon({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  if (category === "CTF Writeup") return <Flag className={className} />;
  if (category === "Security Research")
    return <ShieldCheck className={className} />;
  if (category === "Notes") return <PenLine className={className} />;

  return <FileText className={className} />;
}
