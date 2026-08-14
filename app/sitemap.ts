import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/perfil";

/** /sitemap.xml — só as páginas públicas (/cadastro e /dash ficam de fora) */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/termo`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
