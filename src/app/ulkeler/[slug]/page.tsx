import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { CTA } from "@/components/sections/cta";
import { Check, MapPin, Clock, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `${country.name} Vize Danışmanlığı | MKC Visa`,
    description: `${country.name} vize başvurusu için detaylı rehber, gerekli belgeler, işlem süresi ve başarı oranı. Profesyonel vize danışmanlığı hizmetleri.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="absolute inset-0 -z-10 noise opacity-30" />
        <div className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-cream-200/25 blur-3xl -z-10" />
        <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-cream-200/20 blur-3xl -z-10" />
        <Container>
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 mb-8 text-[11px] uppercase tracking-[0.22em] text-muted">
              <Link href="/ulkeler" className="hover:text-foreground transition-colors">
                Ülkeler
              </Link>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground">{country.name}</span>
            </div>

            <div className="flex items-start gap-6 mb-10">
              <div className="text-6xl md:text-7xl leading-none">{country.flag}</div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                  {country.region}
                </div>
                <h1 className="mt-3 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground">
                  {country.name}
                  <span className="italic font-light"> vizesi</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                  {country.description}
                </p>
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 mt-14">
              {[
                { icon: Clock, label: "İşlem Süresi", value: country.processingTime },
                { icon: DollarSign, label: "Vize Ücreti", value: country.fee },
                { icon: TrendingUp, label: "Başarı Oranı", value: country.successRate },
                { icon: MapPin, label: "Konsolosluk", value: country.consultateCity },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-background p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-foreground/70" />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                        {stat.label}
                      </span>
                    </div>
                    <div className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <Container>
          <div className="max-w-5xl">
            <div className="mb-14">
              <SectionLabel>Başvuru Şartları</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-tight text-foreground">
                Gerekli <span className="italic font-light">belgeler</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
              {country.requirements.map((req, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start py-5 border-b border-foreground/10"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full border border-foreground/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground/80" strokeWidth={2.5} />
                  </div>
                  <div className="text-foreground/85 leading-relaxed">{req}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TIMELINE & COMMON ISSUES */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl">
            {/* Timeline */}
            <div>
              <SectionLabel>Zaman Çizelgesi</SectionLabel>
              <h3 className="mt-5 font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-3">
                Süreç akışı
              </h3>
              <p className="text-muted mb-10">{country.timeline}</p>

              <div className="space-y-0">
                {[
                  { step: "01", title: "Ön Görüşme", desc: "Dosya hazırlığı planlaması" },
                  { step: "02", title: "Belge Toplama", desc: "Gerekli tüm belgeler hazırlanır" },
                  { step: "03", title: "Başvuru Yapılması", desc: "Resmi başvuru merkezi/online" },
                  { step: "04", title: "Mülakat/İnceleme", desc: "Konsolosluk tarafından değerlendirme" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-start py-6 border-t border-foreground/10 last:border-b"
                  >
                    <div className="font-serif text-2xl text-muted/60 shrink-0 w-12">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-serif text-xl text-foreground tracking-tight">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted mt-1 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Issues */}
            <div>
              <SectionLabel>Yaygın Sorunlar</SectionLabel>
              <h3 className="mt-5 font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-3">
                Dikkat <span className="italic font-light">edilecekler</span>
              </h3>
              <p className="text-muted mb-10">En sık karşılaşılan başvuru engelleri</p>

              <div className="space-y-3">
                {country.commonIssues.map((issue, i) => (
                  <div
                    key={i}
                    className="bg-background p-5 border-l-2 border-foreground/60 border-t border-r border-b border-foreground/10"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-sm text-muted/70 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-medium text-foreground leading-snug">
                          {issue}
                        </div>
                        <div className="text-xs text-muted mt-1.5 leading-relaxed">
                          {i === 0 && "Bu sorun başvuruların %30'unda görülür"}
                          {i === 1 && "Başvuru öncesi mutlaka kontrol edin"}
                          {i === 2 && "En sık red sebeplerinden biri"}
                          {i === 3 && "Tüm bilgilerin tutarlı olması önemli"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONSULATE INFO */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <Container>
          <div className="max-w-5xl grid md:grid-cols-5 gap-12 lg:gap-16">
            <div className="md:col-span-2">
              <SectionLabel>Konsolosluk Bilgileri</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-tight text-foreground">
                {country.consultateCity}
                <br />
                <span className="italic font-light">konsolosluğu</span>
              </h2>
            </div>

            <div className="md:col-span-3 space-y-8">
              <div className="pb-8 border-b border-foreground/10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                  Adres
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-foreground/70 mt-0.5 shrink-0" />
                  <div className="text-foreground/85 leading-relaxed">
                    {country.consultateAddress}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
                  Vize Tipleri
                </div>
                <ul className="space-y-3">
                  {country.visaTypes.map((type, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-foreground/85"
                    >
                      <span className="w-1 h-1 rounded-full bg-foreground/40" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>
              <span className="mx-auto">Sıradaki adım</span>
            </SectionLabel>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-foreground">
              {country.name} vizesi için
              <br />
              <span className="italic font-light">uzman danışmanlık</span>
            </h2>

            <p className="mt-8 text-lg text-muted leading-relaxed">
              Binlerce başvurucunun başarıyla ülkeye gitmesini sağladık. Sizin de
              başarı hikayenizin bir parçası olmak istiyoruz.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/basvur" size="lg" className="w-full sm:w-auto">
                Başvuru Yap
              </Button>
              <Button
                href="/iletisim"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Ücretsiz Danışma
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
