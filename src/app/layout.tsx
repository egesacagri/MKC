import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mkcvisa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MKC Visa — Global Sınırları Birlikte Aşıyoruz",
    template: "%s | MKC Visa",
  },
  description:
    "ABD, Kanada, İngiltere ve Avrupa için profesyonel vize danışmanlığı. Şeffaf süreç, hızlı geri dönüş, yüksek başarı oranı.",
  keywords: [
    "vize danışmanlığı",
    "ABD vizesi",
    "Kanada vizesi",
    "İngiltere vizesi",
    "Schengen vizesi",
    "Almanya vizesi",
    "Portekiz vizesi",
    "Hollanda vizesi",
    "Fransa vizesi",
    "MKC Visa",
  ],
  authors: [{ name: "MKC Visa" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "MKC Visa",
    title: "MKC Visa — Global Sınırları Birlikte Aşıyoruz",
    description:
      "ABD, Kanada, İngiltere ve Avrupa için profesyonel vize danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MKC Visa — Global Sınırları Birlikte Aşıyoruz",
    description:
      "ABD, Kanada, İngiltere ve Avrupa için profesyonel vize danışmanlığı.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
