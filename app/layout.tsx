import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import "./singularity.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Agrim's Portfolio",
  description:
    "Welcome to my portfolio inconveniently located in the singularity of Gargantua's black hole!",
  icons: {
    icon: [
      { url: "/myfavicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${grotesk.variable} ${jetbrains.variable}`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
        <Analytics />
        {process.env.NODE_ENV === "production" && (
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        )}
      </body>
    </html>
  );
}
