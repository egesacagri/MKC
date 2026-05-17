import type { Metadata } from "next";
import { Globe, Compass, HandshakeIcon, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CTA } from "@/components/sections/cta";
import { countries } from "@/lib/data";
import { turkishNumberWord } from "@/lib/utils";

const countryWord = turkishNumberWord(countries.length).toLowerCase();

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "MKC Visa, ABD, Kanada, İngiltere ve Avrupa için profesyonel vize danışmanlığı sunan, şeffaflık ve başarı odaklı bir danışmanlık ofisidir.",
};

const values = [
  { icon: Globe, title: "Global Bakış", desc: `${countryWord.charAt(0).toUpperCase() + countryWord.slice(1)} ülkede aktif partner ağı ile güncel mevzuata anlık erişim.` },
  { icon: Compass, title: "Stratejik Rehberlik", desc: "Her başvuruyu kişisel hikâye olarak ele alır, ona özel yol haritası çıkarırız." },
  { icon: HandshakeIcon, title: "Güvene Dayalı İlişki", desc: "Tek muhatap, açık iletişim ve net taahhütler — sürpriz yok." },
  { icon: Award, title: "Kanıtlanmış Başarı", desc: "%97 onay oranı ve 2.500'ü aşkın tamamlanmış dosya deneyimi." },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <SectionLabel>Hakkımızda</SectionLabel>
              <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-foreground">
                Sınırların ötesinde
                <br />
                <span className="italic font-light">güvenilir </span>bir partner.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
                MKC Visa; ABD, Kanada, İngiltere ve Avrupa için bireysel ve kurumsal
                başvuruları yöneten, uçtan uca vize danışmanlığı sunan butik bir ofis.
                Sayılarla değil, hikâyelerle çalışıyoruz: her dosyayı sizin hayatınızın
                gerçek bir bölümü olarak ele alıyoruz.
              </p>
            </div>

            {/* Editorial image placeholder */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full bg-foreground overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-foreground to-charcoal" />
                <div className="absolute inset-0 noise opacity-20" />
                <div className="absolute bottom-8 left-8 right-8 text-cream-100">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-cream-100/60">
                    Est. 2018 — İstanbul
                  </div>
                  <div className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                    Her başvuru, yeni bir başlangıçtır.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-cream-50 border-y border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <SectionLabel>Misyon</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl md:text-5xl tracking-tight text-foreground">
                Karmaşık olanı sadeleştirmek.
              </h2>
              <p className="mt-6 text-muted leading-relaxed text-lg">
                Vize süreçleri çoğu kişi için belirsizliklerle dolu bir labirenttir.
                Biz bu süreci ayrıştırılabilir adımlara böler, müşterilerimize her
                aşamada nerede olduğunu net şekilde gösteririz.
              </p>
            </div>
            <div>
              <SectionLabel>Vizyon</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl md:text-5xl tracking-tight text-foreground">
                Sınırı engel olmaktan çıkarmak.
              </h2>
              <p className="mt-6 text-muted leading-relaxed text-lg">
                Hedefimiz; Türkiye'den dünyaya açılmak isteyen profesyoneller,
                öğrenciler ve aileler için başvuru sürecinin endişe değil, beklenen
                bir başarıya dönüşmesini sağlamak.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mb-16">
            <SectionLabel>İlkelerimiz</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-tight text-foreground">
              Çalışma şeklimizi
              <br />
              <span className="italic font-light">tanımlayan dört değer</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-background p-8 group hover:bg-cream-50 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full border border-foreground/25 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:text-cream-100 transition-all duration-500">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-8 font-serif text-2xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-muted leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
