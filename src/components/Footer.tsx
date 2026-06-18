import { eventData } from "@/lib/event-data";

export default function Footer() {
  const year = new Date(eventData.dateISO).getFullYear();

  return (
    <footer className="border-t border-beige-200 bg-white px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-2xl text-beige-900 md:text-3xl">
          {eventData.primaryName}
          <span className="mx-2 text-gold-400">&amp;</span>
          {eventData.secondaryName}
        </p>

        <p className="mt-3 font-serif text-sm tracking-[0.2em] text-beige-600">
          {year}
        </p>

        <div className="mx-auto my-8 h-px w-16 bg-gold-300" />

        <p className="font-serif text-sm text-beige-500">
          Organización y coordinación:{" "}
          <a
            href={eventData.organizer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 transition-colors hover:text-gold-500"
          >
            SR EVENTOS
          </a>
        </p>
      </div>
    </footer>
  );
}
