import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/perfil";

/**
 * /robots.txt
 *
 * Libera tudo menos as rotas internas. Os robôs de IA (GPTBot,
 * ClaudeBot, PerplexityBot…) entram na regra "*" de propósito: o
 * objetivo aqui é justamente ser lido e citado por eles.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dash", "/cadastro"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
