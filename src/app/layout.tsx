import type { Metadata, Viewport } from "next";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import Glow from "./components/Glow";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "./config";
import { Toaster } from "sonner";
import Plausible from "./components/Plausible";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | " + siteConfig.alias,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.title,
  generator: "Next.js",
  creator: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    siteName: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/Portfolio.png",
        width: 1920,
        height: 1080,
        alt: "Nasir Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/Portfolio.png"],
    creator: "@imnasirr", // update if different
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

// export const metadata: Metadata = {
//   title: siteConfig.title,
//   description: siteConfig.description,
//   keywords: siteConfig.keywords,
//   alternates: {
//     canonical: siteConfig.url,
//   },
//   openGraph: {
//     title: siteConfig.title,
//     description: siteConfig.description,
//     url: siteConfig.url,
//     type: "website",
//     siteName: siteConfig.title,
//     images: [
//       {
//         url: "/Portfolio.png",
//         width: 1920,
//         height: 1080,
//         alt: "Nasir Portfolio",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Nasir" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`RSS Feed for ${siteConfig.name}'s Blog`}
          href="/feed.xml"
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-background text-slate-100`}
      >
        <StarsCanvas />
        <Glow />
        <Toaster />
        <Plausible />
        <div className="max-w-[2325px] mx-auto">{children}</div>
      </body>
      <Analytics />
      <SpeedInsights />
      {/* <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
            /> */}
    </html>
  );
}
