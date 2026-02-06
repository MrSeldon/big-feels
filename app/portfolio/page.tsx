import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio — Big Feels",
  description: "Explore our botanical design projects across commercial, residential, and retail spaces.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Text-on-black hero — no image needed */}
      <section className="bg-black pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-6">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tighter">
              Our Work
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                image={project.image}
                slug={project.slug}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
