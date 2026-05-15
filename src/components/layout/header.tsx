"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-14 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-2 group" aria-label="MKC Visa Anasayfa">
          <span className="font-serif text-2xl md:text-[28px] tracking-tight text-foreground">
            MKC
          </span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-muted mt-1 hidden sm:inline">
            Visa
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[13px] tracking-wide text-foreground/80 hover:text-foreground transition-colors",
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
