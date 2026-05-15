import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Vize süreçleri, gerekli belgeler, danışmanlık ücretleri ve daha fazlası hakkında sıkça sorulan sorular.",
};

export default function SSSPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>SSS</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Aklınızdaki
            <br />
            <span className="italic font-light">sorulara </span>yanıtlar.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Vize süreçleri hakkında en sık karşılaştığımız sorular ve şeffaf
            yanıtları. Aradığınızı bulamazsanız, doğrudan iletişime geçin.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container className="max-w-4xl">
          <Accordion items={faqs} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
