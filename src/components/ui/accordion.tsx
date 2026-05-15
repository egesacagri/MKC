"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-foreground/15 border-y border-foreground/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                {item.question}
              </span>
              <span
                className={cn(
                  "shrink-0 w-9 h-9 rounded-full border border-foreground/30 flex items-center justify-center transition-all duration-300",
                  isOpen
                    ? "bg-foreground text-cream-100 rotate-45 border-foreground"
                    : "group-hover:border-foreground"
                )}
                aria-hidden
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pr-12 text-muted leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
