import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const fontPoppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontFredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "BlushBowl | Find Your Next Favorite Meal",
  description:
    "A cozy corner of the internet for discovering beautiful, easy-to-follow recipes.",
  openGraph: {
    title: "BlushBowl | Find Your Next Favorite Meal",
    description:
      "A cozy corner of the internet for discovering beautiful, easy-to-follow recipes.",
    url: "https://blushbowl.vercel.app",
    siteName: "BlushBowl",
    images: [
      {
        url: "https://blushbowl.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
        <link
          rel="preload"
          href="/blushbowl-logo.png"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${fontPoppins.variable} ${fontFredoka.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
