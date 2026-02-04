import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TelEM Healthcare | Proactive Remote Patient Monitoring",
  description:
    "Contactless, radar-based remote monitoring with 24/7 emergency medicine clinical oversight. Reducing readmissions and enabling early detection for skilled nursing facilities and senior living.",
  keywords: [
    "remote patient monitoring",
    "RPM",
    "telehealth",
    "senior care",
    "skilled nursing",
    "radar monitoring",
    "healthcare technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
