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
    <section className="bg-gold-50 px-6 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-600 bg-white">
              <svg className="h-7 w-7 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h2 className="mb-4 font-serif text-3xl font-light text-beige-900 md:text-4xl">
            Lluvia de Sobres Digital
          </h2>

          <p className="mb-10 font-serif text-beige-700 leading-relaxed">
            Si deseas realizar un regalo a los anfitriones, puedes hacerlo mediante
            transferencia.
          </p>

          <div className="mx-auto mb-8 max-w-sm border border-gold-200 bg-white p-8 shadow-sm">
            <p className="mb-2 font-serif text-sm uppercase tracking-[0.2em] text-gold-700">
              Alias Mercado Pago
            </p>
            <p className="font-serif text-2xl text-gold-800">{eventData.mercadoPagoAlias}</p>
          </div>

          <button
            type="button"
            onClick={copyAlias}
            className="border border-gold-800 bg-gold-800 px-10 py-4 font-serif text-sm uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-gold-700"
          >
            {copied ? "¡Copiado!" : "Copiar Alias"}
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
