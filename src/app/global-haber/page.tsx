import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { articles } from "@/lib/data";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Global Haber",
  description:
    "Vize süreçleri, konsolosluk güncellemeleri ve global hareketlilik üzerine MKC Visa editörlüğünde hazırlanan içerikler.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function GlobalHaberPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>Global Haber</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Sınırların
            <br />
            <span className="italic font-light">değişen </span>gündemi.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Konsolosluk duyuruları, vize politikası değişiklikleri ve uluslararası
            mobilite gündemine dair MKC Visa editörlüğünde hazırlanan içerikler.
          </p>
        </Container>
      </section>

      {/* Featured */}
      <section className="pb-16 md:pb-20">
        <Container>
          <Link
            href="#"
            className="group block border-y border-foreground/15 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            <div className="lg:col-span-3 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Öne Çıkan
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                {featured.category} · {formatDate(featured.date)}
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-foreground group-hover:opacity-70 transition-opacity">
                {featured.title}
              </h2>
              <p className="mt-6 text-muted text-lg max-w-3xl leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground">
                Yazıyı Oku · {featured.readingTime}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Rest */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href="#"
                className="group bg-background p-8 md:p-10 flex flex-col gap-6 hover:bg-cream-50 transition-colors duration-500"
              >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-muted">
                  <span>{a.category}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  <span>{formatDate(a.date)}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl leading-snug tracking-tight text-foreground">
                  {a.title}
                </h3>
                <p className="text-muted leading-relaxed flex-1">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground">
                  Devamını Oku · {a.readingTime}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
