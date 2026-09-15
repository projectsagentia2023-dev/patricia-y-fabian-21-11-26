"use client";

import { useEffect, useState } from "react";
import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = new Date(eventData.dateISO).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="group flex flex-col items-center">
      <div
        className="relative flex h-20 w-20 items-center justify-center bg-white shadow-sm transition-all duration-500 md:h-28 md:w-28"
        style={{ border: "1px solid #c5d9ce" }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "#3d5c4a")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "#c5d9ce")}
      >
        <span className="font-serif text-3xl md:text-5xl" style={{ color: "#1e3a2f" }}>
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute -bottom-px left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: "#3d5c4a" }} />
      </div>
      <span className="mt-3 font-serif text-xs uppercase tracking-[0.2em] md:text-sm" style={{ color: "#3d5c4a" }}>
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#e4ede8" }}>
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal variant="fade-down" duration={800}>
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em]" style={{ color: "#3d5c4a" }}>
            Faltan
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light md:text-4xl" style={{ color: "#1e3a2f" }}>
            Para nuestro gran día
          </h2>
        </ScrollReveal>

        {mounted ? (
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <ScrollReveal variant="fade-up" delay={0}><TimeBlock value={timeLeft.days} label="Días" /></ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}><TimeBlock value={timeLeft.hours} label="Horas" /></ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}><TimeBlock value={timeLeft.minutes} label="Minutos" /></ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}><TimeBlock value={timeLeft.seconds} label="Segundos" /></ScrollReveal>
          </div>
        ) : (
          <div className="h-28" />
        )}
      </div>
    </section>
  );
}
