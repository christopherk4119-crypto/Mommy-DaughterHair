import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mommyanddaughterhair.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
