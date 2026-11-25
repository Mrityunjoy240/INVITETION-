import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anamika & Subhadip · Shubho Bibaho | 13 December 2026",
  description: "A bespoke wedding invitation celebrating the marriage of Anamika & Subhadip in Moyna, West Bengal on Sunday, 13 December 2026.",
  keywords: ["Anamika", "Subhadip", "Wedding", "Shubho Bibaho", "Moyna", "Garhmoyna", "Kumudini Guest House", "Bengali Wedding"],
  openGraph: {
    title: "Anamika & Subhadip · Wedding Invitation",
    description: "Join us in celebrating the holy union of Anamika and Subhadip in Moyna, West Bengal.",
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
    <html lang="bn" suppressHydrationWarning>
      <body className="antialiased selection:bg-[#dfbe83] selection:text-[#180306]">
        {children}
      </body>
    </html>
  );
}
