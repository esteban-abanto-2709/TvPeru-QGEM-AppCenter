import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TV Perú App Center - Que Gane El Mejor",
  description: "Sistema centralizado para el programa 'Que Gane El Mejor' de TV Perú. Gestión unificada de juegos y herramientas en tiempo real.",
  keywords: "TV Perú, Que Gane El Mejor, App Center, juegos educativos, sistema centralizado",
  authors: [{ name: "TV Perú - IRTP" }],
  creator: "Instituto Nacional de Radio y Televisión del Perú",
  publisher: "TV Perú",
  robots: "noindex, nofollow", // Para ambiente de desarrollo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}