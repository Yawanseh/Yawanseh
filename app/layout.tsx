import Footer from "@/components/footer";
import {
  defaultTheme,
  siteDescription,
  siteName,
  siteUrl,
  twitterCreator,
  twitterSite,
} from "@/constants";
import "./globals.css";

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
    images: "/public/images",
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
    <html lang="en" data-theme={defaultTheme.value}>
      <body className="min-h-screen max-w-7xl m-auto p-6 md:p-24">
        <main className="min-h-[calc(100vh-250px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
