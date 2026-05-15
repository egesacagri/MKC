import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "MKC Visa ile iletişime geçin. Levent, İstanbul ofisimiz veya online görüşme ile vize süreciniz hakkında ücretsiz danışmanlık alın.",
};

const items = [
  { icon: MapPin, label: "Ofis", value: "Levent Mah. Büyükdere Cad. No: 142, Şişli, İstanbul" },
  { icon: Phone, label: "Telefon", value: "+90 (212) 000 00 00", href: "tel:+902120000000" },
  { icon: Mail, label: "E-posta", value: "info@mkcvisa.com", href: "mailto:info@mkcvisa.com" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt – Cum, 09:00 – 18:00" },
];

export default function IletisimPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>İletişim</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Sohbete
            <br />
            <span className="italic font-light">başlayalım</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            İlk görüşmemiz ücretsiz. Dosyanızı dinleyelim, size en uygun ülke
            ve vize tipi için yol haritası sunalım.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Info column */}
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Bize ulaşın
              </h2>
              <div className="mt-10 space-y-8">
                {items.map((it) => (
                  <div key={it.label} className="flex items-start gap-5">
                    <div className="w-11 h-11 shrink-0 rounded-full border border-foreground/25 flex items-center justify-center">
                      <it.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                        {it.label}
                      </div>
                      {it.href ? (
                        <a
                          href={it.href}
                          className="mt-1 inline-block text-foreground hover:text-charcoal transition-colors text-lg"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-foreground text-lg">{it.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-foreground/15">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
                Mesaj bırakın
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
