import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codifya Software",
  description: "Codifya Software - Modern Dijital Çözümler",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Codifya Software" />
        <meta property="og:description" content="Codifya Software - Modern Dijital Çözümler" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codifya.com/" />
        <meta property="og:image" content="/favicon_io/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Codifya Software" />
        <meta name="twitter:description" content="Codifya Software - Modern Dijital Çözümler" />
        <meta name="twitter:image" content="/favicon_io/android-chrome-512x512.png" />
        <link rel="canonical" href="https://codifya.com/" />
        <meta charSet="utf-8" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
