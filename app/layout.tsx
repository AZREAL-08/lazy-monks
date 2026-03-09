import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import ParticlesBackground from "./components/ParticlesBackground";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazy Monks",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-orange-500/30`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden transition-colors duration-500 relative">
            {/* Particles layer will span the background and receive pointer events where foreground is transparent */}
            <ParticlesBackground />

            {/* Foreground layer for actual application content */}
            <div className="relative z-10 w-full h-full pointer-events-none">
              {/* Re-enable pointer events for actual content elements */}
              <div className="pointer-events-auto">
                <Link href="/" className="fixed top-6 left-6 z-50 glass p-1.5 rounded-full hover:scale-110 transition-transform flex items-center justify-center overflow-hidden">
                  <img src="/logo.svg" alt="Lazy Monks" className="w-10 h-10 rounded-full object-cover" />
                </Link>
                <ThemeToggle />
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
