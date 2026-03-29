import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    "Full Stack Developer building scalable web applications, backend systems, and AI-powered tools.",
  keywords: [
    "Elango Yuvaraj",
    "Full Stack Developer",
    "AI Developer",
    "Tamil Nadu",
    "Web Developer",
    "Portfolio",
    "PHP",
    "Python",
    "Flask",
    "MySQL",
  ],
  openGraph: {
    title: "Elango Yuvaraj | Full Stack Developer",
    description: "Full Stack Developer building scalable web applications, backend systems, and AI-powered tools.",
    type: "website",
    url: "https://elango.dev", // Using placeholder URL as none was provided
    siteName: "Elango Yuvaraj Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-primary text-gray-200 noise transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
