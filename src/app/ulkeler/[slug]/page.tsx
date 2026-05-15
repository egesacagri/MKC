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
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-semibold text-slate-600 bg-white rounded-full border border-slate-200">
              <Link href="/ulkeler" className="hover:text-blue-900 transition-colors">
                Ülkeler
              </Link>
              <span className="text-slate-300">/</span>
              <span>{country.name}</span>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="text-7xl">{country.flag}</div>
              <div className="flex-1">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-3">
                  {country.name} Vizesi
                </h1>
                <p className="text-lg text-slate-600">{country.description}</p>
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: Clock, label: "İşlem Süresi", value: country.processingTime },
                { icon: DollarSign, label: "Vize Ücreti", value: country.fee },
                { icon: TrendingUp, label: "Başarı Oranı", value: country.successRate },
                { icon: MapPin, label: "Konsolosluk", value: country.consultateCity },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-slate-200 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-blue-900" />
                      <span className="text-xs font-semibold text-slate-500 uppercase">
                        {stat.label}
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 text-sm md:text-base">
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
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-12">
              <SectionLabel>Başvuru Şartları</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-slate-900">
                Gerekli Belgeler
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {country.requirements
                  .slice(0, Math.ceil(country.requirements.length / 2))
                  .map((req, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-slate-700">{req}</div>
                    </div>
                  ))}
              </div>

              <div className="space-y-4">
                {country.requirements
                  .slice(Math.ceil(country.requirements.length / 2))
                  .map((req, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-slate-700">{req}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TIMELINE & COMMON ISSUES */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            {/* Timeline */}
            <div>
              <SectionLabel>Zaman Çizelgesi</SectionLabel>
              <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 mb-6">
                {country.timeline}
              </h3>

              <div className="space-y-4">
                {[
                  { step: "1", title: "Ön Görüşme", desc: "Dosya hazırlığı planlaması" },
                  { step: "2", title: "Belge Toplama", desc: "Gerekli tüm belgeler hazırlanır" },
                  { step: "3", title: "Başvuru Yapılması", desc: "Resmi başvuru merkezi/online" },
                  { step: "4", title: "Mülakat/İnceleme", desc: "Konsolosluk tarafından değerlendirme" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Issues */}
            <div>
              <SectionLabel>Yaygın Sorunlar</SectionLabel>
              <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 mb-6">
                Dikkat Edilecekler
              </h3>

              <div className="space-y-4">
                {country.commonIssues.map((issue, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg border-l-4 border-red-500"
                  >
                    <div className="font-semibold text-slate-900">{issue}</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {i === 0 && "Bu sorun başvuruların %30'unda görülür"}
                      {i === 1 && "Başvuru öncesi mutlaka kontrol edin"}
                      {i === 2 && "En sık red sebeblerinden biri"}
                      {i === 3 && "Tüm bilgilerin tutarlı olması önemli"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONSULATE INFO */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Konsolosluk Bilgileri</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-bold text-slate-900 mb-8">
              {country.consultateCity} Konsolosluğu
            </h2>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    Adres
                  </div>
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-blue-900 mt-0.5 shrink-0" />
                    <div className="text-slate-700">{country.consultateAddress}</div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-3">
                    Vize Tipleri
                  </div>
                  <div className="space-y-2">
                    {country.visaTypes.map((type, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-blue-900" />
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {country.name} Vizesi için <br />
              <span className="text-blue-900">Uzman Danışmanlık</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              Binlerce başvurucunun başarıyla ülkeye gitmesini sağladık. Sizin de
              başarı hikayenizin bir parçası olmak istiyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
