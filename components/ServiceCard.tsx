"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.19, 0, 0, 1],
        delay: index * 0.15,
      }}
      className="group"
    >
      <div className="overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          width={600}
          height={450}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="font-serif text-2xl text-white mb-3">{title}</h3>
      <p className="font-sans text-base text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
