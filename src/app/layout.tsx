import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Level Partners | Fractional COO, CRO & VP Sales Leadership",
  description:
    "Proven operator. Relentless executor. I build revenue engines and drive real results - not PowerPoints. Fractional leadership for founders ready to scale.",
  keywords: [
    "fractional COO",
    "fractional CRO",
    "fractional VP sales",
    "fractional executive",
    "revenue operations",
    "startup operations",
    "scaling operations",
  ],
  authors: [{ name: "Jason Hochman" }],
  openGraph: {
    title: "Next Level Partners | Fractional Leadership That Delivers Results",
    description:
      "Experienced revenue and operations executives for early-stage founders ready to scale.",
    url: "https://next-levelpartners.com",
    siteName: "Next Level Partners",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
