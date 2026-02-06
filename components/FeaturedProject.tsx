"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectProps {
  title: string;
  tagline: string;
  image: string;
  slug: string;
  align?: "left" | "right";
}

export default function FeaturedProject({
  title,
  tagline,
  image,
  slug,
  align = "left",
}: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.19, 0, 0, 1] }}
        className={`relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 max-w-[1400px] mx-auto ${
          align === "right" ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <h2 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-tight">
          {title}
        </h2>
        <p className="font-sans text-base md:text-lg text-white/60 max-w-lg mb-6 leading-relaxed">
          {tagline}
        </p>
        <Link
          href={`/portfolio/${slug}`}
          className="font-sans text-sm uppercase tracking-[0.1em] text-white hover:text-white/60 transition-colors duration-300 group"
        >
          View Project{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
