import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CountryGrid } from "./country-grid";
import { CTA } from "@/components/sections/cta";
import { countries } from "@/lib/data";
import { turkishNumberWord } from "@/lib/utils";

const countryWord = turkishNumberWord(countries.length);
const countryNames = countries.map((c) => c.name).join(", ");

export const metadata: Metadata = {
  title: "Ülkeler",
  description: `${countryNames} için sunduğumuz vize danışmanlığı hizmetleri.`,
};

export default function UlkelerPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="absolute inset-0 -z-10 noise opacity-30" />
        <div className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-cream-200/25 blur-3xl -z-10" />
        <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-cream-200/20 blur-3xl -z-10" />
        <Container>
          <SectionLabel>Çalıştığımız Ülkeler</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            {countryWord} ülke,
            <br />
            <span className="italic font-light">sayısız </span>destinasyon.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Her ülkenin kendine özgü başvuru dinamikleri vardır. MKC Visa olarak
            {" "}{countryWord.toLowerCase()} farklı ülke için derinlemesine uzmanlık sunuyoruz.
          </p>
        </Container>
      </section>

      <CountryGrid />
      <CTA />
    </>
  );
}
