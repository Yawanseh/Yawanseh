import Footer from "@/components/footer";
import Header from "@/components/header";
import GTagLayout from "@/components/layout/gtag-layout";
import {
  siteDescription,
  siteName,
  siteUrl,
  twitterCreator,
  twitterSite,
} from "@/constants";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fallback",
});

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    images: "/images/og-image.png",
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: "summary_large_image",
        creator: twitterCreator,
        site: twitterSite,
      },
    }),
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
