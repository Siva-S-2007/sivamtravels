import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean; // Add this line
}
export function SectionLabel({ children, className, center }: SectionLabelProps) { // Add 'center' here
  return (
    <span className={`text-sm font-semibold uppercase tracking-wide ${center ? "text-center" : ""} ${className ?? ""}`}> {/* Modify this line */}
      {children}
    </span>
  );
}