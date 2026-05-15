"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, className, id, ...props }, ref) {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] uppercase tracking-[0.18em] text-muted font-medium"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full bg-transparent border-0 border-b border-foreground/20 px-0 py-3 text-base text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors",
            error && "border-red-700/70 focus:border-red-700",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-[11px] text-red-700/90 mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);
