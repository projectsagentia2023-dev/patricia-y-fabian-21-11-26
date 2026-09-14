import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: "Patricia & Fabian | Nos Casamos - Boda 21/11/2026",
  description:
    "Invitación digital a la boda de Patricia y Fabian el 21 de noviembre de 2026. Confirmá tu asistencia, conocé los detalles del evento y más. Organización: SR EVENTOS - bodas y eventos sociales exclusivos.",
  keywords: [
    "boda",
    "Patricia y Fabian",
    "invitación digital",
    "confirmación de asistencia",
    "eventos sociales",
    "organización de bodas",
    "SR EVENTOS",
    "wedding invitation",
  ],
  authors: [{ name: "SR EVENTOS", url: "https://sr-eventos.onrender.com/" }],
  openGraph: {
    title: "Patricia & Fabian | Nos Casamos",
    description:
      "Te invitamos a celebrar nuestra boda el 21 de noviembre de 2026. Confirmá tu asistencia.",
    type: "website",
    locale: "es_AR",
    siteName: "Boda Patricia & Fabian",
    images: [
      {
        url: "/fotos/IMG-20260614-WA0016.jpg",
        width: 1200,
        height: 630,
        alt: "Patricia y Fabian - Nos Casamos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patricia & Fabian | Nos Casamos",
    description:
      "Te invitamos a celebrar nuestra boda el 21 de noviembre de 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
