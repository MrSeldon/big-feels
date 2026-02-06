"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  imageSrc: string;
  label?: string;
  heading: string;
  height?: string;
  overlay?: boolean;
}

export default function Hero({
  imageSrc,
  label,
  heading,
  height = "h-screen",
  overlay = true,
}: HeroProps) {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <motion.div
        initial={{ scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 0, 0, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={heading}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      )}

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 max-w-[1400px] mx-auto">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.19, 0, 0, 1] }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.15em] text-white/80 mb-4"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.19, 0, 0, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-3xl tracking-tight"
        >
          {heading}
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      {height === "h-screen" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-white/40"
          />
        </motion.div>
      )}
    </section>
  );
}
