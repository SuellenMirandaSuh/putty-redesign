import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface SiteColumnProps {
  children: ReactNode;
  wide?: boolean;
  className?: string;
  as?: ElementType;
}

export function siteColumnClass(wide = false, className?: string) {
  return cn(
    "mx-auto w-full px-4 sm:px-6",
    wide ? "max-w-6xl" : "max-w-3xl",
    className
  );
}

export default function SiteColumn({
  children,
  wide = false,
  className,
  as: Tag = "div",
}: SiteColumnProps) {
  return <Tag className={siteColumnClass(wide, className)}>{children}</Tag>;
}
