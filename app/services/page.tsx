import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

export const metadata = {
  title: "Services — Big Feels",
  description:
    "We design botanical environments for commercial offices, private residences, and luxury retail spaces.",
};

const services = [
  {
    number: "01",
    title: "Commercial Spaces",
    body: "We design botanical environments for modern offices that enhance productivity, creativity, and well-being. From curated orchid placements to full biophilic design systems, we bring nature into the workplace with surgical precision. Imagine walking into a 100,000 sq ft floor at golden hour, beautifully designed, minimal and Apple-clean — but with select flowers and orchids throughout giving energy and light to the space.",
    image: images.serviceCommercial,
  },
  {
    number: "02",
    title: "Private Residences",
    body: "Every home has a rhythm. We listen to the architecture, the light, and the people who live there — then design botanical installations that feel like they've always belonged. Bespoke. Intentional. Alive.",
    image: images.serviceResidential,
  },
  {
    number: "03",
    title: "Luxury Retail",
    body: "First impressions in luxury retail are everything. We create botanical installations that elevate the customer experience — minimal, sophisticated arrangements that complement your brand and make every visit memorable.",
    image: images.serviceRetail,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Text-on-black hero */}
      <section className="bg-black pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-6">
              Services
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tighter">
              How We Work
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {services.map((service, i) => (
        <section key={service.number} className="bg-black">
          <div
            className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            <div className={`${i % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <ScrollReveal>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={960}
                  height={1200}
                  className="w-full h-[50vh] md:h-[80vh] object-cover"
                />
              </ScrollReveal>
            </div>
            <div
              className={`flex items-center px-6 md:px-16 py-16 md:py-24 ${
                i % 2 === 1 ? "md:order-1" : "md:order-2"
              }`}
            >
              <ScrollReveal delay={0.2}>
                <span className="font-sans font-bold text-8xl text-white/20 block mb-6">
                  {service.number}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed">
                  {service.body}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-black py-32 md:py-48">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="font-serif text-4xl md:text-6xl text-white mb-8 tracking-tighter">
              Let&apos;s create something beautiful.
            </p>
            <Link
              href="/contact"
              className="inline-block font-sans text-sm uppercase tracking-widest text-white border border-white/30 px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
