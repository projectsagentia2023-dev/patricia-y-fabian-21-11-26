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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,58,47,0.5), rgba(0,0,0,0.25), rgba(238,245,238,0.95))" }} />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <p className="animate-fade-in mb-4 font-serif text-sm uppercase tracking-[0.4em] md:text-base" style={{ color: "#c5d9ce" }}>
          {eventData.title}
        </p>

        <h1 className="animate-fade-in-up font-serif text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
          {eventData.primaryName}
          <span className="mx-3 inline-block" style={{ color: "#8fb09c" }}>&</span>
          {eventData.secondaryName}
        </h1>

        <div className="animate-fade-in-up mt-8 flex items-center gap-4">
          <span className="h-px w-12" style={{ backgroundColor: "#8fb09c" }} />
          <p className="font-serif text-lg tracking-widest text-white/90 md:text-xl">
            {eventData.date}
          </p>
          <span className="h-px w-12" style={{ backgroundColor: "#8fb09c" }} />
        </div>

        <button
          onClick={scrollToRsvp}
          className="animate-fade-in-up mt-12 rounded-none px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] backdrop-blur-sm transition-all duration-500"
          style={{ border: "1px solid #3d5c4a", backgroundColor: "rgba(45,74,58,0.4)", color: "#e4ede8" }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#3d5c4a"; e.currentTarget.style.color = "white"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(45,74,58,0.4)"; e.currentTarget.style.color = "#e4ede8"; }}
        >
          Confirmar asistencia
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full p-1" style={{ border: "2px solid rgba(143,176,156,0.6)" }}>
          <div className="mx-auto h-2 w-1 rounded-full" style={{ backgroundColor: "#8fb09c" }} />
        </div>
      </div>
    </section>
  );
}
