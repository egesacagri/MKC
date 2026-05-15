import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ApplicationForm } from "@/components/sections/application-form";

export const metadata: Metadata = {
  title: "Başvur",
  description:
    "MKC Visa vize danışmanlığı başvuru formu. Bilgilerinizi paylaşın, 24 saat içinde size dönüş yapalım.",
};

export default function BasvurPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <SectionLabel>Başvuru</SectionLabel>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-foreground">
              Süreci
              <br />
              <span className="italic font-light">başlatın</span>.
            </h1>
            <p className="mt-8 text-lg text-muted leading-relaxed max-w-md">
              Formu doldurmanız yalnızca birkaç dakika sürer. Aldığınız
              bilgilerle hangi vize tipinin ve hangi ülkenin sizin için en
              uygun olduğuna birlikte karar veririz.
            </p>
            <ol className="mt-10 space-y-5 text-sm">
              {[
                { n: "01", t: "Formu doldurun", d: "Temel bilgilerinizi paylaşın." },
                { n: "02", t: "Ücretsiz görüşme", d: "24 saat içinde sizi arayalım." },
                { n: "03", t: "Yol haritası", d: "Size özel başvuru planı çıkaralım." },
              ].map((s) => (
                <li key={s.n} className="flex gap-5 items-start">
                  <span className="font-serif text-xl text-muted/50 mt-0.5">
                    {s.n}
                  </span>
                  <div>
                    <div className="text-foreground font-medium">{s.t}</div>
                    <div className="text-muted text-sm mt-0.5">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right form */}
          <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-foreground/15">
            <ApplicationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
