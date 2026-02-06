import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Left: Navigation */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-3xl md:text-5xl text-white hover:text-white/60 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Info */}
          <div className="flex flex-col gap-8 md:items-end md:text-right">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-3">
                Location
              </p>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Los Angeles, California
                <br />
                Available Nationwide
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-3">
                Connect
              </p>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                hello@bigfeels.com
                <br />
                Instagram: @bigfeels
              </p>
            </div>
          </div>
        </div>

        {/* Large wordmark */}
        <div className="mt-20 md:mt-32 overflow-hidden">
          <p className="font-serif text-[15vw] md:text-[12vw] leading-none text-white/5 select-none whitespace-nowrap">
            BIG FEELS
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="font-sans text-xs text-white/40 uppercase tracking-widest">
            &copy; 2026 Big Feels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
