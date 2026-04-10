import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/ui/MobileCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Precision Paint Co. | Professional Painting Services",
  description: "Expert residential and commercial painting services. Transform your space with our professional team. Get a free quote today!",
  keywords: "painting services, interior painting, exterior painting, commercial painting, residential painting",
  openGraph: {
    title: "Precision Paint Co. | Professional Painting Services",
    description: "Expert residential and commercial painting services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
