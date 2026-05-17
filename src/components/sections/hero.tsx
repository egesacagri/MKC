"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { countries } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-32">
      {/* Soft gradient backdrop */}
      <div className="absolute inset-0 -z-10 noise opacity-60" />
      <div className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-cream-200/50 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-cream-200/40 blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] tracking-tight text-foreground"
            >
              Global Sınırları
              <br />
              <span className="italic font-light">Birlikte</span> Aşıyoruz.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed"
            >
              ABD, Kanada, İngiltere ve Avrupa için profesyonel vize danışmanlığı.
              Süreciniz şeffaf, hızlı ve sonuca odaklı.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/basvur"
                className="group inline-flex items-center justify-center gap-2 bg-foreground text-cream-100 hover:bg-charcoal px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
              >
                Hemen Başvur
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/ulkeler"
                className="group inline-flex items-center justify-center gap-2 border border-foreground/80 text-foreground hover:bg-foreground hover:text-cream-100 px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300"
              >
                <Compass className="w-4 h-4" />
                Ülkeleri Keşfet
              </Link>
            </motion.div>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-foreground/15 flex flex-col gap-8"
          >
            <Stat value="%97" label="Onay Başarı Oranı" />
            <Stat value={String(countries.length)} label="Ülke ve Bölge" />
            <Stat value="2.500+" label="Tamamlanmış Başvuru" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted">
        {label}
      </div>
    </div>
  );
}
