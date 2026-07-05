import {
  authorName,
  companyLabel,
  roleLabel,
  siteDescription,
  siteName,
  siteUrl,
  socialProfiles,
} from "@/constants";
import type { Post } from "./api";

const abs = (path: string) => `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;

// schema.org Person — the site owner. Reused across pages.
export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: authorName,
    url: siteUrl,
    jobTitle: roleLabel,
    worksFor: { "@type": "Organization", name: companyLabel },
    description: siteDescription,
    image: abs("/images/laith-portrait-light.png"),
    sameAs: socialProfiles,
  };
}

// Homepage: WebSite + Blog + the Person, as a single @graph.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "Blog",
        "@id": `${siteUrl}/#blog`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        author: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
    ],
  };
}

// Article page: BlogPosting + BreadcrumbList as a single @graph.
export function articleSchema(post: Post) {
  const url = abs(`/posts/${post.id}`);
  const image = post.cover ? abs(post.cover) : abs("/images/og-image.png");
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        image,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: post.publishedAtISO,
        dateModified: post.publishedAtISO,
        author: { "@id": `${siteUrl}/#person` },
        publisher: { "@id": `${siteUrl}/#person` },
        keywords: post.tags?.join(", "),
        articleSection: post.tags?.[0],
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#blog` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: post.title, item: url },
        ],
      },
    ],
  };
}
