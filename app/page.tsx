import ScrollRevealHero from "@/components/ScrollRevealHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import FeaturedProject from "@/components/FeaturedProject";
import PhilosophyStrip from "@/components/PhilosophyStrip";
import { images } from "@/lib/images";

const services = [
  {
    title: "Commercial Spaces",
    description:
      "Modern offices with minimal botanical design. Orchids, curated greenery, and biophilic elements that elevate productivity and well-being.",
    image: images.serviceCommercial,
  },
  {
    title: "Private Residences",
    description:
      "Bespoke floral design tailored to your interior aesthetic. Bringing warmth, energy, and living beauty into personal spaces.",
    image: images.serviceResidential,
  },
  {
    title: "Luxury Retail",
    description:
      "Refined botanical installations for high-end retail environments. Creating atmosphere that draws people in and makes them stay.",
    image: images.serviceRetail,
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero — image background with text overlay */}
      <ScrollRevealHero
        imageSrc={images.hero}
        title="big FEELS"
        label="Luxury Botanical Design"
      />

      {/* Section 2: Intro / Mission Statement — z-10 to scroll over sticky hero */}
      <section className="relative z-10 bg-black py-32 md:py-48">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tighter">
              Beauty that optimizes space.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              A true sense of space is intentional. Big Feels begins where
              architecture meets nature — where botanical design transforms how
              people feel, work, and live.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Services Grid */}
      <section className="relative z-10 bg-black py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel text="What We Do" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Project 1 — Full viewport */}
      <div className="relative z-10">
        <FeaturedProject
          title="The Haze Studio"
          tagline="Golden hour meets botanical precision. A 12,000 sq ft creative workspace reimagined."
          image={images.projectHazeStudio}
          slug="the-haze-studio"
          align="left"
        />
      </div>

      {/* Section 5: Philosophy Strip */}
      <div className="relative z-10">
        <PhilosophyStrip quote="We believe every space has a frequency. Our work is tuning it — through light, form, and living design — to where people operate at their highest potential." />
      </div>

      {/* Section 6: Featured Project 2 — Full viewport */}
      <div className="relative z-10">
        <FeaturedProject
          title="Villa Serena"
          tagline="A private residence where every botanical element was chosen to complement the architecture and the life within it."
          image={images.projectVillaSerena}
          slug="villa-serena"
          align="right"
        />
      </div>
    </>
  );
}
