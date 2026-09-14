"use client";

import Image from "next/image";
import { eventData, heroImage } from "@/lib/event-data";

export default function Hero() {
  const scrollToRsvp = () => {
    document.getElementById("confirmacion")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`/fotos/${heroImage}`}
          alt={`${eventData.primaryName} y ${eventData.secondaryName}`}
          fill
          priority
          className="object-cover object-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gold-900/40 via-black/30 to-gold-50/95" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <p className="animate-fade-in mb-4 font-serif text-sm uppercase tracking-[0.4em] text-gold-300 md:text-base">
          {eventData.title}
        </p>

        <h1 className="animate-fade-in-up font-serif text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
          {eventData.primaryName}
          <span className="mx-3 inline-block text-gold-400">&amp;</span>
          {eventData.secondaryName}
        </h1>

        <div className="animate-fade-in-up mt-8 flex items-center gap-4">
          <span className="h-px w-12 bg-gold-400" />
          <p className="font-serif text-lg tracking-widest text-white/90 md:text-xl">
            {eventData.date}
          </p>
          <span className="h-px w-12 bg-gold-400" />
        </div>

        <button
          onClick={scrollToRsvp}
          className="animate-fade-in-up mt-12 rounded-none border border-gold-700 bg-gold-800/40 px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] text-gold-100 backdrop-blur-sm transition-all duration-500 hover:bg-gold-700 hover:text-white"
        >
          Confirmar asistencia
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-gold-400/60 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
