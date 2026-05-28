import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CalendlyWidget from "@/components/ui/CalendlyWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vacuul.com"),
  title: "Vacuul – Vacuum Palm Cooling Technology",
  description:
    "Entdecken Sie Vacuum Palm Cooling – die innovative Technologie für schnelle Regeneration und maximale Leistung. Buchen Sie jetzt eine Beratung.",
  keywords: [
    "Vacuum Palm Cooling",
    "Kühlung",
    "Regeneration",
    "Leistung",
    "Thermoregulation",
    "Sport",
    "Therapie",
    "Vacuul",
  ],
  openGraph: {
    title: "Vacuul – Meet us at Health Expo Basel",
    description:
      "Book your meeting with Vacuul at Health Expo Basel. Discover Vacuum Palm Cooling technology for recovery and performance.",
    url: "https://vacuul.com",
    siteName: "Vacuul",
    locale: "de_CH",
    type: "website",
    images: [{ url: "/images/hero-main.jpg", width: 1440, height: 1440 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vacuul – Vacuum Palm Cooling",
    description:
      "Entdecken Sie Vacuum Palm Cooling – die innovative Technologie für schnelle Regeneration und maximale Leistung.",
    images: ["/images/hero-main.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://vacuul.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}