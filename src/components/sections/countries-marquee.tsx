"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { countries } from "@/lib/data";
import { turkishNumberWord } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function CountriesMarquee() {
  // duplicate for seamless infinite loop
  const loop = [...countries, ...countries];

  return (
    <section className="py-24 md:py-32 border-y border-foreground/10 bg-cream-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel>Çalıştığımız Ülkeler</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              {turkishNumberWord(countries.length)} ülke, sınırsız <span className="italic font-light">olasılık</span>.
            </h2>
          </div>
          <Link
            href="/ulkeler"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors"
          >
            Tümünü Gör
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>

      {/* Marquee */}
      <div className="relative overflow-hidden mask-fade py-3 -my-3">
        <div className="flex w-max animate-marquee">
          {loop.map((c, i) => (
            <Link
              key={`${c.slug}-${i}`}
              href={`/ulkeler#${c.slug}`}
              className="group inline-flex items-baseline gap-5 px-8 md:px-12 border-r border-foreground/10"
            >
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground/85 group-hover:text-foreground transition-colors whitespace-nowrap tracking-tight">
                {c.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
                {c.code}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Region grid */}
      <Container className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6"
        >
          {countries.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              href={`/ulkeler#${c.slug}`}
              className="group block"
            >
              <div className="font-serif text-3xl text-foreground group-hover:translate-x-1 transition-transform duration-300">
                {c.name}
              </div>
              <div className="mt-3 h-px bg-foreground/15 group-hover:bg-foreground transition-colors duration-300" />
            </Link>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
