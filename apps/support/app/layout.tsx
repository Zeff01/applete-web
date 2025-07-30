import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "@shared/src/components/ui/sonner"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Applete | Support",
  description:
    "Discover and organize sports events with Applete. Book courts, join communities, and manage your athletic lifestyle all in one place.",
  keywords: [
    "Applete",
    "sports events",
    "court booking",
    "sports community",
    "event management",
    "sports lifestyle",
    "Android iOS sports app",
  ],
  openGraph: {
    title: "Applete | Your All-in-One Sports Community App",
    description:
      "Create or join exciting events, connect with teams, and manage your athletic lifestyle—all in one place with Applete.",
    // url: "https://applete.io",
    siteName: "Applete",
    // images: [
    //   {
    //     url: "https://applete.io/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Applete Hero Banner",
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Applete | Your All-in-One Sports Community App",
  //   description:
  //     "Organize events, connect with athletes, and book courts easily—on iOS and Android.",
  //   images: ["https://applete.io/og-image.png"],
  // },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body>
        {children}
        <Toaster />
        </body>
    </html>
  );
}
