import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import "./singularity.css";

// Space Grotesk sets the whole page; JetBrains Mono is the telemetry face —
// the stage bar, chapter eyebrows and every readout in the HUD.
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agrimsingh.com";
const normalizedSiteUrl = (
  rawSiteUrl.startsWith("http://") || rawSiteUrl.startsWith("https://")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(normalizedSiteUrl),
  title: {
    default: "Agrim Singh | Systems Engineer · Multi-Agent & XR Architect",
    template: "%s | Agrim Singh",
  },
  description:
    "Systems Engineer at IIT Roorkee building distributed multi-agent systems (LangGraph), low-level XR simulation engines (UE5/DirectX 11), and quantitative infra.",
  keywords: [
    "Agrim Singh",
    "Systems Engineer",
    "Multi-Agent Systems",
    "Distributed Multi-Agent Architecture",
    "LangGraph",
    "Unreal Engine 5",
    "DirectX 11",
    "WebGPU",
    "Three.js",
    "IIT Roorkee",
    "SEED Lab IIT Roorkee",
    "Tinkering Lab IIT Roorkee",
    "ArIES IIT Roorkee",
    "Digital Twin",
    "Haptics",
    "Quantitative Trading",
    "Quantitative Infrastructure",
    "Pinch Hackathon",
    "PancakeSwap Hackathon",
    "GDAI Hackathon",
    "High-Performance Computing",
    "MPI Parallel Computing",
    "CUDA",
    "HLSL Shaders",
    "C++",
    "Python",
    "FastAPI",
    "TypeScript",
    "Meta Quest",
    "OpenXR",
    "Autonomous Agents",
    "Smart India Hackathon",
    "Robotics Simulation",
  ],
  authors: [
    {
      name: "Agrim Singh",
      url: "https://github.com/th-efool",
    },
  ],
  creator: "Agrim Singh",
  publisher: "Agrim Singh",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/myfavicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "profile",
    firstName: "Agrim",
    lastName: "Singh",
    username: "th-efool",
    gender: "male",
    locale: "en_US",
    url: "/",
    siteName: "Agrim Singh — Portfolio",
    title: "Agrim Singh | Systems Engineer · Multi-Agent & XR Architect",
    description:
      "Explore the systems portfolio of Agrim Singh: 9-Agent Conference Engine, digital twin haptics (SEED Lab IIT Roorkee), DirectX 11/UE5 simulation, and quant infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agrim Singh — Systems Engineer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrim Singh | Systems Engineer · Multi-Agent & XR Architect",
    description:
      "Systems Engineer at IIT Roorkee building distributed multi-agent systems, low-level XR engines, and quant infra.",
    creator: "@agrimsinghx",
    site: "@agrimsinghx",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${normalizedSiteUrl}/#person`,
      name: "Agrim Singh",
      alternateName: ["th-efool", "Agrim"],
      url: normalizedSiteUrl,
      image: `${normalizedSiteUrl}/me.png`,
      jobTitle: "Systems Engineer · Multi-Agent & XR Architect",
      description:
        "Systems Engineer at IIT Roorkee building distributed multi-agent systems (LangGraph), low-level XR simulation engines (UE5/DirectX 11), and quantitative infra.",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Technology Roorkee",
        alternateName: "IIT Roorkee",
        url: "https://www.iitr.ac.in",
      },
      affiliation: [
        {
          "@type": "Organization",
          name: "Tinkering Lab, IIT Roorkee",
          url: "https://www.linkedin.com/company/18374685/",
        },
        {
          "@type": "ResearchOrganization",
          name: "Soft Electronics And Energy Devices Laboratory (SEED Lab), IIT Roorkee",
        },
        {
          "@type": "Organization",
          name: "ArIES - Artificial Intelligence and Electronics Section, IIT Roorkee",
        },
      ],
      awards: [
        "1st Runner-Up — Pinch Hackathon 2026 (Srishti 2026, IIT Roorkee)",
        "1st Runner-Up — PancakeSwap Hackathon 2026 (Srishti 2026, IIT Roorkee)",
        "2nd Runner-Up — GDAI Hackathon 2025 (Game Dev & AI Guild)",
        "All India Rank 477 (Zonal Rank 203) — International Mathematics Olympiad (IMO)",
        "All India Rank 375 (Zonal Rank 150) — National Science Olympiad (NSO)",
        "Student Coordinator — Smart India Hackathon (SIH) 2025 Grand Finale (IIT Roorkee Centre)",
      ],
      sameAs: [
        "https://github.com/th-efool",
        "https://x.com/agrimsinghx",
        "https://www.linkedin.com/in/agrimsinghx/",
      ],
      knowsAbout: [
        "Distributed Multi-Agent Systems",
        "LangGraph State Machines",
        "Unreal Engine 5",
        "DirectX 11",
        "C++",
        "High-Performance Computing (HPC)",
        "MPI Parallel Computing",
        "Quantitative Infrastructure",
        "Digital Twin Simulation",
        "HLSL Shaders",
        "WebGPU & Three.js",
        "Python",
        "FastAPI",
        "TypeScript",
        "CUDA",
        "OpenXR",
        "Meta Quest Passthrough API",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${normalizedSiteUrl}/#profilepage`,
      url: normalizedSiteUrl,
      name: "Agrim Singh | Systems Engineer · Multi-Agent & XR Architect",
      description:
        "Systems Engineer at IIT Roorkee building distributed multi-agent systems, low-level XR engines, and quant infra.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${normalizedSiteUrl}/#website`,
      },
      about: {
        "@id": `${normalizedSiteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${normalizedSiteUrl}/#person`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${normalizedSiteUrl}/#website`,
      url: normalizedSiteUrl,
      name: "Agrim Singh — Portfolio",
      publisher: {
        "@id": `${normalizedSiteUrl}/#person`,
      },
      description:
        "Official systems engineering portfolio and research architecture showcase of Agrim Singh.",
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${normalizedSiteUrl}/#projects`,
      name: "Key Engineering Projects",
      description:
        "Featured systems engineering, distributed multi-agent, XR simulation, and quant infrastructure projects by Agrim Singh.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": ["SoftwareApplication", "SoftwareSourceCode"],
            name: "9-Agent Conference Engine",
            description:
              "A directed typed state machine where 9 discrete agents collaborate over shared, immutable state deltas in under 3 minutes (1st Runner-Up Pinch Hackathon).",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Cross-platform",
            programmingLanguage: ["Python", "TypeScript"],
            codeRepository: "https://github.com/th-efool",
            url: "https://github.com/th-efool",
            author: { "@id": `${normalizedSiteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": ["VideoGame", "SoftwareApplication"],
            name: "Mirrors & Butterfly Effect",
            description:
              "A non-Euclidean causality engine and psychological narrative loop game exploring dynamic environment restructuring (2nd Runner-Up GDAI Hackathon).",
            applicationCategory: "GameApplication",
            gamePlatform: ["PC", "Windows"],
            operatingSystem: "Windows",
            codeRepository: "https://github.com/th-efool/UE5-FrostOfEndlessTommorows",
            url: "https://github.com/th-efool/UE5-FrostOfEndlessTommorows",
            author: { "@id": `${normalizedSiteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": ["SoftwareApplication", "SoftwareSourceCode"],
            name: "PullO-Showcase",
            description:
              "A distributed gateway that securely exposes local Ollama, LM Studio, and llama.cpp instances across teams via unified APIs without port exposure.",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Linux, Windows, macOS",
            programmingLanguage: ["Python"],
            codeRepository: "https://github.com/th-efool/PullO-Showcase",
            url: "https://github.com/th-efool/PullO-Showcase",
            author: { "@id": `${normalizedSiteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": ["SoftwareApplication", "SoftwareSourceCode"],
            name: "GuardAi (GovGuard)",
            description:
              "A comprehensive AI governance platform providing real-time monitoring, analysis, and enforcement of AI safety policies across multiple regulatory frameworks.",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Cross-platform",
            programmingLanguage: ["TypeScript"],
            codeRepository: "https://github.com/th-efool",
            url: "https://github.com/th-efool",
            author: { "@id": `${normalizedSiteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": ["SoftwareApplication", "SoftwareSourceCode"],
            name: "Enterprise POS System",
            description:
              "Modern, enterprise-grade POS architecture built with Golang, React, TypeScript, and PostgreSQL featuring role-based access and high-throughput query pipelines.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Cross-platform",
            programmingLanguage: ["Go", "TypeScript", "SQL"],
            codeRepository: "https://github.com/th-efool",
            url: "https://github.com/th-efool",
            author: { "@id": `${normalizedSiteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": ["SoftwareApplication", "SoftwareSourceCode"],
            name: "QuestCameraKit",
            description:
              "Template and reference projects demonstrating Meta Quest's Passthrough Camera API for advanced AR/VR computer vision, spatial tracking, and custom HLSL shader effects.",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Meta Quest OS, Android",
            programmingLanguage: ["C++", "C#", "HLSL"],
            codeRepository: "https://github.com/th-efool",
            url: "https://github.com/th-efool",
            author: { "@id": `${normalizedSiteUrl}/#person` },
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: some browser extensions inject attributes onto
    // <html>/<body> (e.g. data-__host_prefix_..._-filters-channel) before React
    // hydrates, which otherwise trips a hydration mismatch. This only tolerates
    // attribute diffs on these root elements — it does not affect the app UI.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${grotesk.variable} ${jetbrains.variable}`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
        <Analytics />
        {/* Only load analytics in production */}
        {process.env.NODE_ENV === "production" && (
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        )}
      </body>
    </html>
  );
}
