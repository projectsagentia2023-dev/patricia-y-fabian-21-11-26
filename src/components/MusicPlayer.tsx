"use client";

import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/Ed Sheeran - Perfect (Official Music Video).mp3");
    audio.currentTime = 16;

    audio.addEventListener('ended', () => {
      audio.currentTime = 16;
      audio.play().catch(console.error);
    });

    audioRef.current = audio;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative overflow-hidden px-6 py-14 flex flex-col items-center text-center" style={{ backgroundColor: "#f3f7f0" }}>
      {/* Decorative leaf top-left */}
      <svg className="absolute top-0 left-0 w-32 h-32 opacity-20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 190 C10 190 60 120 100 80 C140 40 190 10 190 10 C190 10 170 80 120 120 C70 160 10 190 10 190Z" fill="#3d5c4a"/>
        <path d="M10 190 C40 150 80 110 130 70" stroke="#2d4a3a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M60 160 C80 130 110 100 150 70" stroke="#2d4a3a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
      {/* Decorative leaf bottom-right */}
      <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 190 C10 190 60 120 100 80 C140 40 190 10 190 10 C190 10 170 80 120 120 C70 160 10 190 10 190Z" fill="#3d5c4a"/>
        <path d="M10 190 C40 150 80 110 130 70" stroke="#2d4a3a" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <ScrollReveal variant="zoom-in" duration={800}>
      <p className="mb-4 font-serif text-sm uppercase tracking-[0.3em]" style={{ color: "#152920" }}>
        Nuestra Canción
      </p>
      <button
        onClick={togglePlay}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4"
        style={{ backgroundColor: "#2d4a3a", boxShadow: "0 0 0 0 #8fb09c" }}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      <p className="mt-4 font-serif text-lg" style={{ color: "#152920" }}>
        {isPlaying ? "Reproduciendo..." : "Reproducir Música"}
      </p>

      {/* Invitation paragraph */}
      <div className="mt-8 max-w-xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4 gap-3">
          <div className="h-px w-12" style={{ backgroundColor: "#8fb09c" }}></div>
          <svg className="w-5 h-5" style={{ color: "#152920" }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8 2 4 6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4-4-8-8-8zm0 10.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 7.5 12 7.5s2.5 1.1 2.5 2.5S13.4 12.5 12 12.5z"/>
          </svg>
          <div className="h-px w-12" style={{ backgroundColor: "#8fb09c" }}></div>
        </div>
        <p className="font-serif text-base leading-relaxed italic" style={{ color: "#152920" }}>
          Con el corazón lleno de ilusión y felicidad, queremos invitarte a ser parte de uno de los días más importantes de nuestras vidas.
          Celebraremos nuestro amor, nuestros sueños y el comienzo de un hermoso camino que recorreremos juntos.
        </p>
      </div>
      </ScrollReveal>
    </section>
  );
}
