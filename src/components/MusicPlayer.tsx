"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/Ed Sheeran - Perfect (Official Music Video).mp3");
    audio.currentTime = 10;
    
    audio.addEventListener('ended', () => {
      audio.currentTime = 10;
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
    <section className="bg-beige-50 px-6 py-12 flex flex-col items-center text-center">
      <p className="mb-4 font-serif text-sm uppercase tracking-[0.3em] text-gold-700">
        Nuestra Canción
      </p>
      <button
        onClick={togglePlay}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-800 text-white shadow-lg transition-transform hover:scale-110 hover:bg-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-400"
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
      <p className="mt-4 font-serif text-lg text-beige-900">
        {isPlaying ? "Reproduciendo..." : "Reproducir Música"}
      </p>
    </section>
  );
}
