import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

export default function Organizer() {
  return (
    <section className="bg-green-900 px-6 py-20 text-white">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-green-300">
            Evento organizado por
          </p>

          <h2 className="mb-6 font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
            {eventData.organizer.name}
          </h2>

          <p className="mb-10 font-serif text-lg leading-relaxed text-green-100">
            {eventData.organizer.description}
          </p>

          <a
            href={eventData.organizer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-green-300 bg-transparent px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] text-green-300 transition-all duration-500 hover:bg-green-300 hover:text-green-900"
          >
            Mas información
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
