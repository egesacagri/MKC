"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, error, options, placeholder, className, id, ...props },
    ref
  ) {
    const selectId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[11px] uppercase tracking-[0.18em] text-muted font-medium"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            defaultValue=""
            className={cn(
              "w-full appearance-none bg-transparent border-0 border-b border-foreground/20 px-0 py-3 pr-8 text-base text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer",
              error && "border-red-700/70 focus:border-red-700",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
          />
        </div>
        {error && (
          <span className="text-[11px] text-red-700/90 mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);
