import type { Metadata } from "next";
import { Press_Start_2P, Geist_Mono } from "next/font/google";
import "./globals.css";
import PixelTraillWrapper from "@/components/pixelTrails/pixelTraillWrapper";

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
      <body
        className={`${geistSans.className} ${geistMono.variable} h-screen    overflow-auto`}
      >
        <PixelTraillWrapper />
        {children}
      </body>
    </html>
  );
}
