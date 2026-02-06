import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ScrollRevealHero from "@/components/ScrollRevealHero";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found — Big Feels" };
    return {
      title: `${project.title} — Big Feels`,
      description: project.tagline,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero — image background with project title overlay */}
      <ScrollRevealHero
        imageSrc={project.images[0]}
        title={project.title}
        label={project.category}
      />

      {/* Metadata grid + description */}
      <section className="relative z-10 bg-black py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Metadata row */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-white/10">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-2">
                  Category
                </p>
                <p className="font-sans text-sm text-white">{project.category}</p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-2">
                  Type
                </p>
                <p className="font-sans text-sm text-white">Botanical Design</p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-2">
                  Status
                </p>
                <p className="font-sans text-sm text-white">Completed</p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-2">
                  Year
                </p>
                <p className="font-sans text-sm text-white">2025</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Two-column description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
                {project.tagline}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed">
                {project.description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="relative z-10 bg-black">
        {project.images.slice(1).map((img, i) => (
          <ScrollReveal key={i}>
            <div className="w-full">
              <Image
                src={img}
                alt={`${project.title} — Image ${i + 2}`}
                width={1920}
                height={1080}
                className="w-full h-[60vh] md:h-[80vh] object-cover"
              />
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Next project */}
      <section className="relative z-10 bg-black py-32 md:py-48 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-white/40 mb-6">
            Next Project
          </p>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="font-serif text-5xl md:text-7xl text-white hover:text-white/60 transition-colors duration-300 tracking-tighter"
          >
            {nextProject.title}
          </Link>
          <p className="font-sans text-sm text-white/40 mt-4 uppercase tracking-widest">
            {nextProject.category}
          </p>
        </div>
      </section>
    </>
  );
}
