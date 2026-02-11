import type { Metadata } from "next";
import { site } from "@/lib/site";

const baseUrl = "https://example-conference.vercel.app";

export function buildMetadata(title: string, description?: string): Metadata {
  const fullTitle = `${title} | ${site.conferenceName}`;
  const summary = description ?? site.description;

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description: summary,
    openGraph: {
      title: fullTitle,
      description: summary,
      type: "website",
      url: baseUrl,
      siteName: site.conferenceName
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: summary
    }
  };
}
