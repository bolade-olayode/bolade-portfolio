import type { Metadata } from "next";
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olayode Bolade Emmanuel — Building",
  description: "Portfolio under construction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${jbmono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-text font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
