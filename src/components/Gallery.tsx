"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, goToPrevious, goToNext]);

  return (
    <section className="bg-white px-6 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-gold-500">
              Nuestros momentos
            </p>
            <h2 className="font-serif text-3xl font-light text-beige-900 md:text-4xl">
              Galería
            </h2>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/fotos/${image}`}
                    alt={`Foto ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de galería"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-2xl text-white/80 transition-colors hover:text-white"
            aria-label="Cerrar"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-gold-400 hover:text-gold-400 md:flex"
            aria-label="Anterior"
          >
            ‹
          </button>

          <div
            className="relative max-h-[85vh] max-w-5xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/fotos/${galleryImages[selectedIndex]}`}
              alt={`Foto ampliada ${selectedIndex + 1}`}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-gold-400 hover:text-gold-400 md:flex"
            aria-label="Siguiente"
          >
            ›
          </button>

          <p className="absolute bottom-6 font-serif text-sm tracking-widest text-white/60">
            {selectedIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
