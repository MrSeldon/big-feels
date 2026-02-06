import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact — Big Feels",
  description: "Tell us about your space. Get in touch for a consultation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Text-on-black hero */}
      <section className="bg-black pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel text="Inquiry" />
            <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tighter">
              Tell us about your space.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
