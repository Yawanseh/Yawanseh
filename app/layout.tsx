import Footer from "@/components/footer";
import Header from "@/components/header";
import GTagLayout from "@/components/layout/gtag-layout";
import {
  authorName,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
  twitterCreator,
  twitterSite,
} from "@/constants";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fallback",
});

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteName,
    template: `%s | ${authorName}`,
  },
  description: siteDescription,
  keywords: siteKeywords.split(",").map((k) => k.trim()),
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: "summary_large_image",
        title: siteName,
        description: siteDescription,
        creator: twitterCreator,
        site: twitterSite,
        images: ["/images/og-image.png"],
      },
    }),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <GTagLayout>
        <body className="antialiased">
          <script dangerouslySetInnerHTML={{ __html: themeInit }} />
          <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 pb-10 sm:px-8">
            <Header />
            <main className="min-h-[calc(100vh-320px)] flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </GTagLayout>
    </html>
  );
}
