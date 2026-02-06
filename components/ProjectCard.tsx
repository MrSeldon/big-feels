"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  image,
  slug,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.19, 0, 0, 1],
        delay: index * 0.1,
      }}
    >
      <Link href={`/portfolio/${slug}`} className="group block">
        <div className="overflow-hidden mb-4">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-2">
          {category}
        </p>
        <h3 className="font-serif text-xl text-white">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
}
