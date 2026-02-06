"use client";

import ScrollReveal from "./ScrollReveal";

interface PhilosophyStripProps {
  quote: string;
}

export default function PhilosophyStrip({ quote }: PhilosophyStripProps) {
  return (
    <section className="bg-black py-32 md:py-48">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-serif text-2xl md:text-4xl text-white leading-snug text-center">
            &ldquo;{quote}&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
