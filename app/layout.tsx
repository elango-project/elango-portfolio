import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elango Yuvaraj | Full Stack Developer",
  description:
    "Full Stack Developer specializing in web applications, backend systems, REST APIs, and AI-powered solutions.",
  keywords: [
    "Elango Yuvaraj",
    "Full Stack Developer",
    "AI Developer",
    "Tamil Nadu",
    "Web Developer",
    "Portfolio",
    "React",
    "Spring Boot",
    "Python",
    "Java",
  ],
  alternates: {
    canonical: "https://elango.dev",
  },
  openGraph: {
    title: "Elango Yuvaraj | Full Stack Developer",
    description: "Full Stack Developer specializing in web applications, backend systems, REST APIs, and AI-powered solutions.",
    type: "website",
    url: "https://elango.dev",
    siteName: "Elango Yuvaraj Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elango Yuvaraj Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elango Yuvaraj | Full Stack Developer",
    description: "Full Stack Developer specializing in web applications, backend systems, REST APIs, and AI-powered solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elango Yuvaraj",
    url: "https://elango.dev",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/elango-project",
      "https://linkedin.com/in/elango-project",
      "https://elango.dev",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body noise`}
      >
        {children}
      </body>
    </html>
  );
}
