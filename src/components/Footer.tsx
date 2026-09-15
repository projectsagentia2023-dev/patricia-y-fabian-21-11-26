import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const year = new Date(eventData.dateISO).getFullYear();

  return (
    <footer className="px-6 py-12" style={{ borderTop: "1px solid #c5d9ce", backgroundColor: "#f3f7f0" }}>
      <ScrollReveal variant="fade-up" duration={700}>
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-2xl md:text-3xl" style={{ color: "#152920" }}>
          {eventData.primaryName}
          <span className="mx-2" style={{ color: "#152920" }}>&</span>
          {eventData.secondaryName}
        </p>

        <p className="mt-3 font-serif text-sm tracking-[0.2em]" style={{ color: "#152920" }}>
          {year}
        </p>

        <div className="mx-auto my-8 h-px w-16" style={{ backgroundColor: "#3d5c4a" }} />

        <p className="font-serif text-sm" style={{ color: "#152920" }}>
          Organización y coordinación:{" "}
          <a
            href={eventData.organizer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: "#152920" }}
          >
            SR EVENTOS
          </a>
        </p>
      </div>
      </ScrollReveal>
    </footer>
  );
}
