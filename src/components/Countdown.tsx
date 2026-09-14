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
      <div className="relative flex h-20 w-20 items-center justify-center border border-gold-300/50 bg-white shadow-sm transition-all duration-500 group-hover:border-gold-700 group-hover:shadow-md md:h-28 md:w-28">
        <span className="font-serif text-3xl text-gold-800 md:text-5xl">
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute -bottom-px left-0 h-0.5 w-0 bg-gold-700 transition-all duration-500 group-hover:w-full" />
      </div>
      <span className="mt-3 font-serif text-xs uppercase tracking-[0.2em] text-beige-700 md:text-sm">
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
    <section className="bg-gold-50 px-6 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-gold-700">
            Faltan
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light text-beige-900 md:text-4xl">
            Para nuestro gran día
          </h2>

          {mounted ? (
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <TimeBlock value={timeLeft.days} label="Días" />
              <TimeBlock value={timeLeft.hours} label="Horas" />
              <TimeBlock value={timeLeft.minutes} label="Minutos" />
              <TimeBlock value={timeLeft.seconds} label="Segundos" />
            </div>
          ) : (
            <div className="h-28" />
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
