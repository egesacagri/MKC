import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { Container } from "@/components/ui/container";
import { countries } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-foreground/10 bg-cream-50">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="block leading-none -translate-y-[60px]" aria-label="MKC Visa Anasayfa">
              <Image
                src="/logo.svg"
                alt="MKC Visa"
                width={304}
                height={304}
                className="h-[19rem] w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs">
              Global sınırları birlikte aşıyoruz. ABD, Kanada, İngiltere ve Avrupa için
              güvenilir vize danışmanlığı.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted hover:text-foreground transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-foreground font-medium mb-5">
              Keşfet
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/hakkimizda" className="hover:text-foreground transition-colors">Hakkımızda</Link></li>
              <li><Link href="/ulkeler" className="hover:text-foreground transition-colors">Ülkeler</Link></li>
              <li><Link href="/global-haber" className="hover:text-foreground transition-colors">Global Haber</Link></li>
              <li><Link href="/sss" className="hover:text-foreground transition-colors">SSS</Link></li>
              <li><Link href="/basvur" className="hover:text-foreground transition-colors">Başvur</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-foreground font-medium mb-5">
              Ülkeler
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-muted">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link href={`/ulkeler#${c.slug}`} className="hover:text-foreground transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-foreground font-medium mb-5">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Levent Mah. Büyükdere Cad. No: 142, Şişli, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+902120000000" className="hover:text-foreground transition-colors">
                  +90 (212) 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@mkcvisa.com" className="hover:text-foreground transition-colors">
                  info@mkcvisa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-foreground/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-muted">
          <p>© {new Date().getFullYear()} MKC Visa. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/sss" className="hover:text-foreground transition-colors">Gizlilik Politikası</Link>
            <Link href="/sss" className="hover:text-foreground transition-colors">Kullanım Koşulları</Link>
            <Link href="/iletisim" className="hover:text-foreground transition-colors">KVKK</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
