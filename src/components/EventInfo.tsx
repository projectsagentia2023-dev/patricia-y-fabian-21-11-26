import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

export default function EventInfo() {
  return (
    <section className="bg-gold-50/60 px-6 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-gold-700">
            Detalles del evento
          </p>
          <h2 className="mb-14 font-serif text-3xl font-light text-beige-900 md:text-4xl">
            Información del evento
          </h2>

          <div className="mb-16">
            <h3 className="mb-8 font-serif text-2xl font-light text-beige-900">Ceremonia religiosa</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group border border-gold-200/80 bg-white p-8 transition-all duration-500 hover:border-gold-700 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-600">
                  <svg className="h-5 w-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-beige-700">
                  Fecha
                </h3>
                <p className="font-serif text-xl text-beige-900">{eventData.date}</p>
              </div>

              <div className="group border border-gold-200/80 bg-white p-8 transition-all duration-500 hover:border-gold-700 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-600">
                  <svg className="h-5 w-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-beige-700">
                  Hora
                </h3>
                <p className="font-serif text-xl text-beige-900">20:30 hs</p>
              </div>

              <div className="group border border-gold-200/80 bg-white p-8 transition-all duration-500 hover:border-gold-700 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-600">
                  <svg className="h-5 w-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-beige-700">
                  Dirección
                </h3>
                <p className="font-sans text-base font-medium text-beige-900">Catedral Basílica Nuestra Señora de la Paz; ALEJANDRO SAENZ 438</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-8 font-serif text-2xl font-light text-beige-900">Fiesta</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group border border-gold-200/80 bg-white p-8 transition-all duration-500 hover:border-gold-700 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-600">
                  <svg className="h-5 w-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-beige-700">
                  Fecha
                </h3>
                <p className="font-serif text-xl text-beige-900">{eventData.date}</p>
              </div>

              <div className="group border border-gold-200/80 bg-white p-8 transition-all duration-500 hover:border-gold-700 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-600">
                  <svg className="h-5 w-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-beige-700">
                  Hora
                </h3>
                <p className="font-serif text-xl text-beige-900">{eventData.time}</p>
              </div>

              <div className="group border border-gold-200/80 bg-white p-8 transition-all duration-500 hover:border-gold-700 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-600">
                  <svg className="h-5 w-5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-beige-700">
                  Dirección
                </h3>
                <p className="font-serif text-lg text-beige-900">{eventData.address}</p>
              </div>
            </div>

            <a
              href={eventData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block border border-gold-800 bg-gold-800 px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-gold-700"
            >
              Cómo llegar a la fiesta
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
