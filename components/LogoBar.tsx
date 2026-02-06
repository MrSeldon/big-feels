"use client";

import ScrollReveal from "./ScrollReveal";

const partners = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
];

export default function LogoBar() {
  return (
    <section className="bg-cream border-t border-taupe/20 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-sans text-sm uppercase tracking-[0.15em] text-taupe/50"
              >
                {partner}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
