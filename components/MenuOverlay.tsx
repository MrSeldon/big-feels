"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.19, 0, 0, 1] }}
          className="fixed inset-0 z-50 bg-black flex flex-col"
        >
          <div className="flex items-center justify-between px-6 md:px-12 py-5">
            <span className="font-serif text-2xl tracking-tight text-white">
              BIG FEELS
            </span>
            <button
              onClick={onClose}
              className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-white"
            >
              Close
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 gap-6 md:gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 0, 0, 1],
                  delay: 0.15 + i * 0.1,
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-sans font-bold text-4xl md:text-6xl text-white hover:text-white/60 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-6 md:px-12 py-8">
            <p className="font-sans text-xs text-white/40 uppercase tracking-widest">
              Cultivating beauty. Optimizing spaces.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
