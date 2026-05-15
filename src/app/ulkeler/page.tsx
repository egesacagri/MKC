import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CountryGrid } from "./country-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Ülkeler",
  description:
    "ABD, Kanada, İngiltere, Almanya, Portekiz, Hollanda ve Fransa için sunduğumuz vize danışmanlığı hizmetleri.",
};

export default function UlkelerPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>Çalıştığımız Bölgeler</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Yedi ülke,
            <br />
            <span className="italic font-light">sayısız </span>destinasyon.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Her ülkenin kendine özgü başvuru dinamikleri vardır. MKC Visa olarak
            yedi farklı ülke için derinlemesine uzmanlık sunuyoruz.
          </p>
        </Container>
      </section>

      <CountryGrid />
      <CTA />
    </>
  );
}
