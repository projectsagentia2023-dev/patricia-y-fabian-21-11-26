"use client";

import { FormEvent, useState } from "react";
import { eventData } from "@/lib/event-data";
import ScrollReveal from "./ScrollReveal";

interface Guest {
  id: string;
  firstName: string;
  lastName: string;
}

interface GuestErrors {
  firstName?: string;
  lastName?: string;
}

interface FormErrors {
  mainGuest?: GuestErrors;
  additionalGuests?: Record<string, GuestErrors>;
}

function createGuest(): Guest {
  return {
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
  };
}

function validateGuest(guest: Guest): GuestErrors {
  const errors: GuestErrors = {};
  if (!guest.firstName.trim()) errors.firstName = "El nombre es obligatorio";
  if (!guest.lastName.trim()) errors.lastName = "El apellido es obligatorio";
  return errors;
}

function buildWhatsAppMessage(guests: Guest[]): string {
  const names = guests
    .map((guest) => `${guest.firstName.trim()} ${guest.lastName.trim()}`)
    .join(", ");

  return `Hola, somos ${names}. Confirmamos nuestra asistencia a la boda de ${eventData.primaryName} y ${eventData.secondaryName} el día ${eventData.date}.`;
}

export default function RSVPForm() {
  const [mainGuest, setMainGuest] = useState<Guest>(createGuest);
  const [additionalGuests, setAdditionalGuests] = useState<Guest[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const addGuest = () => {
    setAdditionalGuests((prev) => [...prev, createGuest()]);
  };

  const removeGuest = (id: string) => {
    setAdditionalGuests((prev) => prev.filter((guest) => guest.id !== id));
    setErrors((prev) => {
      if (!prev.additionalGuests) return prev;
      const { [id]: _, ...rest } = prev.additionalGuests;
      return { ...prev, additionalGuests: rest };
    });
  };

  const updateMainGuest = (field: keyof Guest, value: string) => {
    setMainGuest((prev) => ({ ...prev, [field]: value }));
    if (submitAttempted) {
      setErrors((prev) => ({
        ...prev,
        mainGuest: validateGuest({ ...mainGuest, [field]: value }),
      }));
    }
  };

  const updateAdditionalGuest = (id: string, field: keyof Guest, value: string) => {
    setAdditionalGuests((prev) =>
      prev.map((guest) => (guest.id === id ? { ...guest, [field]: value } : guest))
    );
    if (submitAttempted) {
      const guest = additionalGuests.find((g) => g.id === id);
      if (guest) {
        setErrors((prev) => ({
          ...prev,
          additionalGuests: {
            ...prev.additionalGuests,
            [id]: validateGuest({ ...guest, [field]: value }),
          },
        }));
      }
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const mainErrors = validateGuest(mainGuest);
    const additionalErrors: Record<string, GuestErrors> = {};
    additionalGuests.forEach((guest) => {
      const guestErrors = validateGuest(guest);
      if (Object.keys(guestErrors).length > 0) {
        additionalErrors[guest.id] = guestErrors;
      }
    });

    const hasErrors =
      Object.keys(mainErrors).length > 0 || Object.keys(additionalErrors).length > 0;

    if (hasErrors) {
      setErrors({ mainGuest: mainErrors, additionalGuests: additionalErrors });
      return;
    }

    const allGuests = [mainGuest, ...additionalGuests];
    const message = encodeURIComponent(buildWhatsAppMessage(allGuests));
    window.open(`https://wa.me/${eventData.whatsapp}?text=${message}`, "_blank");
  };

  const inputClass =
    "w-full border border-beige-300 bg-white px-4 py-3 font-serif text-beige-900 outline-none transition-colors focus:border-gold-700";

  const errorClass = "mt-1 text-sm text-red-600";

  return (
    <section id="confirmacion" className="bg-white px-6 py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.3em] text-gold-700">
              RSVP
            </p>
            <h2 className="font-serif text-3xl font-light text-beige-900 md:text-4xl">
              Confirmación de asistencia
            </h2>
            <p className="mt-4 font-serif text-beige-700">
              Por favor, completá el formulario para confirmar tu asistencia
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="border border-gold-100 bg-gold-50/40 p-6 md:p-8">
              <h3 className="mb-6 font-serif text-lg text-beige-900">
                Invitado principal
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="main-firstName" className="mb-2 block font-serif text-sm text-beige-700">
                    Nombre *
                  </label>
                  <input
                    id="main-firstName"
                    type="text"
                    value={mainGuest.firstName}
                    onChange={(e) => updateMainGuest("firstName", e.target.value)}
                    className={inputClass}
                    placeholder="Nombre"
                  />
                  {errors.mainGuest?.firstName && (
                    <p className={errorClass}>{errors.mainGuest.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="main-lastName" className="mb-2 block font-serif text-sm text-beige-700">
                    Apellido *
                  </label>
                  <input
                    id="main-lastName"
                    type="text"
                    value={mainGuest.lastName}
                    onChange={(e) => updateMainGuest("lastName", e.target.value)}
                    className={inputClass}
                    placeholder="Apellido"
                  />
                  {errors.mainGuest?.lastName && (
                    <p className={errorClass}>{errors.mainGuest.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            {additionalGuests.map((guest, index) => (
              <div key={guest.id} className="border border-gold-100 bg-gold-50/40 p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-serif text-lg text-beige-900">
                    Invitado adicional {index + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeGuest(guest.id)}
                    className="font-serif text-sm text-beige-500 transition-colors hover:text-red-500"
                  >
                    Eliminar
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-serif text-sm text-beige-700">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      value={guest.firstName}
                      onChange={(e) =>
                        updateAdditionalGuest(guest.id, "firstName", e.target.value)
                      }
                      className={inputClass}
                      placeholder="Nombre"
                    />
                    {errors.additionalGuests?.[guest.id]?.firstName && (
                      <p className={errorClass}>
                        {errors.additionalGuests[guest.id].firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block font-serif text-sm text-beige-700">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      value={guest.lastName}
                      onChange={(e) =>
                        updateAdditionalGuest(guest.id, "lastName", e.target.value)
                      }
                      className={inputClass}
                      placeholder="Apellido"
                    />
                    {errors.additionalGuests?.[guest.id]?.lastName && (
                      <p className={errorClass}>
                        {errors.additionalGuests[guest.id].lastName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addGuest}
              className="w-full border border-dashed border-gold-400 py-4 font-serif text-sm uppercase tracking-[0.15em] text-gold-700 transition-all hover:border-gold-700 hover:bg-gold-50"
            >
              + Agregar otro invitado
            </button>

            <button
              type="submit"
              className="w-full border border-gold-800 bg-gold-800 py-4 font-serif text-sm uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-gold-700"
            >
              Enviar confirmación por WhatsApp
            </button>
          </form>

          <p className="mt-8 text-center font-serif text-sm italic text-beige-600">
            Las confirmaciones serán verificadas con la lista oficial de invitados
            proporcionada por los anfitriones.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
