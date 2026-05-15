"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { countries } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function CountryGrid() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {countries.map((c, i) => (
            <motion.article
              key={c.slug}
              id={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-background p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    {c.region}
                  </div>
                  <h2 className="mt-2 font-serif text-4xl md:text-5xl tracking-tight text-foreground">
                    {c.name}
                  </h2>
                </div>
                <span className="font-serif text-xl text-muted/40">
                  {c.code}
                </span>
              </div>

              <p className="mt-6 text-muted leading-relaxed min-h-[3rem]">
                {c.blurb}
              </p>

              <div className="mt-8 pt-6 border-t border-foreground/10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                  Vize Tipleri
                </div>
                <ul className="space-y-2">
                  {c.visaTypes.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-sm text-foreground/85"
                    >
                      <span className="w-1 h-1 rounded-full bg-foreground/40" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex gap-4">
                <Link
                  href={`/ulkeler/${c.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground group/btn"
                >
                  Detaylar
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
                <Link
                  href="/basvur"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground group/btn"
                >
                  Başvuru Yap
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
