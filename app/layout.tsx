import type { Metadata } from "next";
import { EB_Garamond, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Olayode Bolade Emmanuel — Full-Stack Engineer",
  description:
    "Full-stack engineer building internal tools, data workflows, and SaaS platforms. Site under construction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${instrument.variable} ${jbmono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-text font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
