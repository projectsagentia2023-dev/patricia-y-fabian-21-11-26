"use client";

import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

// Leaf SVG decoration component
function LeafDecor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 170 C60 170 20 120 10 70 C0 20 40 5 60 5 C80 5 120 20 110 70 C100 120 60 170 60 170Z" fill="#c5d9ce" opacity="0.7"/>
      <path d="M60 170 C60 100 55 50 60 5" stroke="#3d5c4a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M60 140 C45 120 25 100 15 80" stroke="#3d5c4a" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M60 110 C75 90 95 70 105 50" stroke="#3d5c4a" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M60 80 C48 65 35 55 20 45" stroke="#3d5c4a" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group border transition-all duration-500 hover:shadow-xl p-8"
      style={{ borderColor: "#c5d9ce", backgroundColor: "white" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#3d5c4a")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#c5d9ce")}
    >
      {children}
    </div>
  );
}

export default function EventInfo() {
  return (
    <section className="relative overflow-hidden px-6 py-20" style={{ backgroundColor: "#eef5ee" }}>
      {/* Animated floating leaves */}
      <LeafDecor className="absolute -top-6 -left-4 w-24 h-36 opacity-60 rotate-12 animate-[float_6s_ease-in-out_infinite]" />
      <LeafDecor className="absolute top-10 -right-6 w-20 h-32 opacity-50 -rotate-12 animate-[float_8s_ease-in-out_infinite_1s]" />
      <LeafDecor className="absolute bottom-0 left-1/4 w-16 h-24 opacity-40 rotate-45 animate-[float_7s_ease-in-out_infinite_0.5s]" />
      <LeafDecor className="absolute -bottom-4 right-1/3 w-20 h-32 opacity-50 -rotate-30 animate-[float_9s_ease-in-out_infinite_2s]" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <ScrollReveal variant="fade-down" duration={800}>
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em]" style={{ color: "#152920" }}>
            Detalles del evento
          </p>
          <h2 className="mb-14 font-serif text-3xl font-light md:text-4xl" style={{ color: "#152920" }}>
            Información del evento
          </h2>
        </ScrollReveal>

        {/* ── CEREMONIA RELIGIOSA ── */}
        <div className="mb-16">
          {/* Leaf header decoration */}
          <ScrollReveal variant="zoom-in" duration={700}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex gap-1">
                <LeafDecor className="w-6 h-10 -rotate-12 opacity-70" />
                <LeafDecor className="w-5 h-8 rotate-6 opacity-60" />
              </div>
              <h3 className="font-serif text-2xl font-light" style={{ color: "#152920" }}>Ceremonia religiosa</h3>
              <div className="flex gap-1">
                <LeafDecor className="w-5 h-8 -rotate-6 opacity-60" />
                <LeafDecor className="w-6 h-10 rotate-12 opacity-70" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal variant="fade-left" duration={800}>
              <SectionCard>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border" style={{ borderColor: "#3d5c4a" }}>
                  <svg className="h-5 w-5" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>Fecha</h3>
                <p className="font-serif text-xl" style={{ color: "#152920" }}>{eventData.date}</p>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100} duration={800}>
              <SectionCard>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border" style={{ borderColor: "#3d5c4a" }}>
                  <svg className="h-5 w-5" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>Hora</h3>
                <p className="font-serif text-xl" style={{ color: "#152920" }}>20:30 hs</p>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={200} duration={800}>
              <SectionCard>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border" style={{ borderColor: "#3d5c4a" }}>
                  <svg className="h-5 w-5" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>Dirección</h3>
                <p className="font-sans text-base font-medium" style={{ color: "#152920" }}>Catedral Basílica Nuestra Señora de la Paz; ALEJANDRO SAENZ 438</p>
              </SectionCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Divider with leaves */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="h-px flex-1" style={{ backgroundColor: "#8fb09c" }}></div>
          <div className="flex gap-1">
            <LeafDecor className="w-5 h-8 rotate-45 opacity-60" />
            <LeafDecor className="w-4 h-7 -rotate-20 opacity-50" />
          </div>
          <div className="h-px flex-1" style={{ backgroundColor: "#8fb09c" }}></div>
        </div>

        {/* ── FIESTA ── */}
        <div className="mb-16">
          <ScrollReveal variant="zoom-in" duration={700}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex gap-1">
                <LeafDecor className="w-6 h-10 -rotate-12 opacity-70" />
                <LeafDecor className="w-5 h-8 rotate-6 opacity-60" />
              </div>
              <h3 className="font-serif text-2xl font-light" style={{ color: "#152920" }}>Fiesta</h3>
              <div className="flex gap-1">
                <LeafDecor className="w-5 h-8 -rotate-6 opacity-60" />
                <LeafDecor className="w-6 h-10 rotate-12 opacity-70" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal variant="fade-left" duration={800}>
              <SectionCard>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border" style={{ borderColor: "#3d5c4a" }}>
                  <svg className="h-5 w-5" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>Fecha</h3>
                <p className="font-serif text-xl" style={{ color: "#152920" }}>{eventData.date}</p>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100} duration={800}>
              <SectionCard>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border" style={{ borderColor: "#3d5c4a" }}>
                  <svg className="h-5 w-5" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>Hora</h3>
                <p className="font-serif text-xl" style={{ color: "#152920" }}>{eventData.time}</p>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={200} duration={800}>
              <SectionCard>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border" style={{ borderColor: "#3d5c4a" }}>
                  <svg className="h-5 w-5" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>Dirección</h3>
                <p className="font-serif text-lg" style={{ color: "#152920" }}>{eventData.address}</p>
              </SectionCard>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={300} duration={800}>
            <a
              href={eventData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] text-white transition-all duration-500"
              style={{ backgroundColor: "#2d4a3a" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3d5c4a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#2d4a3a")}
            >
              Cómo llegar a la fiesta
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
