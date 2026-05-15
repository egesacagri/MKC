"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

const pillars = [
  {
    icon: Zap,
    title: "Hızlı Süreç",
    desc: "Başvurularınızı 48 saat içinde inceler, randevu ve dosya hazırlığında zamanı sizin lehinize çeviririz.",
  },
  {
    icon: Eye,
    title: "Şeffaf Danışmanlık",
    desc: "Süreç boyunca tek bir muhatabınız var. Her adımı, her ücreti ve her olası riski net şekilde paylaşırız.",
  },
  {
    icon: Trophy,
    title: "Yüksek Başarı Oranı",
    desc: "2.500'ü aşkın başvuru deneyimi ve %97 onay oranıyla, dosyanızın güçlü yönlerini öne çıkarırız.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>Neden MKC Visa</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Üç temel ilke,
            <br />
            <span className="italic font-light">tek bir vaat</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10 group hover:bg-cream-50 transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full border border-foreground/25 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:text-cream-100 transition-all duration-500">
                  <p.icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl text-muted/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-10 font-serif text-2xl md:text-3xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
