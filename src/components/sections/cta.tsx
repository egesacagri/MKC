"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-foreground text-cream-100 px-8 py-20 md:px-20 md:py-28 lg:py-32"
        >
          <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-cream-100/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-[480px] h-[480px] rounded-full bg-cream-100/[0.03] blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-cream-100/60 mb-6">
              <span className="h-px w-10 bg-cream-100/40" />
              <span>Sıradaki Adım</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Vize sürecinizi <br />
              başlatmak için <span className="italic font-light">hazır mısınız?</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-cream-100/75 max-w-xl leading-relaxed">
              15 dakikalık ücretsiz ön görüşme ile dosyanızı değerlendirelim,
              size en uygun ülke ve vize tipini birlikte belirleyelim.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/basvur"
                className="group inline-flex items-center justify-center gap-2 bg-cream-100 text-foreground hover:bg-background px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300"
              >
                Başvuruyu Başlat
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 border border-cream-100/40 text-cream-100 hover:bg-cream-100 hover:text-foreground px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300"
              >
                Bizimle İletişime Geç
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
