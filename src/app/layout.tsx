import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anamika & Subhadip · Shubho Bibaho | 13 December 2026",
  description:
    "A bespoke wedding invitation celebrating the marriage of Anamika & Subhadip in Moyna, West Bengal on Sunday, 13 December 2026.",
  keywords: [
    "Anamika",
    "Subhadip",
    "Wedding",
    "Shubho Bibaho",
    "Moyna",
    "Garhmoyna",
    "Kumudini Guest House",
    "Bengali Wedding",
  ],
  openGraph: {
    title: "Anamika & Subhadip · Wedding Invitation",
    description:
      "Join us in celebrating the holy union of Anamika and Subhadip in Moyna, West Bengal.",
    images: [
      {
        url: "/assets/invitation-card-original.png",
        width: 1200,
        height: 630,
        alt: "Anamika & Subhadip Wedding Invitation",
      },
    ],
  },
  icons: {
    icon: "/assets/monogram.svg",
    apple: "/assets/monogram.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;1,6..96,400&family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Tiro+Bangla:ital@0;1&family=Hind+Siliguri:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#E8C29D]/40 selection:text-[#4A2810]">
        {children}
      </body>
    </html>
  );
}
