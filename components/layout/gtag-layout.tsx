"use client";

import * as gtag from "@/lib/gtag";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const GTagLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${gtag.GA_TRACKING_ID}');
        `}
      </Script>
      {children}
    </>
  );
};

export default GTagLayout;
