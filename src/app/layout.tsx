import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema } from "@/components/seo/organization-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaldiademresearchlaboratory-8ml7ui2yc.vercel.app"),
  title: {
    default: "RoyalDiadem Research & Laboratory | Precision Engineering & Strategic R&D",
    template: "%s | RoyalDiadem Research & Laboratory"
  },
  description: "Official representative of Altek, Inc. specializing in precision CNC machining, injection molding, and advanced laboratory research for Aerospace, Medical, and Defense.",
  keywords: ["Precision Machining", "Injection Molding", "Contract Assembly", "Aerospace Manufacturing", "Medical Device Manufacturing", "Laboratory Research", "Altek Representative"],
  authors: [{ name: "RoyalDiadem Research & Laboratory" }],
  creator: "RoyalDiadem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "RoyalDiadem Research & Laboratory | Precision Engineering",
    description: "World-class precision engineering and strategic manufacturing solutions for mission-critical industries.",
    siteName: "RoyalDiadem Research & Laboratory",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoyalDiadem Research & Laboratory",
    description: "Precision engineering and strategic manufacturing solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OrganizationSchema />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
