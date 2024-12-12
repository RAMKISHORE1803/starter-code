import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

// Distinctive modern font for headlines with unique technical character
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

// Unique geometric sans-serif with distinctive characters
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Launch Your Project | Modern Development Platform",
  description: "Generate production-ready full-stack applications with authentication, database setup, and GitHub integration in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}