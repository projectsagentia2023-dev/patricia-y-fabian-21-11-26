"use client";

import { useState } from "react";
import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

export default function DigitalEnvelope() {
  const [copied, setCopied] = useState(false);

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText(eventData.mercadoPagoAlias);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = eventData.mercadoPagoAlias;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#e4ede8" }}>
      <ScrollReveal variant="flip-up" duration={900}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white" style={{ border: "1px solid #3d5c4a" }}>
              <svg className="h-7 w-7" style={{ color: "#152920" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h2 className="mb-4 font-serif text-3xl font-light md:text-4xl" style={{ color: "#152920" }}>
            Lluvia de Sobres Digital
          </h2>

          <p className="mb-10 font-serif leading-relaxed" style={{ color: "#152920" }}>
            Si deseas realizar un regalo a los anfitriones, puedes hacerlo mediante
            transferencia.
          </p>

          <div className="mx-auto mb-8 max-w-sm bg-white p-8 shadow-sm" style={{ border: "1px solid #c5d9ce" }}>
            <p className="mb-2 font-serif text-sm uppercase tracking-[0.2em]" style={{ color: "#152920" }}>
              Alias Mercado Pago
            </p>
            <p className="font-serif text-2xl" style={{ color: "#152920" }}>{eventData.mercadoPagoAlias}</p>
          </div>

          <button
            type="button"
            onClick={copyAlias}
            className="px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] text-white transition-all duration-500"
            style={{ backgroundColor: "#2d4a3a", border: "1px solid #2d4a3a" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3d5c4a")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#2d4a3a")}
          >
            {copied ? "¡Copiado!" : "Copiar Alias"}
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
