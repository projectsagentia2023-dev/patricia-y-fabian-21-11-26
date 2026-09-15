import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

export default function Organizer() {
  return (
    <section className="px-6 py-20 text-white" style={{ backgroundColor: "#152920" }}>
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal variant="fade-down" duration={800}>
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em]" style={{ color: "#8fb09c" }}>
            Evento organizado por
          </p>

          <h2 className="mb-6 font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
            {eventData.organizer.name}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200} duration={900}>
          <p className="mb-10 font-serif text-lg leading-relaxed" style={{ color: "#c5d9ce" }}>
            {eventData.organizer.description}
          </p>

          <a
            href={eventData.organizer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] transition-all duration-500"
            style={{ border: "1px solid #8fb09c", color: "#8fb09c" }}
          >
            Mas información
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
