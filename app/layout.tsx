import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, Manrope, Lora } from "next/font/google";
import "./globals.css";
import { TopNav } from "./components/TopNav";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditi — Sr. Associate UI/UX Designer",
  description:
    "Sr. Associate UI/UX Designer at Instantpay India Ltd. I design with empathy, think in systems, and believe the best experiences are the ones nobody notices — because they just work.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${manrope.variable} ${lora.variable} antialiased`}
    >
      <body className="bg-[#0a0a0a] text-white">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
