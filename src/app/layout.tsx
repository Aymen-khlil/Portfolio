import type { Metadata } from "next";
import { Press_Start_2P, Geist_Mono } from "next/font/google";
import "./globals.css";
import PixelTrail from "@/components/pixelTrail";

const geistSans = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aymen Khlil - Portfolio",
  description: "Welcome to my hogwarts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PixelTrail />
      <body className={`${geistSans.className} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
