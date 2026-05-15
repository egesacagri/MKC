import { Hero } from "@/components/sections/hero";
import { CountriesMarquee } from "@/components/sections/countries-marquee";
import { WhyUs } from "@/components/sections/why-us";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CountriesMarquee />
      <WhyUs />
      <CTA />
    </>
  );
}
