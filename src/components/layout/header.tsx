"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/lib/data";

const navLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/ulkeler", label: "Ülkeler" },
  { href: "/global-haber", label: "Global Haber" },
  { href: "/sss", label: "Sıkça Sorulan Sorular" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-foreground/10"
          : "bg-background/0 border-b border-transparent"
      )}
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-14 flex items-stretch justify-between h-24 md:h-28">
        <Link href="/" className="flex items-center group" aria-label="MKC Visa Anasayfa">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.svg`}
            alt="MKC Visa"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-stretch gap-9">
          {navLinks.map((link) => {
            const isCountries = link.href === "/ulkeler";
            const active = isCountries
              ? pathname === link.href || pathname.startsWith("/ulkeler/")
              : pathname === link.href;

            if (isCountries) {
              return (
                <div key={link.href} className="relative group self-stretch flex items-center">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative inline-flex items-center gap-1 text-[13px] tracking-wide text-foreground/80 hover:text-foreground transition-colors",
                      active && "text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden
                    />
                    {active && (
                      <span className="absolute -bottom-1.5 left-0 right-4 h-px bg-foreground" />
                    )}
                  </Link>

                  {/* Dropdown panel — positioned from header bottom */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] invisible group-hover:visible z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-background backdrop-blur-none border border-foreground/10 shadow-[0_16px_40px_rgba(10,8,4,0.08)] p-8">
                      <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                        {countries.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/ulkeler/${c.slug}`}
                            className="group/item flex items-center gap-3 py-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                          >
                            <span className="text-base leading-none" aria-hidden>
                              {c.flag}
                            </span>
                            <span className="font-serif text-[15px] tracking-tight">
                              {c.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-5 border-t border-foreground/10 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                          {countries.length} ülke · sürekli güncellenir
                        </span>
                        <Link
                          href="/ulkeler"
                          className="text-[11px] uppercase tracking-[0.18em] text-foreground hover:opacity-70 transition-opacity"
                        >
                          Tümünü Gör →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center text-[13px] tracking-wide text-foreground/80 hover:text-foreground transition-colors",
                  active && "text-foreground"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/basvur"
            className="hidden sm:inline-flex items-center justify-center bg-foreground text-cream-100 hover:bg-charcoal px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
          >
            Başvur
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-foreground"
            aria-label="Menüyü aç/kapat"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-foreground/10",
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-6 py-6 flex flex-col gap-1 bg-background/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-3 font-serif text-2xl text-foreground/80 hover:text-foreground transition-colors",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/basvur"
            className="mt-3 inline-flex items-center justify-center bg-foreground text-cream-100 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium"
          >
            Başvur
          </Link>
        </nav>
      </div>
    </header>
  );
}
