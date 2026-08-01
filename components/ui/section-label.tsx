import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={`text-sm font-semibold uppercase tracking-wide ${className ?? ""}`}>
      {children}
    </span>
  );
}