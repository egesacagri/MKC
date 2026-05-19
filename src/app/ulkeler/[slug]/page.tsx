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
                {country.region && (
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                    {country.region}
                  </div>
                )}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground">
                  {country.name}
                  {country.nonItalicVize ? (
                    <span className="font-light"> Vizesi</span>
                  ) : (
                    <span className="italic font-light"> vizesi</span>
                  )}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                  {country.description}
                </p>
              </div>
            </div>
          </div>

          {/* QUICK STATS — full container width */}
          {(() => {
            const stats = [
              { icon: Clock, label: "İşlem Süresi", value: country.processingTime },
              { icon: DollarSign, label: "Turistik Vize Ücreti", value: country.fee },
              ...(country.studentFee ? [{ icon: DollarSign, label: "Öğrenci Vize Ücreti", value: country.studentFee }] : []),
              { icon: TrendingUp, label: "Başarı Oranı", value: country.successRate },
              { icon: MapPin, label: country.consultateLabel ?? "Konsolosluk", value: country.consultateCity },
            ];
            const colClass = stats.length === 5
              ? "grid-cols-2 md:grid-cols-5"
              : "grid-cols-2 md:grid-cols-4";
            return (
              <div className={`grid ${colClass} gap-px bg-foreground/10 border border-foreground/10 mt-14`}>
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-background p-5 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-foreground/70 shrink-0" />
                        <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                          {stat.label}
                        </span>
                      </div>
                      {stat.value.includes("|") ? (
                        <div className="font-serif text-base md:text-lg text-foreground tracking-tight space-y-1">
                          {stat.value.split("\n").map((line, j) => {
                            const [left, right] = line.split("|");
                            return (
                              <div key={j} className="flex justify-between gap-4">
                                <span>{left}</span>
                                <span>{right}</span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="font-serif text-base md:text-lg text-foreground tracking-tight leading-relaxed whitespace-pre-line">
                          {stat.value}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}
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
                  { step: "04", title: "Başvuru Değerlendirilmesi", desc: "Konsolosluk tarafından değerlendirme" },
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
                          {i === 0 && "Vize onayı için ülkeye dönüş niyetinin belgelenmesi kritik önem taşır."}
                          {i === 1 && "Pasaportunuzun seyahat tarihinden itibaren en az 6 ay geçerli olması zorunludur."}
                          {i === 2 && "Banka ekstresi, gelir belgesi ve sponsorluk belgeleri eksiksiz sunulmalıdır."}
                          {i === 3 && "Başvuruda verilen tüm bilgilerin birbiriyle tutarlı ve doğru olması şarttır."}
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
              Yüzlerce kişinin vize sürecini başarıyla tamamladık. Sizi de doğru adımlarla hedefinize ulaştırmak için buradayız.
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
