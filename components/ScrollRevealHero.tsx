"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ScrollRevealHeroProps {
  imageSrc: string;
  title: string;
  label?: string;
  scrollHint?: boolean;
}

export default function ScrollRevealHero({
  imageSrc,
  title,
  label,
  scrollHint = true,
}: ScrollRevealHeroProps) {
  return (
    <div className="relative h-[150vh]">
      {/* Layer 1: Sticky hero image — pinned behind everything */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Layer 2: Black title band — covers top 50vh, scrolls away */}
      <div className="absolute top-0 left-0 right-0 z-10 h-[50vh] bg-black flex flex-col justify-end px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto w-full">
          {label && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 0, 0, 1] }}
              className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4"
            >
              {label}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 0, 0, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter max-w-4xl"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Scroll hint — at the horizon where black meets image */}
      {scrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-[50vh] right-6 md:right-12 z-10 -translate-y-full pb-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-white/40">
            Scroll Down
          </span>
        </motion.div>
      )}
    </div>
  );
}
